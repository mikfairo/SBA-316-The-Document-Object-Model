const imageSet = [
    './images/image-one.jpg',
    './images/image-two.jpg',
    './images/image-three.jpg'
]

function getRandomIndex(){
    let randomNum =Math.round(Math.random()*100)
    return randomNum % imageSet.length
}

let randomIndex = getRandomIndex(); 

const randomImage = document.createElement('img');
randomImage.src = imageSet[randomIndex];
const imageDiv = document.querySelector('div');
imageDiv.appendChild(randomImage);


