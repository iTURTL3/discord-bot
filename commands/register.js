module.exports = function(bot, config, data, utilities, dependencies) {
   var files = [
      'misc/avatar',
      'misc/cage',
      'misc/say',
      'bot/about',
      'bot/info',
      'bot/invite',
      'bot/ping',
      'bot/uptime',
      'help/bot',
      'help/help',
      'help/misc',
      'help/mod',
      'mod/kickuser',
      'mod/banuser'
   ];
   for ( var i = 0, length = files.length; i < length; i++ ) {
      require('./' + files[i] + '.js')(bot, config, data, utilities, dependencies);
   }
};
