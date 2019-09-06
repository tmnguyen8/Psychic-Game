// This is the first version of Javascript for the Psychic Game
// ************************************************************
// GLOBAL VARIABLES
// ************************************************************
var validLetter = "abcdefghijklmnopqrstuvwxyz";
var numWin = 0;
var numLoss = 0;
var guessLeft = 10;
var guessList = [];
// Generate a randomized letter pick by computer
var computerLetter = validLetter[Math.floor(Math.random() * validLetter.length)];

// FUNCTIONS
// ************************************************************
// function to start new game without resetting all scores
function nextGame () {
  guessLeft = 10;
  guessList = [];
  computerLetter = validLetter[Math.floor(Math.random() * validLetter.length)];
  document.getElementById("guess-left").innerHTML = guessLeft;
  document.getElementById("guessed-letter").innerHTML = guessList;
}

// function to update results
function updateResults() {
  document.getElementById("num-win").innerHTML = numWin;
  document.getElementById("num-loss").innerHTML = numLoss;
  document.getElementById("guess-left").innerHTML = guessLeft;
  document.getElementById("guessed-letter").innerHTML = guessList;
}

// This function checks if the guessed letter is valid or not
function isLetterValid(letterStr) {
  if (validLetter.includes(letterStr)) {
    return true;
  } else {
    return false;
  } 
}

// This function checks if the guessed letter is valid using isLetterValid() and appends it to the guessList to display
function submitLetter() {
  console.log(computerLetter)
  var letterStr = document.getElementById("letter").value.toLowerCase();
  // Check if letter is a valid letter and if it exist in the current guess list

  if (isLetterValid(letterStr) && !(guessList.includes(letterStr))) {
      guessList.push(letterStr);
      guessLeft--;
      document.getElementById("guess-left").innerHTML = guessLeft;  
      
  } else {
      alert("The letter selected is either invalid or already existed in the guessed list");
  }
  //write the guessed letter into HTML page
  
  document.getElementById("guessed-letter").innerHTML = guessList;
    
  
  // if the letterStr is the same as computerGuess then return numWin +=1
  if (letterStr === computerLetter) {
    numWin++;
    alert(`You won! Correct letter is ${computerLetter}`);
    nextGame();
    updateResults(); 
    
  // when guessLeft = 0 return numLoss and reset the values
  } else if (guessLeft === 0) {
    numLoss++; 
    alert(`You lost! Correct letter is ${computerLetter}`);
    nextGame();
    updateResults();
    
  }

  // testing & debugging
  console.log(`numWin: ${numWin} | numLoss: ${numLoss} | guessLeft: ${guessLeft} | computerLetter: ${computerLetter} | guessList: ${guessList}`)

} 

// This function reset the variables and restart the game
function resetGame() {
  var numWin = 0;
  var numLoss = 0;
  var guessLeft = 10;
  var guessList = [];
  document.getElementById("num-win").innerHTML = numWin;
  document.getElementById("num-loss").innerHTML = numLoss;
  document.getElementById("guess-left").innerHTML = guessLeft;
  document.getElementById("guessed-letter").innerHTML = guessList;
  // computerLetter = validLetter[Math.floor(Math.random() * validLetter.length)];
} 

// When Enter key is pressed, it executes the submitLetter()
function runScript(event) {
  if (event.keyCode === 13) {  //checks whether the pressed key is "Enter"
      // submitLetter();
  }
};
