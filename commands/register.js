module.exports = function(bot, config, data, utilities, callbacks) {
   var files = [
      'misc/avatar',
      'misc/say',
      'misc/cage',
      'bot/invite',
      'bot/ping',
      'bot/uptime',
      'bot/servers',
      'bot/version',
      'moderation/kickuser',
      'moderation/banuser',
      'help/help'
   ];
   for ( var i = 0, length = files.length; i < length; i++ ) {
      require('./' + files[i] + '.js')(bot, config, data, utilities, callbacks);
   }
};
