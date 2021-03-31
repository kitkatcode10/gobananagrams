// Psudocode for Go Bananas: Bananagrams Variant Game, the overall game play

// 1. Define required constants: 
//     1.1) Define a player (do i need this? it's a 1 player game)
//     1.2) Define input words? array?

// 2. Define required variables used to track the state of the game
//     2.1) Use a letter array to represent the tiles 
//     2.2) Use an array to represent the word inputs 

// 3. Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant. 
//     3.1) Store the 10 elements that represent the tiles on the page  

// 4. Upon loading the app should:
//     4.1) Initialize the state variables: 
//         4.1.1) Initialize the letter array to 10 nulls to represent empty tiles
//     4.2) Wait for the user to click start 
//     4.3) Render those values to the page
//         4.3.1) Present 10 random letters 
//         4.3.2) Initialize the field that player enters words based on presented letter tiles  
//         4.3.3) Initialize the banana basket that holds words entered

// 5. Handle a player typing in words:
//     5.1) Handle a player typing in a real word with letters provided
//     5.2) Handle a player submitting the word by clicking enter
//         5.2.1) (can we do it by clicking the keyboard's enter vs. enter on the screen) Store the words typed?
//         5.2.2) Present the words entered 
//         5.2.3) Loop through the letter array for the set so that once a letter is used, the letter can not be used again
//         5.2.4) Loop through the words array? or the words captured to make sure its not the same word... do not accept word if it's already been used

// 6. Handle a player clicking the "more bananas" for next round: 
//     6.1) Give player a new set of 10 randomized tiles 
//     6.2) Repeat Step #5 
//     6.3) Display a message for completing all 3 rounds. 

// 7. Handle a player clicking the "play again" button:
//     7.1) Do Step 4 to render 

// Thoughts: Incorporate a reset button to clear the words already made? 
// How do I make a wrap up page that shows all the words made and the count of the words 

// Other notes: 

// 1. Jumbotron for title and header for all pages and tiles?
// 2. landing page background is flashing/neon-ish image of pink and yellow bananas (see mockup)
// 3. Make a clickable start button 
// 4. Round 1, generate 10 random letters of the alphabet 
// 5. create input box on bottom left for player to type in words 
// 6. words are entered by clicking "enter" 
// 7. each word entered is collected and shown on in the banana basket (words made)
// 8. once all the letters are used or if the player wants more letter they can click more 
// 9. if they make the same word, it won't be accepted [if function?]
// 10. continue for 3 rounds total 
// 11. Wrap up page shows all words made and the count of the words 


// Notes: using ID and or class attributes will help target elements for styling and wiring up the event listeners
// decide on data structures, held in variables, that will maintain the state of the game 
// (similar to guess that letter game we built in class) need random letters alphabet - 10 letter generator 