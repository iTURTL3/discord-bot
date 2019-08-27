module.exports = function(bot, config, data, utilities, callbacks) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'ping$', 'i'),
      'description': 'check my ping latency',
      'example':     config.prefix + 'ping',
      'callback':    'pingPong',
      'category':    'bot',
      'cooldown':    2000,
      'disabled':    false,
      'private':     false,
      'nsfw':        false
   });
   callbacks.pingPong = function(message) {
      message.channel.send({'embed': {
         'color':       config.embedColor,
         'title':       config.name + ' - Ping',
         'description': 'pong, ' + utilities.shortenFloat(bot.ping, 2) + 'ms!'
      }});
   };
};
