let his = "";
let her = "";

const music = document.getElementById("bgMusic");

// Auto open first screen
setTimeout(() => {
  document.getElementById("screen0").addEventListener("click", () => {
    document.getElementById("screen0").classList.remove("active");
    document.getElementById("screen1").classList.add("active");
    music.play().catch(()=>{});
  });
}, 500);

function startSurprise() {
  his = document.getElementById("hisName").value;
  her = document.getElementById("herName").value;

  if (his === "" || her === "") {
    alert("Please enter both names ❤️");
    return;
  }

  document.getElementById("screen1").classList.remove("active");
  document.getElementById("screen2").classList.add("active");
}

function openGift() {
  document.getElementById("screen2").classList.remove("active");
  document.getElementById("screen3").classList.add("active");

  document.getElementById("finalText").innerText =
    `My dear ${her},\nHappy Valentine’s Day 💖\nLove from ${his} ❤️`;
}

