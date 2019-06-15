module.exports = function(bot, config, data, utilities, callbacks) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'say\\s*(.+)$', 'i'),
      'description': 'make me say something',
      'example':     config.prefix + 'say <text>',
      'callback':    'say',
      'category':    'misc',
      'cooldown':    2000,
      'disabled':    false,
      'private':     false
   });
   callbacks.say = function(message, text) {
      message.channel.send(text);
   };
};
