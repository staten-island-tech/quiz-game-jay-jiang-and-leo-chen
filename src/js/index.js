console.log("connected");

const startButton = document.getElementById("start");

const addName = document.forms["add-name"];
const value = addName.querySelector("input[type='text']").value;

startButton.addEventListener("click", function (e) {
  const name = document.createElement("li");
  name.textContent = value;
  li.appendChild(name);
});
