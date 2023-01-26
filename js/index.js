let score = 0;
let target = document.getElementById("target");
let scoreNumber = document.getElementById("score-number");

target.addEventListener("click", function() {
  score++;
  scoreNumber.innerHTML = score;
  // randomly place the target
  target.style.left = Math.random() * 349 + "px";
  target.style.top = Math.random() * 349 + "px";
  target.style.right = Math.random() * 349 + "px";
  target.style.bottom = Math.random() * 349 + "px";
});

// Javascript
let resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", resetGame);

function resetGame() {
  score = 0;
  scoreNumber.innerHTML = score;
  target.style.left = 250 + "px";
  target.style.top = 250 + "px";
}
