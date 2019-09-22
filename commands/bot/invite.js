module.exports = function(bot, config, data, utilities, dependencies) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'invite$', 'i'),
      'example':     config.prefix + 'invite',
      'name':        'invite',
      'description': 'invite me to your server',
      'callback':    'botInvite',
      'category':    'bot',
      'cooldown':    0,
      'disabled':    false,
      'private':     false,
      'nsfw':        false
   });
   data.callbacks.botInvite = function(message) {
      message.channel.send({'embed': {
         'color':       config.embedColor,
         'title':       config.name + ' - Invite',
         'description': '[invite me to your server!](' + config.invite + ')'
      }});
   };
};
