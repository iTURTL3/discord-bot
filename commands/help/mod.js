module.exports = function(bot, config, data, utilities, callbacks) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'mod\\s*([0-9]+)?$', 'i'),
      'description': 'display my moderation command list',
      'example':     config.prefix + 'mod <page number>',
      'callback':    'moderationCommandList',
      'category':    'help',
      'cooldown':    2000,
      'disabled':    false,
      'private':     false,
      'nsfw':        false
   });
   callbacks.moderationCommandList = function(message, page) {
      var pagination = utilities.pagination(utilities.arraySelect(data.commands, function(command) {
         return !command.disabled && !command.private && command.category === 'moderation';
      }, function(command) {
         return {
            'name':   command.description,
            'value':  '``' + command.example + '``',
            'inline': false
         };
      }), config.pagination, page);
      message.channel.send({'embed': {
         'color':  config.embedColor,
         'title':  config.name + ' - Moderation Commands',
         'fields': pagination.items,
         'footer': {
            'text': 'displaying page: ' + pagination.page + ' of ' + pagination.pages
         }
      }});
   };
};
