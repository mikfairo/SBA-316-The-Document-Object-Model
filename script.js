const imageSet = [
    './images/image-one.jpg',
    './images/image-two.jpg',
    './images/image-three.jpg',
    './images/image-four.jpg'
]

function getRandomIndex(){
    let randomNum =Math.round(Math.random()*100)
    return randomNum % imageSet.length
}

let randomIndex = getRandomIndex(); 

const randomImage = document.createElement('img');
randomImage.src = imageSet[randomIndex];
const imageDiv = document.getElementById('main-div');
imageDiv.appendChild(randomImage);

const triviaSet = [
    'What is the rarest blood type among humans?', 
    'What is the largest island in the world?',
    'What is the most spoken language in the world?',
    'How many teaspoons are in a tablespoon?',
    'What is the purpose of the “break” statement in JavaScript?'
]

function getRandomQuestion(){
    let questionNum =Math.round(Math.random()*100)
    return questionNum % triviaSet.length
}

let questionInput = getRandomQuestion(); 

const questionHeader= document.createElement('h1'); 
questionHeader.textContent= triviaSet[questionInput];//to change the text inside the set
const questionDiv =document.getElementById('main-div');
questionDiv.appendChild(questionHeader);

const questionCard =document.getElementById('question-card');
// questionCard.appendChild(questionHeader);