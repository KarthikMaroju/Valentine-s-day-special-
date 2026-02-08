<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Valentine Surprise ❤️</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="hearts"></div>

<!-- SCREEN 0 -->
<div id="screen0" class="screen active">
  <h1 class="typing">Hey You 💌</h1>
  <button onclick="goNext(0,1)">Start ❤️</button>
</div>

<!-- SCREEN 1 : HER NAME -->
<div id="screen1" class="screen">
  <h2>Enter Her Name 💖</h2>
  <input id="herName" placeholder="Her name">
  <button onclick="checkHer()">Next</button>
</div>

<!-- SCREEN 2 : HIS NAME -->
<div id="screen2" class="screen">
  <h2>Enter Your Name 👀</h2>
  <input id="hisName" placeholder="Your name">
  <button onclick="checkHis()">Continue</button>
  <p id="error"></p>
</div>

<!-- SCREEN 3 : YES / NO -->
<div id="screen3" class="screen">
  <h1>Will you be my Valentine? 💘</h1>
  <button onclick="yesClick()">YES 💖</button>
  <button id="noBtn">NO 😏</button>
</div>

<!-- SCREEN 4 : GIFT -->
<div id="screen4" class="screen">
  <h1>🎁 Open Your Gift 🎁</h1>
  <div class="gift" onclick="openGift()">🎁</div>
</div>

<!-- SCREEN 5 : FINAL -->
<div id="screen5" class="screen">
  <h1>💖 Happy Valentine’s Day 💖</h1>
  <h2 id="finalText"></h2>
</div>

<footer>@karthik created ❤️</footer>

<script src="script.js"></script>
</body>
</html>
