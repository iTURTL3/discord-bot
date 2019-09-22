module.exports = function(config, data, utilities) {
   var self   = this;
   self.error = function(error) {
      console.log(error);
   };
   self.ready = function() {
      this.user.setActivity('You, ' + config.prefix + 'help', {'type': 'WATCHING'});
   };
   self.message = function(message) {
      if ( message.content.indexOf(config.prefix) === 0 && !message.author.bot ) {
         for ( var i = 0, length = data.commands.length, match = false; i < length; i++ ) {
            match = message.content.match(data.commands[i].pattern);
            if ( match ) {
               if ( data.commands[i].disabled ) {
                  message.channel.send('The **' + data.commands[i].name + '** command is currently disabled!');
               }
               else if ( data.commands[i].nsfw && !message.channel.nsfw ) {
                  message.channel.send('You can only use the **' + data.commands[i].name + '** command in NSFW channels!');
               }
               else if ( message.author.id in data.cooldowns ) {
                  message.channel.send('You can use another command in **' + utilities.shortenFloat(Math.max(0.01, (data.cooldowns[message.author.id] - message.createdTimestamp) / 1000), 2) + '**s!');
               }
               else if ( message.author.id + data.commands[i].name in data.cooldowns ) {
                  message.channel.send('You can use the **' + data.commands[i].name + '** command again in **' + utilities.shortenFloat(Math.max(0.01, (data.cooldowns[message.author.id + data.commands[i].name] - message.createdTimestamp) / 1000), 2) + '**s!');
               }
               else {
                  match.shift();
                  match.unshift(message);
                  data.callbacks[data.commands[i].callback].apply(null, match);
                  utilities.objectSetAndDelete(data.cooldowns, message.author.id, message.createdTimestamp + config.cooldown, config.cooldown);
                  if ( data.commands[i].cooldown > config.cooldown ) {
                     utilities.objectSetAndDelete(data.cooldowns, message.author.id + data.commands[i].name, message.createdTimestamp + data.commands[i].cooldown, data.commands[i].cooldown);
                  }
               }
               break;
            }
         }
      }
   };
};
