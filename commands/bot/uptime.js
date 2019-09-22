module.exports = function(bot, config, data, utilities, dependencies) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'uptime$', 'i'),
      'example':     config.prefix + 'uptime',
      'name':        'uptime',
      'description': 'check how long i have been alive for',
      'callback':    'botUpTime',
      'category':    'bot',
      'cooldown':    0,
      'disabled':    false,
      'private':     false,
      'nsfw':        false
   });
   data.callbacks.botUpTime = function(message) {
      var time = utilities.msToDuration(bot.uptime);
      message.channel.send({'embed': {
         'color':       config.embedColor,
         'title':       config.name + ' - Up Time',
         'description': 'i have been alive for ' + utilities.msToDurationString(bot.uptime) + '!'
      }});
   };
};
