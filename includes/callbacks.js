module.exports = function(bot, config) {
   var self = this
   self.say = function(message, text) {
      message.channel.send(text);
   };
   self.invite = function(message) {
      message.channel.send({'embed': {
         'title':       config.name + ' - Invite',
         'description': 'invite [' + config.name + '](' + config.inviteUrl + ') to your server',
         'color':       config.embedColor
      }});
   };
   self.pingPong = function(message) {
      message.channel.send({'embed': {
         'title':       config.name + ' - Ping',
         'description': 'pong, ' + Math.round(bot.ping) + 'ms',
         'color':       config.embedColor
      }});
   };
   self.upTime = function(message) {
      var milliseconds = bot.uptime;
      var days         = Math.floor(milliseconds  / (1000 * 60 * 60 * 24));
      var hours        = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
      var minutes      = Math.floor((milliseconds / (1000 * 60)) % 60);
      var seconds      = Math.floor((milliseconds / 1000) % 60);
      message.channel.send({'embed': {
         'title':       config.name + ' - Up Time',
         'description': 'i have been alive for ' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's',
         'color':       config.embedColor
      }});
   };
   self.serverCount = function(message) {
      message.channel.send({'embed': {
         'title':       config.name + ' - Server Count',
         'description': 'i am in ' + bot.guilds.size + ' servers!',
         'color':       config.embedColor
      }});
   };
   self.commandList = function(message) {
      for ( var i = 0, commands = config.commands, length = commands.length, fields = []; i < length; i++ ) {
         if ( !commands[i].disabled && !commands[i].private ) {
            fields.push({
               'name':   commands[i].description,
               'value':  '``' + commands[i].example + '``',
               'inline': false
            });
         }
      }
      message.channel.send({'embed': {
         'title':  config.name + ' - Help',
         'fields': fields,
         'color':  config.embedColor
      }});
   };
};
