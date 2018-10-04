
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var chancesText = document.getElementById("chances");
var guessedText = document.getElementById("guessed");



document.onkeyup = function (event) {
    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log("user guessed: " + userGuess);

    console.log("computer guessed: " + computerGuess);


    if (userGuess === computerGuess) {
        wins++;
        winsText.textContent = wins;
    }
    
    else {
        guessedText.textContent = userGuess + ", ";
    }

}