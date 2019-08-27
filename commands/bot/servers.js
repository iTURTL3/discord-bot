module.exports = function(bot, config, data, utilities, callbacks) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'servers$', 'i'),
      'description': 'check how many servers i am in',
      'example':     config.prefix + 'servers',
      'callback':    'serverCount',
      'category':    'bot',
      'cooldown':    2000,
      'disabled':    false,
      'private':     false,
      'nsfw':        false
   });
   callbacks.serverCount = function(message) {
      message.channel.send({'embed': {
         'color':       config.embedColor,
         'title':       config.name + ' - Server Count',
         'description': 'i am in ' + bot.guilds.size + ' servers!'
      }});
   };
};
