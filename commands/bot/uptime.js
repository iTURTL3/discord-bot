module.exports = function(bot, config, data, utilities, callbacks) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'uptime$', 'i'),
      'description': 'check how long i have been alive for',
      'example':     config.prefix + 'uptime',
      'callback':    'upTime',
      'category':    'bot',
      'cooldown':    2000,
      'disabled':    false,
      'private':     false
   });
   callbacks.upTime = function(message) {
      var time = utilities.msToDuration(bot.uptime);
      message.channel.send({'embed': {
         'color':       config.embedColor,
         'title':       config.name + ' - Up Time',
         'description': 'i have been alive for ' + time['0'] + 'd ' + time['1'] + 'h ' + time['2'] + 'm ' + time['3'] + 's!'
      }});
   };
};
