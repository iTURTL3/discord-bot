module.exports = function(bot, config, data, utilities, dependencies) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'say\\s+(.+)$', 'i'),
      'example':     config.prefix + 'say <message>',
      'name':        'say',
      'description': 'make me say something',
      'callback':    'sayMessage',
      'category':    'misc',
      'cooldown':    0,
      'disabled':    false,
      'private':     false,
      'nsfw':        false
   });
   data.callbacks.sayMessage = function(message, text) {
      message.channel.send(text);
   };
};
