module.exports = function(bot, config, data, utilities, dependencies) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'avatar\\s*(\\<\\@\\!?[0-9]+\\>)?$', 'i'),
      'example':     config.prefix + 'avatar <mention>',
      'name':        'avatar',
      'description': 'display somebodys avatar',
      'callback':    'avatar',
      'category':    'misc',
      'cooldown':    0,
      'disabled':    false,
      'private':     false,
      'nsfw':        false
   });
   data.callbacks.avatar = function(message) {
      var user      = message.mentions.users.first() || message.author;
      var extension = user.displayAvatarURL.match(/\.(png|jpg|jpeg|gif)/)['0'];
      message.channel.send({'files': [{
         'name':       config.name + extension,
         'attachment': user.displayAvatarURL.replace(/(size=([0-9]+))/, '')
      }]});
   };
};
