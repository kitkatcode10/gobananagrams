// Plan: 
// initiatlize Game
    // flip the letters, show 10 random letters
    // load the input field for user to type into 

// Game Logic Structure 
// wait for a user to click start 
// Wait for a user to type a word  > Set up event listeners 
// check that the letters used are in the array of letters shown 
// let the user know if the word is accepted (if it used the letters; display an alert) 
    // Accepted: show an accepted message and update the letters available that have not been used / can not make same word 
    // Not Accepted: show message to try another word 
    // Not Accepted: less than 2 letters 
    // Not Accepted: used letter outside of tiles?

// Game Variables

let wins = 0; 
let losses = 0; 
let round = 0;
let wordsMadeCount = 0; 
let lettersAvailable = 10; // ?? do I need this... 
let wordsMade = []; // basically need to keep track of the words they made while playing 
let randomLetters; 
let words = ["baseball", "birch", "apple", "yellow", "sea"];

// Generate an array of letters for my game tiles 

const tiles = 'abcdefghijklmnopqrstuvwxyz'.split('');


// const wordCount = document.getElementById('words-made-count') 

const wordsMadeCountElement = () => (document.getElementById('words-made-count').innerHTML = wordsMadeCount); 
// const wordsMadeCountElement =()=>{
//     console.log("hello")
//     console.log(wordCount)
//     wordCount.innerHTML=wordsMadeCount
//   }
const wordsMadeElement = () => (document.getElementById('words-made').innerHTML = wordsMade); 
const displayMsg = (message) => alert(message); 


const tilesContainerElement = (string) => (document.getElementById('letter-tiles-container').innerHTML = string); 

// initialize the game, set up each round... 
// keep track of how many rounds, the winning condition for each round 



const generateLetterTilesString = () => {
    let letterTiles = ''; 
    tiles.forEach(function (tile) {
        letterTiles += `<button type="button" class="btn btn-outline-info">${tile}</button>`;
    }); 

    return letterTiles;
};

const initGame = () => {
    wordsMadeCountElement();
    wordsMadeElement(); 
    tilesContainerElement(generateLetterTilesString());

};

// Start Game

initGame(); 




