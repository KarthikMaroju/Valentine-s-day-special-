let herName = "";
let hisName = "";

function sayYes() {
  herName = prompt("Enter her name 💖");
  hisName = prompt("Enter your name 😊");

  if (!herName || !hisName) {
    alert("Please enter both names ❤️");
    return;
  }

  document.getElementById("screen1").classList.remove("active");
  document.getElementById("screen2").classList.add("active");

  document.getElementById("valentineMsg").innerText =
    `Happy Valentine’s Day 💕`;

  document.getElementById("names").innerText =
    `${hisName} ❤️ ${herName}`;
}

function sayNo() {
  alert("Oh no 😢 Try again, love always wins ❤️");
}

function openGift() {
  document.getElementById("screen2").classList.remove("active");
  document.getElementById("screen3").classList.add("active");

  document.getElementById("finalMsg").innerText =
    `Happy Valentine’s Day my dear ${herName} 💖
    \nLove from ${hisName} ❤️`;
}
