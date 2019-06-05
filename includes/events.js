module.exports = function(bot, config, data, utilities, callbacks) {
   var self   = this;
   self.error = function(error) {
      console.log(error);
   };
   self.ready = function() {
      bot.user.setActivity('You, ' + config.prefix + 'help', {type: 'WATCHING'});
   };
   self.message = function(message) {
      if ( message.content.indexOf(config.prefix) === 0 && !message.author.bot ) {
         for ( var i = 0, length = data.commands.length, match = false; i < length; i++ ) {
            match = message.content.match(data.commands[i].pattern);
            if ( match ) {
               if ( data.commands[i].disabled ) {
                  message.channel.send('this command is currently disabled!');
               }
               else if ( message.author.id in data.cooldowns ) {
                  message.channel.send('you can use another command in **' + utilities.shortenFloat((data.cooldowns[message.author.id] - message.createdTimestamp) / 1000, 2) + '**s!');
               }
               else {
                  match.shift();
                  match.unshift(message);
                  callbacks[data.commands[i].callback].apply(null, match);
                  utilities.objectSetAndDelete(data.cooldowns, message.author.id, message.createdTimestamp + data.commands[i].cooldown, data.commands[i].cooldown);
               }
               break;
            }
         }
      }
   };
};
