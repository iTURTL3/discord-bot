module.exports = function(bot, config, data, utilities, dependencies) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'about$', 'i'),
      'example':     config.prefix + 'about',
      'name':        'about',
      'description': 'check information about me',
      'callback':    'aboutMe',
      'category':    'bot',
      'cooldown':    0,
      'disabled':    false,
      'private':     false,
      'nsfw':        false
   });
   data.callbacks.aboutMe = function(message) {
      var time = utilities.msToDuration(bot.uptime);
      message.channel.send({'embed': {
         'color':  config.embedColor,
         'title':  config.name + ' - About Me',
         'fields': [
            {
               'name':   'ping',
               'value':  utilities.shortenFloat(bot.ping, 2) + 'ms!',
               'inline': true
            },
            {
               'name':   'uptime',
               'value':  time['0'] + 'd ' + time['1'] + 'h ' + time['2'] + 'm ' + time['3'] + 's!',
               'inline': true
            },
            {
               'name':   'servers',
               'value':  bot.guilds.size,
               'inline': true
            },
            {
               'name':   'version',
               'value':  config.version,
               'inline': true
            },
            {
               'name':   'commands',
               'value':  data.commands.length,
               'inline': true
            },
            {
               'name':   'invite',
               'value':  '[invite link!](' + config.invite + ')',
               'inline': true
            }
         ]
      }});
   };
};
