module.exports = function(bot, config, data, utilities, dependencies) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'mod\\s*([0-9]+)?$', 'i'),
      'example':     config.prefix + 'mod <page number>',
      'name':        'mod',
      'description': 'display my moderation command list',
      'callback':    'moderationCommandList',
      'category':    'help',
      'cooldown':    0,
      'disabled':    false,
      'private':     false,
      'nsfw':        false
   });
   data.callbacks.moderationCommandList = function(message, page) {
      var pagination = utilities.pagination(utilities.arraySelect(data.commands, function(command) {
         return command.category === 'mod' && !command.disabled && !command.private && (!command.nsfw || command.nsfw && message.channel.nsfw);
      }, function(command) {
         return {'name': command.description, 'value': '``' + command.example + '``', 'inline': false};
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
