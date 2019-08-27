module.exports = function(bot, config, data, utilities, callbacks) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'misc\\s*([0-9]+)?$', 'i'),
      'description': 'display my miscellaneous command list',
      'example':     config.prefix + 'misc <page number>',
      'callback':    'miscCommandList',
      'category':    'help',
      'cooldown':    2000,
      'disabled':    false,
      'private':     false,
      'nsfw':        false
   });
   callbacks.miscCommandList = function(message, page) {
      var pagination = utilities.pagination(utilities.arraySelect(data.commands, function(command) {
         return !command.disabled && !command.private && command.category === 'misc';
      }, function(command) {
         return {
            'name':   command.description,
            'value':  '``' + command.example + '``',
            'inline': false
         };
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
