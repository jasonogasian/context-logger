/**
 * Module pretty-logs
 *
 * Creates nicely formatted console logs with a context (breadCrumb) and message
 * Created By: Jason Ogasian
 * Created On: 5-26-2014
 */

function Logger(){
  this.color   = true;
  this.newline = true;

  this.log = function(breadCrumb, msg) {
    ts = '['+timeStamp()+']';

    if (this.color) {
      ts = ts.grey();
      breadCrumb = breadCrumb.cyan();
    }

    if (this.newline) {
      breadCrumb = '\n' + breadCrumb;
    }

    console.log(breadCrumb + ' - - '+ ts + ' ' + msg);
  }

  this.error = function(breadCrumb, msg) {
    var err = 'ERROR: ';

    if (this.color) {
      err = err.red();
    }


    this.log(breadCrumb, err+msg);
  }

  this.dir = function(breadCrumb, obj) {
    this.log(breadCrumb, '');
    console.dir(obj);
  }
}

function timeStamp() {
    var now = new Date();

    var day = now.getDay();
    switch (day) {
      case 0:
        day = 'Sun';
        break;
      case 1:
        day = 'Mon';
        break;
      case 2:
        day = 'Tue';
        break;
      case 3:
        day = 'Wed';
        break;
      case 4:
        day = 'Thu';
        break;
      case 5:
        day = 'Fri';
        break;
      case 6:
        day = 'Sat';
        break;
    }

    var month = now.getMonth();
    switch (month) {
      case 0:
        month = 'Jan';
        break;
      case 1:
        month = 'Feb';
        break;
      case 2:
        month = 'Mar';
        break;
      case 3:
        month = 'Apr';
        break;
      case 4:
        month = 'May';
        break;
      case 5:
        month = 'Jun';
        break;
      case 6:
        month = 'Jul';
        break;
      case 7:
        month = 'Aug';
        break;
      case 8:
        month = 'Sep';
        break;
      case 9:
        month = 'Oct';
        break;
      case 10:
        month = 'Nov';
        break;
      case 11:
        month = 'Dec';
        break;
    }

    var date = now.getDate();
    date = (date < 10) ? '0'+date : date;
    var hours = now.getHours();
    hours = (hours < 10) ? '0'+hours : hours;
    var minutes = now.getMinutes();
    minutes = (minutes < 10) ? '0'+minutes : minutes;
    var seconds = now.getSeconds();
    seconds = (seconds < 10) ? '0'+seconds : seconds;

    var ts = 
      day + ', ' +
      date + ' ' + 
      month + ' ' +
      now.getFullYear() + ' ' + 
      hours + ':' + minutes + ':' + seconds + ' ' +
      'UTC ' + String(now.getTimezoneOffset() / -60);

    return ts;    
  }


var end = '\x1B[39;0m';
String.prototype.cyan = function() {
  return '\x1B[36;1m' + this + end;
}

String.prototype.green = function() {
  return '\x1B[32;1m' + this + end;
}

String.prototype.grey = function() {
  return '\x1B[90;1m' + this + end;
}

String.prototype.red = function() {
  return '\x1B[31;1m' + this + end;
}

String.prototype.yellow = function() {
  return '\x1B[33;1m' + this + end;
}

String.prototype.bold = function() {
  return '\x1B[39;1m' + this + end;
}

module.exports = new Logger();
