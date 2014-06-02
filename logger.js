function log(breadCrumb, msg) {
  console.log("\n" + breadCrumb + " - - ["+timeStamp()+"] " + msg);
}

function dir(breadCrumb, obj) {
  log(breadCrumb, "");
  console.dir(obj);
}

function timeStamp() {
  var now = new Date();

  var day = now.getDay();
  switch (day) {
    case 0:
      day = "Sun";
      break;
    case 1:
      day = "Mon";
      break;
    case 2:
      day = "Tue";
      break;
    case 3:
      day = "Wed";
      break;
    case 4:
      day = "Thu";
      break;
    case 5:
      day = "Fri";
      break;
    case 6:
      day = "Sat";
      break;
  }

  var month = now.getMonth();
  switch (month) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sep";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;
  }

  var date = now.getDate();
  date = (date < 10) ? "0"+date : date;
  var hours = now.getHours();
  hours = (hours < 10) ? "0"+hours : hours;
  var minutes = now.getMinutes();
  minutes = (minutes < 10) ? "0"+minutes : minutes;
  var seconds = now.getSeconds();
  seconds = (seconds < 10) ? "0"+seconds : seconds;

  var ts = 
    day + ", " +
    date + " " + 
    month + " " +
    now.getFullYear() + " " + 
    hours + ":" + minutes + ":" + seconds + " " +
    "UTC " + String(now.getTimezoneOffset() / -60);

  return ts;    
}

module.exports.log = log;
module.exports.dir = dir;
