context-logger
==============

This project is a simple NodeJS logger for adding timestamps and context to 
console output. The context can allow you to do such things as track a actions 
of a visitor to your application trhough your logs.

Installation:
  npm install context-logger


Usage
-----

A simple example:

```js
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


  // Warning message
  logger.color = true;
  logger.warn(context, 'This is a warning message with color');

  // Error messages
  logger.error(context, 'This is an error message with color');

  logger.color = false;
  logger.newline = false;
  logger.error(context, 'This is an error message without color (also boring)');


  // Object inspection (shows the context first, then the object)
  var obj = {"cat":"meow", "dog":"woof"};
  logger.dir(context, obj);
```

This will print (colors omitted):


  User0 - - [Mon, 02 Jun 2014 14:38:07 UTC -7] This is a console message with color

  User0 - - [Mon, 02 Jun 2014 14:38:07 UTC -7] Future messages will not have color (boring)

  User0 - - [06-02-2014 14:38:07] Future messages will have a short format timestamp

  User0 - - [06-02-2014 14:38:07] ERROR: This is an error message with color  
  User0 - - [06-02-2014 14:38:07] ERROR: This is an error message without color (also boring)  
  User0 - - [06-02-2014 14:38:07]  
  { cat: 'meow', dog: 'woof' }