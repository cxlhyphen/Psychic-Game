//Global variables
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userGuess = "";
var computerGuess = "";

var wrongLetters = [];

var wins = 0;
var losses = 0;
var chancesLeft = 9;

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var chancesText = document.getElementById("chances");
var guessedText = document.getElementById("guessed");

document.getElementById("chances").innerHTML = chancesLeft;
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;

//Functions

function gamestart() {

    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    emptyGuesses();
};

function emptyGuesses() {
    wrongLetters = [];
    guessedText.innerHTML = wrongLetters;
};

function compareGuess() {
    if (userGuess === computerGuess) {
        wins++;
        winsText.innerHTML = wins;
        alert("You Won! Onto The Next Round!")
        gamestart();
    }

    else {
        wrongLetters.push(" " + userGuess);
        chancesLeft--;
        chancesText.innerText = chancesLeft;
        guessedText.innerHTML = wrongLetters;
    }

    if (chancesLeft == 0) {
        alert("You Lost! Onto The Next Round!")
        chancesLeft = 9;
        chancesText.innerText = chancesLeft;
        losses++;
        lossesText.innerHTML = losses;
        gamestart();
    };
};

//Main Process

gamestart();

document.onkeyup = function (event) {
    userGuess = event.key;
    compareGuess();
};