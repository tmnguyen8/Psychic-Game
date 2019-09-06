// // This is the second version of Javascript for the Psychic Game
// // ************************************************************

// // GLOBAL VARIABLES
// // ************************************************************
// var letterOptions = "abcdefghijklmnopqrstuvwxyz";
// var selectedLetter = ""; //id #letter
// var compLetter = "";
// var guessedLetter = []; //id #guessed-letter
// // Game Counters
// var numWin = 0; //id #num-win
// var numLoss = 0; //id #num-loss
// var guessesLeft = 10; //guess-left
// var compLetter = letterOptions[Math.floor(Math.random()*letterOptions.length)];
// var isRoundEnded = false;
// // FUNCTIONS
// // ************************************************************

// // submitLetter takes the letter submitted in and assigning it a variable
// function submitLetter() {
//     selectedLetter = document.getElementById("letter").value.toLowerCase();
//     console.log(selectedLetter);
//     checkLetter(selectedLetter);
    
//     var isRoundEnded = false;
//     roundComplete();
//     if (isRoundEnded) {
//         var guessesLeft = 10;
//         var guessedLetter = [];
//     }
//     debugger;
    
// }

// // startGame() function initiates the game 
// function startGame() {
//     // randomize a letter
//     // var compLetter = letterOptions[Math.floor(Math.random()*letterOptions.length)];

//     // reset
//     var guessesLeft = 10;
//     var guessedLetter = [];

//     // Change HTML to reflect round conditions
//     document.getElementById("guess-left").innerHTML = guessesLeft;
//     document.getElementById("guessed-letter").innerHTML = guessedLetter;

//     // testing and debugging
//     console.log("compLetter ", compLetter);
//     console.log("guessedLetter ", guessedLetter);
//     console.log("guessesLeft ", guessesLeft);
//     console.log("numWin ", numWin);
//     console.log("numLoss ", numLoss);
// }

// // checkLetter function check if the letter existed within the guessedLetter array and if it is a valid letter
// function checkLetter(selectedLetter) {
//     var isLetterValid = false;
//     if (letterOptions.includes(selectedLetter)) {
//         isLetterValid = true;
//         guessedLetter.push(selectedLetter);
//         guessesLeft--;
//     } else {
//         alert("Letter submitted is either invalid or duplicated from the guessed letter(s).")
//     }
//     // Change HTML to reflect round conditions
//     document.getElementById("guess-left").innerHTML = guessesLeft;
//     document.getElementById("guessed-letter").innerHTML = guessedLetter;
// }

// function roundComplete() {

//     console.log(`Win Count: ${numWin} | Loss Count: ${numLoss} | GuessesLeft: ${guessesLeft} | GuessedLetter: ${guessedLetter} | compLetter: ${compLetter}`);
//     // Check if user won
//     if (selectedLetter === compLetter) {
//         numWin++;
//         alert(`You won! Correct letter is ${compLetter}`);

//         // update the win counter in HTML
//         document.getElementById("num-win").innerHTML = numWin;
//         startGame();


//     } else if (guessesLeft === 0) {
//         numLoss++;
//         alert(`You lost! Correct letter is ${compLetter}`);

//         // update the win counter in HTML
//         document.getElementById("num-loss").innerHTML = numLoss;
//         startGame();

//     }

    
// }

// // MAIN PROCESS
// // ************************************************************

// // Initiate the code
// // startGame();


// // Get the input field


