var readlineSync = require("readline-sync");

let score = 0;
let userName = readlineSync.question("What's your name?  ");
console.log(`Welcome ${userName.toUpperCase()}!! to 'HOW WELL DO YOU KNOW MINKU'\n`);

//function to check answer
function checkAns(question, answer){
  let userAnswer = readlineSync.question(question);
  if(userAnswer == answer){
    console.log("Ahhh🤭, that's correct!!");
    score++;
    console.log(`current score: ${score}`);
    console.log("-------------------------\n");
  } else {
    console.log("Oops😪, that's not correct!!");
    console.log(`current score: ${score}`);
    console.log("-------------------------\n");
  }
}

//questions and ans
let questions = [
  {
    ques : "1. Am I older than 25? ",
    ans : "no",
  },
  {
    ques : "2. Do I want to be a Frontend Developer? ",
    ans : "yes",
  },
  {
    ques : "3. Do I know Bhojpuri? ",
    ans : "yes",
  },
  {
    ques : "4. Am I a Bihari? ",
    ans : "yes",
  },
  {
    ques : "5. Then...Do I want to appear for UPSC😂? ",
    ans : "yes",
  }
];

questions.map(question => checkAns(question.ques, question.ans));
console.log("\n🎉Thanks for playing!!")
console.log(`Your Total score: ${score}/5`)