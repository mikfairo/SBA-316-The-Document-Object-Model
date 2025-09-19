function generatePage() {
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

  
  const mainDiv = document.createElement('div')
  mainDiv.id = 'main-div'
  
  const questionCardDiv = document.createElement('div')
  questionCardDiv.id = 'question-card'
  
  mainDiv.appendChild(questionCardDiv)
  
  const randomImage = document.createElement("img");
  randomImage.src = imageSet[randomIndex]; //get image src from set to log a random image
  mainDiv.appendChild(randomImage);

  document.body.appendChild(mainDiv)

  const triviaSet = [
    {
      question: "What is the rarest blood type among humans?",
      answers: ["O negative", "AB negative", "AB positive", "O positive"],
      correctAnswer: "AB negative",
    },
    {
      question: "What is the largest island in the world?",
      answers: ["Hawaii", "Greenland", "Australia", "Madagascar"],
      correctAnswer: "Greenland",
    },
    {
      question: "What is the most spoken language in the world?",
      answers: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
      correctAnswer: "English",
    },
    {
      question: "How many teaspoons are in a tablespoon?",
      answers: ["Three", "Two", "Five", "One & half"],
      correctAnswer: "Three",
    },
    {
      question:
        "Which of the following is not a primitive data type in Javascript?",
      answers: ["String", "Boolean", "Float", "Array"],
      correctAnswer: "Array",
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

  const inputDiv = document.createElement("div");
  inputDiv.id = "theAnswers";

  triviaSet[questionIndex].answers.forEach((answer) => {
    const inputTag = document.createElement("input");
    inputTag.type = "radio";
    inputTag.name = "nameAnswers"; //so the input all acts within the same group and only selects once per answer
    inputTag.id = "idAnswers";
    inputTag.value = answer;
    const labelOfInput = document.createElement("label"); //label can have text content, input tags CANNOT have text content
    labelOfInput.textContent = answer;
    inputDiv.appendChild(inputTag);
    inputDiv.appendChild(labelOfInput);
  });

  questionCard.appendChild(inputDiv);

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";

  submitButton.addEventListener("click", () => { 
    const inputTags = document.querySelectorAll("#idAnswers");
    const correctAnswer = triviaSet[questionIndex].correctAnswer;
    inputTags.forEach((tag) => {
      if (tag.checked === true) { 
        if (tag.value === correctAnswer) {
          console.log("correctAnswer");
          alert("Correct!");
          document.body.innerHTML = ''; //resets entire page and removes child elements
          generatePage(); //function to reset page 
        } else {
          console.log("wrong answer");
          alert("Wrong! Try again.");
        }
      }
    });
  });
  questionCard.appendChild(submitButton);
}
generatePage();

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
