module.exports = function(bot, config, data, utilities, dependencies) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'info\\s+(.+)$', 'i'),
      'example':     config.prefix + 'info <command name>',
      'name':        'info',
      'description': 'check a commands information',
      'callback':    'commandInfo',
      'category':    'bot',
      'cooldown':    0,
      'disabled':    false,
      'private':     false,
      'nsfw':        false
   });
   data.callbacks.commandInfo = function(message, name) {
      var command = utilities.arrayFind(data.commands, function(command) {
         return command.name.toLowerCase() === name.toLowerCase();
      });
      message.channel.send(command ? {'embed': {
         'color':       config.embedColor,
         'title':       config.name + ' - ' + command.name + ' command',
         'description': command.description,
         'fields':      [
            {
               'name':   'example',
               'value':  config.prefix + command.example,
               'inline': true
            },
            {
               'name':   'category',
               'value':  command.category,
               'inline': true
            },
            {
               'name':   'cooldown',
               'value':  command.cooldown,
               'inline': true
            },
            {
               'name':   'disabled',
               'value':  String(command.disabled),
               'inline': true
            },
            {
               'name':   'private',
               'value':  String(command.private),
               'inline': true
            },
            {
               'name':   'nsfw',
               'value':  String(command.nsfw),
               'inline': true
            }
         ]
      }} : 'i was unable to find a command with that name!');
   };
};
