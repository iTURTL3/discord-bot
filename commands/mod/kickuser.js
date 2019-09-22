module.exports = function(bot, config, data, utilities, dependencies) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'kickuser\\s*(\\<\\@\\!?[0-9]+\\>)$', 'i'),
      'example':     config.prefix + 'kickuser <mention>',
      'name':        'kickuser',
      'description': 'kick a user from the server',
      'callback':    'kickUser',
      'category':    'mod',
      'cooldown':    0,
      'disabled':    false,
      'private':     false,
      'nsfw':        false
   });
   data.callbacks.kickUser = function(message) {
      var member = message.mentions.members.first();
      if ( !message.member.hasPermission('KICK_MEMBERS') ) {
         message.channel.send('you do not have permission to kick users in this server!');
      }
      else if ( !message.guild.me.hasPermission('KICK_MEMBERS') ) {
         message.channel.send('i do not have permission to kick users in this server!');
      }
      else if ( !member ) {
         message.channel.send('you need to mention somebody in this server to kick!');
      }
      else {
         member.kick(member.user.username + ' (' + member.id + ') was kicked by ' + message.author.username + ' (' + message.author.id + ')').then(function() {
            message.channel.send(member.user.username + ' has been kicked from this server!');
         }).catch(function() {
            message.channel.send('i was unable to kick ' + member.user.username + ' from this server!');
         });
      }
   };
};
