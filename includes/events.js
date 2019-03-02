module.exports = function(bot, config, callbacks) {
   var self   = this;
   self.error = function(error) {
      console.log(error);
   };
   self.message = function(message) {
      if ( message.guild.me.permissions.has(config.permissions) && message.content.indexOf(config.prefix) === 0 && !message.author.bot ) {
         for ( var i = 0, length = config.commands.length, match = false; i < length; i++ ) {
            if ( !config.commands[i].disabled ) {
               match = message.content.match(config.commands[i].pattern);
               if ( match ) {
                  match.shift();
                  match.unshift(message);
                  callbacks[config.commands[i].callback].apply(null, match);
                  break;
               }
            }
         }
      }
   };
};
