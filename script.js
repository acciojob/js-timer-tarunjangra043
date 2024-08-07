function updateTimer() {
  var now = new Date();

  var day = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  var timerString = day + '/' + month + '/' + year + ', ' + hours + ':' + minutes + ':' + seconds;

  document.getElementById('timer').textContent = timerString;
}

updateTimer();

setInterval(updateTimer, 1000);
