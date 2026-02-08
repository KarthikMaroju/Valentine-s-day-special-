let her = "";

function goNext(a,b){
  document.getElementById("screen"+a).classList.remove("active");
  document.getElementById("screen"+b).classList.add("active");
}

function checkHer(){
  her = document.getElementById("herName").value;
  if(her === ""){
    alert("Enter her name 💖");
    return;
  }
  goNext(1,2);
}

function checkHis(){
  let his = document.getElementById("hisName").value.toLowerCase();
  if(his !== "karthik"){
    document.getElementById("error").innerText =
      "❌ Only KARTHIK is allowed";
    return;
  }
  goNext(2,3);
}

/* Fake NO Button */
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", ()=>{
  noBtn.style.left = Math.random()*80 + "%";
  noBtn.style.top = Math.random()*80 + "%";
});

function yesClick(){
  goNext(3,4);
}

function openGift(){
  goNext(4,5);
  document.getElementById("finalText").innerText =
    `My dear ${her}, Happy Valentine’s Day 💗\n— Karthik ❤️`;
}
