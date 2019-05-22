module.exports = function(bot, config, data, utilities, callbacks) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'help\\s*([0-9]+)?$', 'i'),
      'description': 'display my command list',
      'example':     config.prefix + 'help <page number>',
      'callback':    'commandList',
      'cooldown':    2000,
      'disabled':    false,
      'private':     false
   });
   callbacks.commandList = function(message, page) {
      var commands = utilities.arraySelect(data.commands, function(command) {
         return !command.disabled && !command.private;
      }, function(command) {
         return {
            'name':   command.description,
            'value':  '``' + command.example + '``',
            'inline': false
         };
      });
      var pagination = utilities.pagination(commands, config.pagination, page);
      message.channel.send({'embed': {
         'color':  config.embedColor,
         'title':  config.name + ' - Bot Commands',
         'fields': pagination.items,
         'footer': {
            'text': 'displaying page: ' + pagination.page + ' of ' + pagination.pages
         }
      }});
   };
};
