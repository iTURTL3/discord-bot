module.exports = function() {
   var self      = this;
   self.token    = 'NVQ0MjH0MsEyODg1MzO5OTIq.D5HtsA.Aj2G5XOch3EgkCb6pvNLcrdyKwY';
   self.prefix   = 'b!';
   self.commands = [
      {
         'pattern':  new RegExp('^' + self.prefix + 'hello$', 'i'),
         'callback': 'helloWorld',
         'disabled': false
      },
      {
         'pattern':  new RegExp('^' + self.prefix + 'say\\s*(.+)$', 'i'),
         'callback': 'say',
         'disabled': false
      },
      {
         'pattern':  new RegExp('^' + self.prefix + 'avatar$', 'i'),
         'callback': 'avatar',
         'disabled': false
      }
   ];
};
