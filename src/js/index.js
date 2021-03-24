console.log("connected");

//event listener for click on button
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function (e) {
    const hide = document.querySelectorAll('span');
    hide.hidden = true;
    alert("You received a " + scoreboard.innerHTML + "/7.");
});
