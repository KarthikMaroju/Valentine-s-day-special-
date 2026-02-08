const params = new URLSearchParams(window.location.search);

const from = params.get("from") || "Someone special";
const to = params.get("to") || "You";

document.getElementById("msg").innerHTML =
  `Dear <b>${to}</b>,<br><br>
   Wishing you a beautiful Valentine’s Day 💕<br><br>
   — ${from}`;
