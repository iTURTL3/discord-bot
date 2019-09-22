module.exports = function(bot, config, data, utilities, dependencies) {
   var files = [
      'misc/avatar',
      'misc/say',
      'misc/cage',
      'bot/invite',
      'bot/ping',
      'bot/uptime',
      'bot/servers',
      'bot/version',
      'mod/kickuser',
      'mod/banuser',
      'help/help',
      'help/bot',
      'help/misc',
      'help/mod'
   ];
   for ( var i = 0, length = files.length; i < length; i++ ) {
      require('./' + files[i] + '.js')(bot, config, data, utilities, dependencies);
   }
};
