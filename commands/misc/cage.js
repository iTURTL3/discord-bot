module.exports = function(bot, config, data, utilities, dependencies) {
   data.commands.push({
      'pattern':     new RegExp('^' + config.prefix + 'cage$', 'i'),
      'example':     config.prefix + 'cage',
      'name':        'cage',
      'description': 'make me post a random nicolas cage image',
      'callback':    'nicolasCage',
      'category':    'misc',
      'cooldown':    0,
      'disabled':    false,
      'private':     false,
      'nsfw':        false
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
   data.callbacks.nicolasCage = function(message) {
      message.channel.send({'files': [{
         'name':       config.name + '.jpg',
         'attachment': 'https://i.imgur.com/' + utilities.randomArrayValue(data.nicolasCageImageIds) + '.jpg'
      }]});
   };
};
