// Plan: 
// initiatlize Game
    // show first scrambled word's letters 
    // load the input field for user to type into 

// Game Logic Structure 
// wait for a user to click start 
// Wait for a user to type a word  > Set up event listeners 
// check that the letters used are in the array of letters shown 
// let the user know if the word is accepted (if it used the letters; display an alert) 
    // Accepted: show an accepted message and update the letters available that have not been used / can not make same word 
    // Not Accepted: show message to try another word
    // Not Accepted: used letter outside of tiles?

// Game Variables

let wins = 0; 
let attempts = 0; 
let round = 0;
let wordsMadeCount = 0; 
let wordsMade = []; 
let scrambledLetters = [];
let words = ["baseball", "birch", "apple", "yellow", "sea"];
let randomIndex;

// Generate a scramble of letters of the first word in round 1

const word1 = 'baseball'.split('');

function scramble() {

    for (let i=0; i < word1.length; i++) {
        randomIndex = Math.floor(Math.random() * word1.length)
        const scrambledLetter = word1[randomIndex]
        scrambledLetters.push(scrambledLetter)
    }
    return scrambledLetters
}

console.log("scramble=",scramble())

const wordsMadeCountElement = () => (document.getElementById('words-made-count').innerHTML = wordsMadeCount); 
const wordsMadeElement = () => (document.getElementById('words-made').innerHTML = wordsMade); 
const winsElement = () => (document.getElementById('wins').innerHTML = wins);
const attemptsElement = () => (document.getElementById('attempts').innerHTML = attempts);
const roundsElement = () => (document.getElementById('rounds').innerHTML = round);
const displayMsg = (message) => alert(message); 

const tilesContainerElement = (string) => (document.getElementById('letter-tiles-container').innerHTML = string); 

// initialize the game, set up each round... 
// keep track of how many rounds, the winning condition for each round 


// Event Handlers 

// const handlePlayerInput = (evt) => 
// when the user types a word into their keyboard
// capture their number of tries
// then check if their guess is correct 
// no, can they still keep guessing? or do they need to move on
// win or lose, update the correct state value and move to the next round OR reset the game


// let userInput = ''; 



// checkforValidTurn(userInput);
// checkforWinCondition(userInput); 

// // Event Listeners

// document.addEventListener('keypress', handlePlayerInput)
// document.getElementById('letter-tiles-container').addEventListener('click', handlePlayerInput); 

// // Utility Functions 

// const checkWinCondition = (userInput) => {
//     if (scrambledWord === userInput) {
//         attempts += 1; 
//         displayMsg("Go Bananas, great job!");
//         initGame(); 
//     } else if (guessesLeft === 0) {
//         displayMsg ("Oh Bananas, try again.")
//         attempts += 1; 
//         initGame();         
//     }
// }; 

const generateLetterTilesString = () => {
    let letterTiles = ''; 
    word1.forEach(function (tile) {
        letterTiles += `<button type="button" class="btn btn-outline-info">${tile}</button>`;
    }); 

    return letterTiles;
};

const initGame = () => {
    wordsMadeCountElement();
    wordsMadeElement(); 
    winsElement();
    attemptsElement();
    roundsElement();
    tilesContainerElement(generateLetterTilesString());

};

// Start Game

initGame(); 




