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
      message.channel.send({'embed': {
         'color':  config.embedColor,
         'title':  config.name + ' - About Me',
         'fields': [
            {
               'name':   'ping',
               'value':  utilities.shortenFloat(bot.ping, 2) + 'ms',
               'inline': true
            },
            {
               'name':   'uptime',
               'value':  utilities.msToDurationString(bot.uptime),
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
