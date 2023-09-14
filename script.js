//access to elements
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let hour = 00;
let min = 00;
let sec = 00;
let milSec = 00;

startButton.addEventListener("click", function () {
  //when user clicks on start button timer gets started so timer flag is set to true
  timer = true;
  watch();
});

stopButton.addEventListener("click", function () {
  //when user clicks on stop button timer gets stopped so timer flag is set to false
  timer = false;
});

resetButton.addEventListener("click", function () {
  //when user clicks on reset button timer needs to restart so timer flag and other variables
  //are set to false and 0 respectively
  timer = false;
  hour = 0;
  min = 0;
  sec = 0;
  milSec = 0;

  document.getElementById("hour").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("milSec").innerHTML = "00";
});

function watch() {
  if (timer) {
    console.log(timer);
    milSec++;

    if (milSec == 100) {
      sec++;
      milSec = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hour++;
      min = 0;
      sec = 0;
    }

    let hrString = hour;
    let minString = min;
    let secString = sec;
    let countString = milSec;

    //to add 0 before two digit value starts
    if (hour < 10) {
      hrString = "0" + hrString;
    }

    if (min < 10) {
      minString = "0" + minString;
    }

    if (sec < 10) {
      secString = "0" + secString;
    }

    if (milSec < 10) {
      countString = "0" + countString;
    }

    document.getElementById("hour").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("milSec").innerHTML = countString;

    //calls same function after 10 milsecs until someone stops or restarts
    setTimeout(watch, 10);
  }
}
