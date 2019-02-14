module.exports = function() {
   var self      = this;
   self.token    = 'discord bot token';
   self.commands = [
      {
         'pattern':  /^b\!hello$/i,
         'callback': 'helloWorld',
         'disabled': false
      },
      {
         'pattern':  /^b\!avatar\s*\<\@([0-9]{1,50})\>|b\!avatar$/i,
         'callback': 'avatar',
         'disabled': false
      },
      {
         'pattern':  /^b\!say\s*(.+)$/i,
         'callback': 'say',
         'disabled': false
      }
   ];
};
