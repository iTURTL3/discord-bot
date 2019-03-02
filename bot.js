var bot       = new (require('discord.js')).Client();
var config    = new (require('./includes/config.js'))();
var callbacks = new (require('./includes/callbacks.js'))(bot, config);
var events    = new (require('./includes/events.js'))(bot, config, callbacks);
bot.on('error',   events.error);
bot.on('message', events.message);
bot.login(config.token);
