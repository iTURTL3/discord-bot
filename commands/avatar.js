module.exports = function(bot, config, data, utilities, callbacks) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'avatar\\s*(\\<\\@\\!?[0-9]+\\>)?$', 'i'),
      'description': 'display somebodys avatar',
      'example':     config.prefix + 'avatar <mention>',
      'callback':    'avatar',
      'cooldown':    2000,
      'disabled':    false,
      'private':     false
   });
   callbacks.avatar = function(message) {
      var user      = message.mentions.users.first() || message.author;
      var extension = user.avatarURL.match(/\.(png|jpg|jpeg|gif)/)['0'];
      message.channel.send({'files': [{
         'name':       config.name + extension,
         'attachment': 'https://cdn.discordapp.com/avatars/' + user.id + '/' + user.avatar + extension
      }]});
   };
};
