// HTML LINK

// scores

let homeScore = 0;
let guestScore = 0;

let homeResult = document.getElementById("home-result");
let guestResult = document.getElementById("guest-result");

// timer

let elMinutes = document.querySelector("#minutes");
let elSeconds = document.querySelector("#seconds");

// buttons

let homeOneBtn = document.getElementById("home-one");
let homeTwoBtn = document.getElementById("home-two");
let homeThreeBtn = document.getElementById("home-three");

let guestOneBtn = document.getElementById("guest-one");
let guestTwoBtn = document.getElementById("guest-two");
let guestThreeBtn = document.getElementById("guest-three");

let resetBtn = document.querySelector(".btn-reset");
let control = document.querySelector(".btn-control");

// WINNER HIGHLIGHT

function winnerColour() {
  if (homeScore === guestScore) {
    homeResult.style.backgroundColor = "var(--black)";
    guestResult.style.backgroundColor = "var(--black)";
  } else if (homeScore > guestScore) {
    homeResult.style.backgroundColor = "var(--green)";
    guestResult.style.backgroundColor = "var(--black)";
  } else {
    homeResult.style.backgroundColor = "var(--black)";
    guestResult.style.backgroundColor = "var(--green)";
  }
}

// SCORE FUNCTION

function addScore(points, team) {
  if (team === "home") {
    homeScore += points;
    homeResult.innerText = homeScore;
    winnerColour();
  } else if (team === "guest") {
    guestScore += points;
    guestResult.innerText = guestScore;
    winnerColour();
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

let interval = null;
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
      winner();
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

// DECLARE WINNER FUNCTION

function winner() {
  if (homeScore > guestScore) {
    alert("Home team wins!");
  } else if (guestScore > homeScore) {
    alert("Guest team wins!");
  } else if (guestScore === homeScore) {
    alert("It's a tie!");
  }
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
  homeResult.style.backgroundColor = "var(--black)";
  guestResult.style.backgroundColor = "var(--black)";
}

resetBtn.addEventListener("click", resetGame);
