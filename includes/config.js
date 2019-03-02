module.exports = function() {
   var self          = this;
   self.token        = '';
   self.name         = 'Example Bot';
   self.abbreviation = 'eb';
   self.prefix       = self.abbreviation + '!';
   self.inviteUrl    = 'https://discordapp.com/oauth2/authorize?client_id=&scope=bot&permissions=';
   self.embedColor   = 0x00FF00;
   self.startTime    = Date.now();
   self.commands     = [
      {
         'pattern':     new RegExp('^' + self.prefix + 'say\\s*(.+)$', 'i'),
         'description': 'make me say something',
         'example':     self.prefix + 'say <message>',
         'callback':    'say',
         'disabled':    false
      },
      {
         'pattern':     new RegExp('^' + self.prefix + 'invite$', 'i'),
         'description': 'invite me to your server',
         'example':     self.prefix + 'invite',
         'callback':    'invite',
         'disabled':    false
      },
      {
         'pattern':     new RegExp('^' + self.prefix + 'ping$', 'i'),
         'description': 'check if i am alive',
         'example':     self.prefix + 'ping',
         'callback':    'pingPong',
         'disabled':    false
      },
      {
         'pattern':     new RegExp('^' + self.prefix + 'up\\s*time$', 'i'),
         'description': 'check how long i have been alive for',
         'example':     self.prefix + 'uptime',
         'callback':    'upTime',
         'disabled':    false
      },
      {
         'pattern':     new RegExp('^' + self.prefix + 'help$', 'i'),
         'description': 'display my commands',
         'example':     self.prefix + 'help',
         'callback':    'commandList',
         'disabled':    false
      }
   ];
};
