function checkName() {
  const nameInput = document.getElementById("nameInput").value.trim().toLowerCase();
  const error = document.getElementById("error");

  if (nameInput === "karthik") {
    document.getElementById("login").style.display = "none";
    document.getElementById("surprise").style.display = "block";
  } else if (nameInput === "") {
    error.innerText = "⚠️ Please type a name";
  } else {
    error.innerText = "❌ Wrong name! Only Karthik allowed";
  }
}
