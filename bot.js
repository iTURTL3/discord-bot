var config    = new (require('./includes/config.js'))();
var mechanics = new (require('./includes/mechanics.js'))(config);
var bot       = new (require('discord.js')).Client();
bot.on('message', mechanics.parse);
bot.on('error',   console.log);
bot.login(config.token);
