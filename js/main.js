function updateTime() {
  var now = new Date();
  var date = now.toDateString();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var ampm = hours >= 12 ? 'PM' : 'AM';

  Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  } // add 2 digit

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var time = hours.pad(2) + ':' + minutes.pad(2) + ':' + seconds.pad(2) + ' ' + ampm;
  document.getElementById('date').textContent = date;
  document.getElementById('time').textContent = time;
}

setInterval(updateTime, 1000);