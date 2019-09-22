module.exports = function(bot, config, data, utilities, dependencies) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'ping$', 'i'),
      'example':     'ping',
      'name':        'ping',
      'description': 'check my ping latency',
      'callback':    'botLatency',
      'category':    'bot',
      'cooldown':    0,
      'disabled':    false,
      'private':     false,
      'nsfw':        false
   });
   data.callbacks.botLatency = function(message) {
      message.channel.send({'embed': {
         'color':       config.embedColor,
         'title':       config.name + ' - Ping',
         'description': 'pong, ' + utilities.shortenFloat(bot.ping, 2) + 'ms!'
      }});
   };
};
