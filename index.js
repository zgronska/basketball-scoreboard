// HTML LINK

// scores

let homeScore = 0;
let guestScore = 0;

let homeResult = document.getElementById("home-result");
let guestResult = document.getElementById("guest-result");

// buttons

let homeOneBtn = document.getElementById("home-one");
let homeTwoBtn = document.getElementById("home-two");
let homeThreeBtn = document.getElementById("home-three");

let guestOneBtn = document.getElementById("guest-one");
let guestTwoBtn = document.getElementById("guest-two");
let guestThreeBtn = document.getElementById("guest-three");

let resetBtn = document.querySelector(".btn-reset");

// let resetBtn = document.getElementById("reset-btn");
// let controlBtn = document.getElementById("control-btn");

// SCORE FUNCTION

function addScore(points, team) {
  if (team === "home") {
    homeScore += points;
    homeResult.innerText = homeScore;
  } else if (team === "guest") {
    guestScore += points;
    guestResult.innerText = guestScore;
  } else {
    console.log("error");
  }
}

homeOneBtn.addEventListener("click", function () {
  addScore(1, "home");
});

homeTwoBtn.addEventListener("click", function () {
  addScore(2, "home");
});

homeThreeBtn.addEventListener("click", function () {
  addScore(3, "home");
});

guestOneBtn.addEventListener("click", function () {
  addScore(1, "guest");
});

guestTwoBtn.addEventListener("click", function () {
  addScore(2, "guest");
});

guestThreeBtn.addEventListener("click", function () {
  addScore(3, "guest");
});

// TIMER FUNCTION

let elMinutes = document.querySelector("#minutes");
let elSeconds = document.querySelector("#seconds");
let control = document.querySelector(".btn-control");

let interval;
let remainingSeconds = 2400;

control.addEventListener("click", () => {
  if (interval === null) {
    start();
  } else {
    stop();
  }
});

// control button

function updateInterfaceTime() {
  let minutes = Math.floor(remainingSeconds / 60);
  let seconds = remainingSeconds % 60;

  elMinutes.innerHTML = minutes.toString().padStart(2, "0");
  elSeconds.innerHTML = seconds.toString().padStart(2, "0");
}

function updateInterfaceControls() {
  if (interval === null) {
    control.innerHTML = `<span class="material-icons">
    play_arrow
    </span>Start game`;
    control.classList.add("btn-start");
    control.classList.remove("btn-stop");
  } else {
    control.innerHTML = `<span class="material-icons">
    pause
    </span>Pause game`;
    control.classList.add("btn-stop");
    control.classList.remove("btn-start");
  }
}

// start timer

function start() {
  if (remainingSeconds === 0) return;

  interval = setInterval(() => {
    remainingSeconds--;
    updateInterfaceTime();

    if (remainingSeconds === 0) {
      stop();
    }
  }, 1000);

  updateInterfaceControls();
}

// stop timer

function stop() {
  clearInterval(interval);

  interval = null;

  updateInterfaceControls();
}

// RESET FUNCTION

function resetGame() {
  homeScore = 0;
  guestScore = 0;
  homeResult.innerText = homeScore;
  guestResult.innerText = guestScore;
  stop();
  remainingSeconds = 2400;
  elMinutes.innerHTML = "40";
  elSeconds.innerHTML = "00";
}

resetBtn.addEventListener("click", resetGame);

// WINNER HIGHLIGHT

if (homeScore > guestScore) {
  document.querySelector("#home-result").style.backgroundColor = "red";
} else {
}
