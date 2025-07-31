// Array of Words
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion'
];


let currentWord = document.querySelector("#current-word");
let wordInput = document.querySelector("#word-input");
let timeDisplay = document.querySelector("#time");
let scoreDisplay = document.querySelector('#score');
let message = document.getElementById("message");
let restart = document.getElementById("restart")
let time = 6;
let score = 0;
let interval = null;
let audioSource = "game-over.mp3"

function init() {
    showWords();
    wordInput.addEventListener("input", startMatch);
    interval = setInterval(timer, 1000);
}

function startMatch() {
    if (match()) {
        time = 6;
        timeDisplay.innerText = 6;
        score++;
        scoreDisplay.innerText = score;
        showWords();
        wordInput.value = ""
    }
}

function match() {
    let inputValue = wordInput.value;
    if (time > 0) {
        if (inputValue === currentWord.innerHTML) {
            message.innerText = "Correct!!!!";
            return true;
        }
        else {
            message.innerText = "Incorrect!!!"
            return false;
        }
    }
    else {
        message.innerText = "Game Over"
        clearInterval(interval)
        let audio = new Audio();
        audio.src = audioSource
        audio.play().catch(err => console.log("Audio error:", err));
        wordInput.innerText = ""
        return false
    }
}


function timer() {
    if (time > 0) {
        time--;
        timeDisplay.innerText = time;
    }
    else {
        message.innerText = "Game Over"
        wordInput.innerText = ""
        clearInterval(interval)
        let audio = new Audio();
        audio.src = audioSource
        audio.play().catch(err => console.log("Audio error:", err));
    }
}





function showWords() {
    let wordIndex = Math.floor(Math.random() * words.length)
    currentWord.textContent = words[wordIndex]
}


restart.addEventListener("click", () => {
    console.log("Restart")
    message.innerText = "";
    wordInput.innerText = ""
    time = 6;
    clearInterval(interval)
    init();
})

window.addEventListener("load", init)