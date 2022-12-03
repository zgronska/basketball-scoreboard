let homeScore = 0;
let guestScore = 0;

let homeResult = document.getElementById("home-result");
let guestResult = document.getElementById("guest-result");

let homeOneBtn = document.getElementById("home-one");
let homeTwoBtn = document.getElementById("home-two");
let homeThreeBtn = document.getElementById("home-three");

let guestOneBtn = document.getElementById("guest-one");
let guestTwoBtn = document.getElementById("guest-two");
let guestThreeBtn = document.getElementById("guest-three");

let resetBtn = document.getElementById("reset-btn");

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

function resetGame() {
  homeScore = 0;
  guestScore = 0;
  homeResult.innerText = homeScore;
  guestResult.innerText = guestScore;
  minutes.innerHTML = 40;
  seconds.innerHTML = 00;
  countdown;
}

resetBtn.addEventListener("click", resetGame);

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

let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let timer = document.getElementById("time");

let startingMinutes = 40;
let totalTime = startingMinutes * 60;

setInterval(countdown, 1000);

function countdown() {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  totalTime--;
}
