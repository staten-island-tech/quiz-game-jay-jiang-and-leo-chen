let score = 0;
const scoreboard = document.createElement("span");
document.body.prepend(scoreboard);
scoreboard.prepend(score);

document.querySelectorAll("input").forEach(function scoreCount(correctAnswer) {
  correctAnswer.addEventListener("change", function (e) {
    if (this.className === "correct") {
      score++;
      console.log(score);
      document.body.prepend(scoreboard);
      scoreboard.innerHTML = score;
    } else {
      score + 0;
    }
  });
});

//Scratched forever
/* console.log("connected");
const one = {
    question: "What is 1 + 1?",
    contentA: "2",
    contentB: "4",
    contentC: "All of above",
    contentD: "None of above",
};
const two = {
    question: "What is 2 + 2?",
    contentA: "4", 
    contentB: "8",
    contentC: "All of above",
    contentD: "None of above",
};
const three = {
    question: "What is 4 + 4?",
    contentA: "8",
    contentB: "16",
    contentC: "All of above",
    contentD: "None of above",
};
const four = {
    question: "What is 8 + 8?",
    contentA: "16",
    contentB: "32",
    contentC: "All of above",
    contentD: "None of above",
}; 
const five = {
    question: "What is 16 + 16?",
    contentA: "32",
    contentB: "64",
    contentC: "All of above",
    contentD: "None of above",
};
const six ={
    question: "What is 32 + 32?",
    contentA: "64",
    contentB: "128",
    contentC: "All of above",
    contentD: "None of above",
};
const seven = {
    question: "What is 64 + 64?",
    contentA: "128",
    contentB: "256",
    contentC: "All of above",
    contentD: "None of above",
};



function questionize(number) {
    const question = document.createElement('span');
    document.body.append(question);
    question.append(number);
}
questionize(one.question);
questionize(two.question);
questionize(three.question);
questionize(four.question);
questionize(five.question);
questionize(six.question);
questionize(seven.question);

function answerize(number, a, b, c ,d) {
    const answer = document.createElement('button');
    document.querySelector('span').append(answer);
    answer.append(a);
    answer.append(b);
    answer.append(c);
    answer.append(d);
}
answerize(one.question, one.contentA, one.contentB, one.contentC, one.contentD);

/* document.body.append(one.question, one.contentA, one.contentB, one.contentC, one.contentD);
document.body.append(one.question);
document.body.append(one.question);
document.body.append(one.question);
document.body.append(one.question);
document.body.append(one.question); */
