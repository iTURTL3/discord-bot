module.exports = function(bot, config, data, utilities, callbacks) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'banuser\\s*(\\<\\@\\!?[0-9]+\\>)$', 'i'),
      'description': 'ban a user from the server',
      'example':     config.prefix + 'banuser <mention>',
      'callback':    'banUser',
      'category':    'moderation',
      'cooldown':    2000,
      'disabled':    false,
      'private':     false
   });
   callbacks.banUser = function(message) {
      var member = message.mentions.members.first();
      if ( !message.member.hasPermission('BAN_MEMBERS') ) {
         message.channel.send('you do not have permission to ban users in this server!');
      }
      else if ( !message.guild.me.hasPermission('BAN_MEMBERS') ) {
         message.channel.send('i do not have permission to ban users in this server!');
      }
      else if ( !member ) {
         message.channel.send('you need to mention somebody in this server to ban!');
      }
      else {
         member.ban(member.user.username + ' (' + member.id + ') was banned by ' + message.author.username + ' (' + message.author.id + ')').then(function() {
            message.channel.send(member.user.username + ' has been banned from this server!');
         }).catch(function() {
            message.channel.send('i was unable to ban ' + member.user.username + ' from this server!');
         });
      }
   };
};
