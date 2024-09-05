let homeScore = document.getElementById("home-score")
let countHome = 0

function addHome1() {
  countHome += 1
  homeScore.textContent = countHome
}

function addHome2() {
  countHome += 2;
  homeScore.textContent = countHome;
}

function addHome3() {
  countHome += 3;
  homeScore.textContent = countHome;
}

let guestScore = document.getElementById("guest-score");
let countGuest = 0;

function addGuest1() {
  countGuest += 1
  guestScore.textContent = countGuest
}

function addGuest2() {
  countGuest += 2;
  guestScore.textContent = countGuest;
}

function addGuest3() {
  countGuest += 3;
  guestScore.textContent = countGuest;
}

// ——————————————————— dark mode ——————————————————— 


function dark() {
  document.body.style.backgroundColor = '#eee';
  document.getElementById("tablo").style.backgroundColor = "#e5e5e5";
  document.getElementById("home").style.color = "#1b244a";
  document.getElementById("guest").style.color = "#1b244a";
}

