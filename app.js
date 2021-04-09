
let wins = 0; 
let attempts = 0; 
let round = 0;
let wordsMadeCount = 0; 
let wordsMade = []; 
let scrambledLetters = [];
let words = ["baseball", "birch", "apple"];
let randomIndex;

var word1 = 'baseball'.split(''),
        n = word1.length; 

function scramble() {

    for (let i = n - 1; i > 0; i --) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var scrambledLetters = word1[i];
        word1[i] = word1[randomIndex];
        word1[randomIndex] = scrambledLetters; 
    }
    return word1.join("");
}
console.log(scramble())

const wordsMadeCountElement = () => (document.getElementById('words-made-count').innerHTML = wordsMadeCount); 
const wordsMadeElement = () => (document.getElementById('words-made').innerHTML = wordsMade); 
const winsElement = () => (document.getElementById('wins').innerHTML = wins);
const attemptsElement = () => (document.getElementById('attempts').innerHTML = attempts);
const roundsElement = () => (document.getElementById('rounds').innerHTML = round);
const displayMsg = (message) => alert(message); 

const tilesContainerElement = (string) => (document.getElementById('letter-tiles-container').innerHTML = string); 

// Event Handlers 

const handlePlayerInput = (evt) => {

    let userInput = ''; 

    if (evt.type === 'input' && evt.target.value) {
        userInput = evt.target.value.toLowerCase();
    } else if (evt.type === 'keypress') {  
        userInput = evt.key.toLowerCase();
    } else {
        return; 
    }

    checkForValidInput(userInput);
    checkWinCondition(userInput);
};

// // Event Listeners

// document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//     }
// }); 
document.getElementById('letter-tiles-container').addEventListener('input', handlePlayerInput); 

// // Utility Functions 

const checkWinCondition = (userInput) => {
    if (scrambledWord === userInput) {
        wins += 1; 
        displayMsg("Go Bananas, great job!");
        initGame(); 
    } else if (scrambledWord !== userInput) {
        displayMsg ("Oh Bananas, try again.")
        attempts += 1; 
        initGame();         
    }
}; 

const takeTurn = (userInput) => {
    wordsMadeCount += 1; 
    userInputs.push(userInput);

    wordsMadeElement(); 
    wordsMadeCountElement(); 
}; 

const checkforValidTurn = (userInput) => {
    if(!word1.includes(userInput)) {
        displayMsg("You can only use the letters that are scrambled, try again!");
    } else if (userInput.includes(userInput)) {
       displayMsg("Awe, you already tried that word!")
    } else {
        takeTurn(userChoice);
    }
    };

const generateLetterTilesString = () => {
    let letterTiles = ''; 
    word1.forEach(function (tile) {
        letterTiles += `<button type="button" class="btn btn-warning" style="margin:10px">${tile}</button>`;
    }); 

    return letterTiles;
};

const initGame = () => {

    // generate a scrambled word 

    wordsMadeCountElement();
    wordsMadeElement(); 
    winsElement();
    attemptsElement();
    roundsElement();
    tilesContainerElement(generateLetterTilesString());

};

// Start Game

initGame(); 


