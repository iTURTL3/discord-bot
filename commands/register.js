module.exports = function(bot, config, data, utilities, callbacks) {
   var files = [
      'avatar',
      'say',
      'cage',
      'invite',
      'ping',
      'uptime',
      'servers',
      'version',
      'help'
   ];
   for ( var i = 0, length = files.length; i < length; i++ ) {
      require('./' + files[i] + '.js')(bot, config, data, utilities, callbacks);
   }
};
