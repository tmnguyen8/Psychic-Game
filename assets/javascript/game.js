// Defines the variables
var validLetter = "abcdefghijklmnopqrstuvwxyz";
var numWin = 0;
var numLoss = 0;
var guessLeft = 10;
var guessList = [];
// Generate a randomized letter pick by computer


// This function checks if the guessed letter is valid or not
function isLetterValid(letterStr) {
  if (validLetter.includes(letterStr)) {
    return true;
  } else {
    return false;
  }
  // check if letter is duplicated
}


// This function checks if the guessed letter is valid using isLetterValid() and appends it to the guessList to display
function submitLetter() {
  var letterStr = document.getElementById("letter").value.toLowerCase();
  if (isLetterValid(letterStr)) {
      guessList.push(letterStr);
  } else {
      alert("Not a Valid Letter. Submit a valid letter");
  }
  document.getElementById("guessed-letter").innerHTML = guessList;  
  // loop through guessLeft as long as it is greater than 0
    // if the letterStr is the same as computerGuess then return numWin +=1
    // else if letterStr is not the same as computerGuess then guessLeft -= 1
  // when loop is out and guessLeft = 0 return numLoss and reset the values


} 

// This function reset the variables and restart the game
function resetGame() {
  var numWin = 0;
  var numLoss = 0;
  var guessLeft = 0;
  var guessList = [];
  document.getElementById("num-win").innerHTML = numWin;
  document.getElementById("num-loss").innerHTML = numLoss;
  document.getElementById("guess-left").innerHTML = guessLeft;
  document.getElementById("guessed-letter").innerHTML = guessList;  
} 
