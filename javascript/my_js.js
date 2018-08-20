var randomNum;

var randomize = function(e) {
  randomNum= (Math.floor(Math.random() * 100)+ 1);
}
randomize();

function ready(callback){
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
}

var addResetButtonListener = function (resetButton, guessField, output, sameText, guess){
  resetButton.disabled = true;
  resetButton.addEventListener('click', function (e) {
    randomize();
    guessField.value = "";
    output.innerText = "";
    sameText.innerText = "";
    guess.innerText = "";
    resetButton.disabled = true;
  });
}


var addEnterListener = function (guessField, output, randomNum, resetButton, guessButton, clearButton){
  guessField.addEventListener('keypress', function (e) {
    console.log("Hello!")
    guessButton.disabled = false;
    clearButton.disabled = false;
    var text = ''
    if (e.key === 'Enter') {
      var userGuess = parseInt(guessField.value)
      switch (true) {
        case userGuess > randomNum:
          text = "Too High";
          break;
        case userGuess < randomNum:
          text = "Too Low";
          break;
        case userGuess === randomNum:
          text = "BOOM!";
          break;
      }
      output.innerText = text;
      resetButton.disabled = false;
    }
  });
}

var addGuessButtonListener = function (guessButton, guessField, output, randomNum, guess, sameText, resetButton){
  guessButton.addEventListener('click', function (e) {
    var text = '';
    var userGuess = parseInt(guessField.value)
    if (isNaN(userGuess)) {
      text = "Error! You did not input a number!";
    } else {
      switch (true) {
        case userGuess === randomNum:
          text = "BOOM!";
          break;
        case userGuess > randomNum:
          if (userGuess > 100) {
            text = "Guess outside of range - please try a number below 101"
          }  else {
            text = "Too High";
          }
          break;
        case userGuess < randomNum:
          if (userGuess < 1) {
            text = "Guess outside of range - please try a number above 0"
          }  else {
            text = "Too Low";
          }
          break;
      }
    }
    sameText.innerText = "Your last guess was";
    guess.innerText = userGuess;
    console.log(resetButton)
    resetButton.disabled = false;
    output.innerText = text;
  });
}
var addClearButtonListener = function (clearButton, guessButton, guessField,  output) {
  clearButton.addEventListener('click', function(e) {
    output.innerText = ""
    guessField.value = "";
    guessButton.disabled = true;
    clearButton.disabled = true;
  })
}

var addGuessFieldListener = function (guessField, guessButton, clearButton) {
  guessField.addEventListener('keypress', function(e) {
    if(guessField.value != ""){
      clearButton.disabled = false;
      guessButton.disabled = false;
    }
  })
}

var addPickButtonListener = function (pickButton) {
  pickButton.addEventListener('click', function(e) {
    
  })
}

var addListeners = function(e) {
  var guessField = document.querySelector('.guess-field');
  var guessButton = document.querySelector('.guess-btn');
  var clearButton = document.querySelector('.clear-btn');
  var resetButton = document.querySelector('.reset-btn');
  var pickButton = document.querySelector('.pick-my-own')
  var sameText = document.querySelector('.same-text');
  var guess = document.querySelector('.show-guess');
  var output = document.querySelector('.output');
  addGuessFieldListener(guessField, guessButton, clearButton)
  addEnterListener(guessField, output, randomNum, resetButton, guessButton);
  addGuessButtonListener(guessButton, guessField, output, randomNum, guess, sameText, resetButton, clearButton);
  addClearButtonListener(clearButton, guessButton, guessField,  output);
  addResetButtonListener(resetButton, guessField, output, sameText, guess);
  addPickButtonListener(pickButton)
}

ready(function(){
  addListeners();
});


ready();