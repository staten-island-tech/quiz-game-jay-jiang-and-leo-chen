import {quizContent} from './questions.js';

let questionCounter = 1;



let score = 0;



console.log(quizContent[6].correct);

quizContent.forEach(function(a) {
  const question = document.createElement("span");
  document.body.append(question);
  question.innerHTML = a["question"];
  question.id = "question " + questionCounter;
  const answers = a.answersArray;
  const questions = document.getElementById("question " + questionCounter);
  answers.forEach(function(b) {
    const answerChoice = document.createElement("input");
    answerChoice.type = "radio";
    questions.append(answerChoice);
    answerChoice.value = b.content;
    const answerChoiceContent = document.createElement("label");
    question.append(answerChoiceContent);
    answerChoiceContent.innerHTML = b.content;  
    answerChoice.name = "answer-to-question" + questionCounter;
  })
  questionCounter++;
  
});


const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function (e) {
  const selection = [...document.querySelectorAll(`input:checked`)];
  selection.forEach(function(a) {
      if (a.value === quizContent[0].correct || a.value === quizContent[1].correct || a.value === quizContent[2].correct || a.value === quizContent[3].correct || a.value === quizContent[4].correct || a.value === quizContent[5].correct || a.value === quizContent[6].correct) {
        score++
        console.log(quizContent[0].correct);
      } else {
        score + 0;
      }
    }
  )
  alert("You received a " + score + "/7.");
  location.reload();
});






  //const answers = quizContent[a].answersArray;
  //console.log(answers);


/* const questions = document.querySelectorAll("span");
  questions.forEach(function(b) {
    for (i = 0; i <= 3; i++) { 
    const answerChoice = document.createElement("input");
    answerChoice.type = "radio";
    answerChoica.value = "test";
    b.append(answerChoice);
    if (i == 0) {
      answerChoice.
    }
  } */
/*     const answerChoice = document.createElement("input");
    answerChoice.type = "radio";
    answerChoica.value = "test";
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
  bubbla.id = "answer";
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
  bubbla.id = "answer";
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


