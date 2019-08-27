module.exports = function(bot, config, data, utilities, callbacks) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'invite$', 'i'),
      'description': 'invite me to your server',
      'example':     config.prefix + 'invite',
      'callback':    'inviteLink',
      'category':    'bot',
      'cooldown':    2000,
      'disabled':    false,
      'private':     false,
      'nsfw':        false
   });
   callbacks.inviteLink = function(message) {
      message.channel.send({'embed': {
         'color':       config.embedColor,
         'title':       config.name + ' - Invite',
         'description': '[invite me to your server!](' + config.invite + ')'
      }});
   };
};
