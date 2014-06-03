var logger = require('./logger.js');

// All of your messages will have a context associated with them to help
// track events through your logs.
var context = 'User0';


// Console messages
logger.log(context, 'This is a console message with color');

logger.color = false;
logger.log(context, 'Future messages will not have color (boring)');

logger.shortTimestamp = true;
logger.log(context, 'Future messages will have a short format timestamp');


// Error messages
logger.color = true;
logger.error(context, 'This is an error message with color');

logger.color = false;
logger.newline = false;
logger.error(context, 'This is an error message without color (also boring)');


// Object inspection (shows the context first, then the object)
var obj = {"cat":"meow", "dog":"woof"};
logger.dir(context, obj);