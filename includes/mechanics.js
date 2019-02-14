module.exports = function(config) {
   var self  = this
   self.ping = function(message) {
      message.channel.send('pong!');
   };
   self.say = function(message, text) {
      message.channel.send(text);
   };
   self.avatar = function(message) {
      message.channel.send({"embed": {
         'title': message.author.username + '\'s avatar',
         'color': 2338864,
         'image': {
            'url': message.author.avatarURL
         }
      }});
   };
   self.parse = function(message) {
      if ( !message.author.bot && message.content.indexOf(config.prefix) > -1 ) {
         for ( var i = 0, length = config.commands.length, match = false; i < length; i++ ) {
            if ( config.commands[i].disabled ) {
               continue;
            }
            else {
               match = message.content.match(config.commands[i].pattern);
               if ( match ) {
                  match.shift();
                  match.unshift(message);
                  self[config.commands[i].callback].apply(null, match);
                  break;
               }
            }
         }
      }
   };
};
