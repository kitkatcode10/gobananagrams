
let attempts = 0; 
let round = 3;
let wordsMadeCount = 0; 
let wordsMade = []; 
let words = ["baseball", "birch", "apple"];
let scrambledWord;

const word1 = 'baseball'.split(''),
        n = word1.length; 

function scramble() {

    for (let i = n - 1; i > 0; i --) {
        const scrambledWord = Math.floor(Math.random() * (i + 1));
        const scrambledLetters = word1[i];
        word1[i] = word1[scrambledWord];
        word1[scrambledWord] = scrambledLetters; 
    }
    return word1.join("");
}

console.log(scramble())


// const bananaBasketElement = () => (document.getElementById('banana-basket-input').innerHTML = bananaBasketInput); 
const attemptsElement = () => (document.getElementById('attempts').innerHTML = attempts);
const roundsElement = () => (document.getElementById('rounds').innerHTML = round);
const wordsMadeCountElement = () => (document.getElementById('words-made-count').innerHTML = wordsMadeCount); 
const wordsMadeElement = () => (document.getElementById('words-made').innerHTML = wordsMade); 
const displayMsg = (message) => alert(message); 

const tilesContainerElement = (string) => (document.getElementById('letter-tiles-container').innerHTML = string); 

// Event Handlers 

const handlePlayerInput = (evt) => {

    let userInput = ''; 

    if (evt.type === 'click' && evt.target.value) {
        userInput = evt.target.value.toLowerCase();
    } else if (evt.type === 'keypress') {  
        userInput = evt.key.toLowerCase();
    } else {
        return; 
    }

    checkForValidInput(userInput);
    checkWinCondition(userInput);
};

document.addEventListener('keypress', handlePlayerInput);
document.getElementById('letter-tiles-container').addEventListener('click', handlePlayerInput);
// document.getElementById('banana-basket-input').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//     }
// });

// // Event Listeners

// input.querySelector('#txtSearch').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//     }
// }); 
// document.getElementById('letter-tiles-container').addEventListener('input', handlePlayerInput); 

// inputelement.addEventListener('keypress' , handlePlayerInput)

// // Utility Functions 

const checkWinCondition = (userInput) => {
    if (word1 === userInput) {
        wins += 1; 
        displayMsg("Go Bananas, great job!");
        initGame(); 
    } else if (word1 !== userInput) {
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

// const computerRandom = () => scrambleWord = scrambledLetters

const initGame = () => {

    // generate a scrambled word 
    
    // bananaBasketElement(); 
    wordsMadeCountElement();
    wordsMadeElement(); 
    attemptsElement();
    roundsElement();
    tilesContainerElement(generateLetterTilesString());

};

// Start Game

initGame(); 


