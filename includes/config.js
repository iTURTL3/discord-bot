module.exports = function() {
   var self      = this;
   self.token    = 'discord token';
   self.commands = [
      {
         'pattern':  /^b!hello$/i,
         'callback': 'helloWorld',
         'disabled': false
      },
      {
         'pattern':  /^b!say\s*(.+)$/i,
         'callback': 'say',
         'disabled': false
      },
      {
         'pattern':  /^b!avatar$/i,
         'callback': 'avatar',
         'disabled': false
      }
   ];
};
