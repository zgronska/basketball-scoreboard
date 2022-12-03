let homeScore = 0;
let guestScore = 0;
let homeResult = document.getElementById("home-result");
let guestResult = document.getElementById("guest-result");

function homeOnePoint() {
  homeScore += 1;
  homeResult.textContent = homeScore;
  console.log(homeScore);
}

function homeTwoPoints() {
  homeScore += 2;
  homeResult.textContent = homeScore;
}

function homeThreePoints() {
  homeScore += 3;
  homeResult.textContent = homeScore;
}
