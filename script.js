const imageSet = [
  "./images/image-one.jpg",
  "./images/image-two.jpg",
  "./images/image-three.jpg",
  "./images/image-four.jpg",
];

function getRandomIndex() {
  let randomNum = Math.round(Math.random() * 100);
  return randomNum % imageSet.length;
}

let randomIndex = getRandomIndex();

const randomImage = document.createElement("img");
randomImage.src = imageSet[randomIndex]; //get image src from set to log a random image
const imageDiv = document.getElementById("main-div");
imageDiv.appendChild(randomImage);

const triviaSet = [
  {
    question: "What is the rarest blood type among humans?",
    answers: ["O negative", "AB negative", "AB positive", "O positive"],
    // correctAnswer: 'O negative'
  },
  {
    question: "What is the largest island in the world?",
    answers: ["Hawaii", "Greenland", "Australia", "Madagascar"],
  },
  {
    question: "What is the most spoken language in the world?",
    answers: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
  },
  {
    question: "How many teaspoons are in a tablespoon?",
    answers: ["Three", "Two", "Five", "One & half"],
  },
  {
    question:
      "Which of the following is not a primitive data type in Javascript?",
    answers: ["String", "Boolean", "Float", "Array"],
  },
];

function getRandomQuestion() {
  let questionNum = Math.round(Math.random() * 100);
  return questionNum % triviaSet.length;
}

let questionIndex = getRandomQuestion();

const questionHeader = document.createElement("h1");
questionHeader.textContent = triviaSet[questionIndex].question; //to get a question from the set to log random question
const questionDiv = document.getElementById("main-div");
questionDiv.appendChild(questionHeader);

const questionCard = document.getElementById("question-card");
questionCard.appendChild(questionHeader);

triviaSet[questionIndex].answers.forEach((answer) => {
    const inputTag = document.createElement('input');
    inputTag.type = 'radio'
    const labelOfInput = document.createElement('label');
    labelOfInput.textContent=answer
    questionCard.appendChild(inputTag);
    questionCard.appendChild(labelOfInput);
})


// const answerOneRadio = document.createElement('input'); //creating input tag for each answer in triviaSet
// answerOneRadio.type = 'radio'
// const answerOneLabel =document.createElement('label');
// // vtrayr ;asnel;

// answerOneLabel.textContent =triviaSet[questionIndex].answers[0]; // <== don do dis
// // insatsd of setting tet ontent for answer1, do it for label

// const answer2 = document.createElement('input');
// answer2.type = 'radio'

// answer2.textContent =triviaSet[questionIndex].answers[1];
// const answer3 = document.createElement('input');
// answer3.type = 'radio'
// answer3.textContent =triviaSet[questionIndex].answers[2];
// const answer4 = document.createElement('input');
// answer4.type = 'radio'
// answer4.textContent =triviaSet[questionIndex].answers[3];

// questionCard.append(answerOneRadio);
// questionCard.append(answerOneLabel);
// questionCard.append(answer2);
// questionCard.append(answer3);
// questionCard.append(answer4);


