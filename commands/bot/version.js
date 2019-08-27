module.exports = function(bot, config, data, utilities, callbacks) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'version$', 'i'),
      'description': 'check my current version',
      'example':     config.prefix + 'version',
      'callback':    'botVersion',
      'category':    'bot',
      'cooldown':    2000,
      'disabled':    false,
      'private':     false,
      'nsfw':        false
   });
   callbacks.botVersion = function(message) {
      message.channel.send({'embed': {
         'color':       config.embedColor,
         'title':       config.name + ' - Version',
         'description': 'my current version is ' + config.version + '!'
      }});
   };
};
