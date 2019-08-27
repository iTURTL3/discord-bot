module.exports = function(bot, config, data, utilities, callbacks) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'help\\s*([0-9]+)?$', 'i'),
      'description': 'display my command list',
      'example':     config.prefix + 'help <page number>',
      'callback':    'helpCommandList',
      'category':    'help',
      'cooldown':    2000,
      'disabled':    false,
      'private':     false,
      'nsfw':        false
   });
   callbacks.helpCommandList = function(message, page) {
      var pagination = utilities.pagination(utilities.arraySelect(data.commands, function(command) {
         return !command.disabled && !command.private && command.category === 'help';
      }, function(command) {
         return {
            'name':   command.description,
            'value':  '``' + command.example + '``',
            'inline': false
         };
      }), config.pagination, page);
      message.channel.send({'embed': {
         'color':  config.embedColor,
         'title':  config.name + ' - Help Commands',
         'fields': pagination.items,
         'footer': {
            'text': 'displaying page: ' + pagination.page + ' of ' + pagination.pages
         }
      }});
   };
};
