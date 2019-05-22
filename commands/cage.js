module.exports = function(bot, config, data, utilities, callbacks) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'cage$', 'i'),
      'description': 'make me post a random nicolas cage image',
      'example':     config.prefix + 'cage',
      'callback':    'nicolasCage',
      'cooldown':    2000,
      'disabled':    false,
      'private':     false
   });
   data.nicolasCageImageIds = [
      'zWuL7JS',
      'M75C4s9',
      'hGKti2R',
      'W3YaSyr',
      'marT0q3',
      'NsiWHlc',
      'XLkZvFG'
   ];
   callbacks.nicolasCage = function(message) {
      message.channel.send({'files': [{
         'name':       config.name + '.jpg',
         'attachment': 'https://i.imgur.com/' + utilities.randomArrayValue(data.nicolasCageImageIds) + '.jpg'
      }]});
   };
};
