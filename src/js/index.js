let score = 0;
const scoreboard = document.createElement("span");
document.body.prepend(scoreboard);
scoreboard.prepend(score);
scoreboard.innerHTML = "Score : " + score;
scoreboard.hidden = true;

console.log("connected");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function (e) {
  alert("You received a " + scoreboard.innerHTML + "/7.");
});

const quizContent = [
  {number: 1,
    question: "What is 1 + 1?",
    answersArray: [
          {position: "A", content: "2", correct: true},
          {position: "B", content: "4", correct: false},
          {position: "C", content: "All of above", correct: false},
          {position: "D", content: "None of above", correct: false},
      ]
  },{
      number: 2,
      question: "What is 2 + 2?",
      answersArray: [
          {position: "A", content: "4", correct: true},
          {position: "B", content: "8", correct: false},
          {position: "C", content: "All of above", correct: false},
          {position: "D", content: "None of above", correct: false},
      ]
  },{
      number: 3,
      question: "What is 4 + 4?",
      answersArray: [
          {position: "A", content: "8", correct: true},
          {position: "B", content: "16", correct: false},
          {position: "C", content: "All of above", correct: false},
          {position: "D", content: "None of above", correct: false},
      ]
  },{
      number: 4,
      question: "What is 8 + 8?",
      answersArray: [
          {position: "A", content: "16", correct: true},
          {position: "B", content: "32", correct: false},
          {position: "C", content: "All of above", correct: false},
          {position: "D", content: "None of above", correct: false},
      ]
  },{
      number: 5,
      question: "What is 16 + 16?",
      answersArray: [
          {position: "A", content: "32", correct: true},
          {position: "B", content: "64", correct: false},
          {position: "C", content: "All of above", correct: false},
          {position: "D", content: "None of above", correct: false},
      ]
  },{
      number: 6,
      question: "What is 32 + 32?",
      answersArray: [
          {position: "A", content: "64", correct: true},
          {position: "B", content: "128", correct: false},
          {position: "C", content: "All of above", correct: false},
          {position: "D", content: "None of above", correct: false},
      ]
  },{
      number: 7,
      question: "What is 64 + 64?",
      answersArray: [
          {position: "A", content: "128", correct: true},
          {position: "B", content: "256", correct: false},
          {position: "C", content: "All of above", correct: false},
          {position: "D", content: "None of above", correct: false},
      ]
  },
];

console.log(quizContent[0].answersArray);

quizContent.forEach(function(a) {
  const question = document.createElement("span");
  document.body.append(question);
  question.innerHTML = a["question"];
  const answers = a.answersArray;
  const answerChoice = document.createElement("input");
  answerChoice.type = "radio";
  const questions = document.querySelectorAll("span")
  questions.forEach(function(b) {
    const answerChoice = document.createElement("input");
    answerChoice.type = "radio";
    answerChoice.innerHTML = "test";
    b.append(answerChoice);}

  //const answers = quizContent[a].answersArray;
  //console.log(answers);
)});
/* const questions = document.querySelectorAll("span");
  questions.forEach(function(b) {
    for (i = 0; i <= 3; i++) { 
    const answerChoice = document.createElement("input");
    answerChoice.type = "radio";
    answerChoice.innerHTML = "test";
    b.append(answerChoice);
    if (i == 0) {
      answerChoice.
    }
  } */
/*     const answerChoice = document.createElement("input");
    answerChoice.type = "radio";
    answerChoice.innerHTML = "test";
    b.append(answerChoice);
    b.append(answerChoice);
    b.append(answerChoice);
    b.append(answerChoice); 
  });*/
 




  /* const questions = document.querySelectorAll("span");
questions.forEach(function(a) {
  const answer = document.createElement("input");
  answer.type = "radio";
  a.append(answer);
  answer.innerHTML = "test";
});
 */


























































/* const one = {
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
const six = {
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

const question = document.createElement("span");

function questionize(number) {
  const question = document.createElement("span");
  question.id = number;
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

function answerize(number, a) {
  const bubble = document.createElement("input");
  const answer = document.createElement("span");
  bubble.type = "radio";
  bubble.name = number;
  bubble.id = "answer";
  bubble.className = "correct";
  answer.innerHTML = a;
  const e = document.getElementById(number);
  e.append(bubble);
  e.append(answer);
}
function incorrectize(number, a) {
  const bubble = document.createElement("input");
  const answer = document.createElement("span");
  bubble.type = "radio";
  bubble.name = number;
  bubble.id = "answer";
  answer.innerHTML = a;
  const e = document.getElementById(number);
  e.append(bubble);
  e.append(answer);
}
answerize(one.question, one.contentA);
answerize(two.question, two.contentA);
answerize(three.question, three.contentA);
answerize(four.question, four.contentA);
answerize(five.question, five.contentA);
answerize(six.question, six.contentA);
answerize(seven.question, seven.contentA);
incorrectize(one.question, one.contentB);
incorrectize(two.question, two.contentB);
incorrectize(three.question, three.contentB);
incorrectize(four.question, four.contentB);
incorrectize(five.question, five.contentB);
incorrectize(six.question, six.contentB);
incorrectize(seven.question, seven.contentB);
incorrectize(one.question, one.contentC);
incorrectize(two.question, two.contentC);
incorrectize(three.question, three.contentC);
incorrectize(four.question, four.contentC);
incorrectize(five.question, five.contentC);
incorrectize(six.question, six.contentC);
incorrectize(seven.question, seven.contentC);
incorrectize(one.question, one.contentD);
incorrectize(two.question, two.contentD);
incorrectize(three.question, three.contentD);
incorrectize(four.question, four.contentD);
incorrectize(five.question, five.contentD);
incorrectize(six.question, six.contentD);
incorrectize(seven.question, seven.contentD);

document.querySelectorAll("input").forEach(function scoreCount(correctAnswer) {
  correctAnswer.addEventListener("change", function (e) {
    if (this.className === "correct") {
      score++;
      console.log(score);
      document.body.prepend(scoreboard);
      scoreboard.innerHTML = "Score : " + score;
    } else {
      score + 0;
    }
  });
}); */


