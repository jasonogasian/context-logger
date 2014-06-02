context-logger
==============

This project is a simple NodeJS logger for adding timestamps and context to 
console output.

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
  logger.log(context, 'This is a console message without color (boring)');


  // Error messages
  logger.color = true;
  logger.error(context, 'This is an error message with color');

  logger.color = false;
  logger.newline = false;
  logger.error(context, 'This is an error message without color (also boring)');


  // Object inspection (shows the context first, then the object)
  var obj = {"cat":"meow", "dog":"woof"};
  logger.dir(context, obj);
```

This will print (colors omitted):
    
  User0 - - [Mon, 02 Jun 2014 13:45:23 UTC -7] This is a console message with color  

  User0 - - [Mon, 02 Jun 2014 13:45:23 UTC -7] This is a console message without color (boring)  

  User0 - - [Mon, 02 Jun 2014 13:45:23 UTC -7] ERROR: This is an error message with color  
  User0 - - [Mon, 02 Jun 2014 13:45:23 UTC -7] ERROR: This is an error message without color (also boring)  
  User0 - - [Mon, 02 Jun 2014 13:45:23 UTC -7]  
  { cat: 'meow', dog: 'woof' }