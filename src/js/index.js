const startButton = document.getElementById("start");

const addName = document.forms["add-name"];
const value = addName.querySelector("input[type='text']").value;

startButton.addEventListener("click", function (e) {});

/* let score = 0;

document.querySelectorAll("input").forEach(function scoreCount(correctAnswer) {
  correctAnswer.addEventListener("change", function (e) {
    if (this.className === "correct") {
      score++;
      console.log(score);
    }
    console.log("Wow! You scored " + score);
  });
}); */

/* let score = 1;
const scoreboard = document.createElement("span");
document.body.prepend(scoreboard);
scoreboard.replaceWith(score);

document.querySelectorAll("input").forEach(function scoreCount(correctAnswer) {
  correctAnswer.addEventListener("change", function (e) {
    const scoreboard = document.createElement("span");
    document.body.prepend(scoreboard);
    scoreboard.replaceWith(score);
    if (this.className === "correct") {
      score++;
      e.parentElement.removeChild(e);
      console.log(score);
      a;
    } else {
      scoreboard.remove(score);
      score + 0;
    }
  });
}); */
