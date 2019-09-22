// modules.
var config       = new (require('./includes/config.js'))();
var data         = new (require('./includes/data.js'))();
var utilities    = new (require('./includes/utilities.js'))();
var dependencies = new (require('./includes/dependencies.js'))();
var events       = new (require('./includes/events.js'))(config, data, utilities);
var bot          = new dependencies.discordjs.Client();
// register commands.
require('./commands/register.js')(bot, config, data, utilities, dependencies);
// set events.
bot.on('error',   events.error);
bot.on('ready',   events.ready);
bot.on('message', events.message);
bot.login(config.token);
