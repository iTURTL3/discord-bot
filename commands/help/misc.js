module.exports = function(bot, config, data, utilities, dependencies) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'misc\\s*([0-9]+)?$', 'i'),
      'example':     config.prefix + 'misc <page number>',
      'name':        'misc',
      'description': 'display my miscellaneous command list',
      'callback':    'miscCommandList',
      'category':    'help',
      'cooldown':    0,
      'disabled':    false,
      'private':     false,
      'nsfw':        false
   });
   data.callbacks.miscCommandList = function(message, page) {
      var pagination = utilities.pagination(utilities.arraySelect(data.commands, function(command) {
         return command.category === 'misc' && !command.disabled && !command.private && (!command.nsfw || command.nsfw && message.channel.nsfw);
      }, function(command) {
         return {'name': command.description, 'value': '``' + command.example + '``', 'inline': false};
      }), config.pagination, page);
      message.channel.send({'embed': {
         'color':  config.embedColor,
         'title':  config.name + ' - Miscellaneous Commands',
         'fields': pagination.items,
         'footer': {
            'text': 'displaying page: ' + pagination.page + ' of ' + pagination.pages
         }
      }});
   };
};
