var randomNum;

var randomize = function(e) {
  randomNum= (Math.floor(Math.random() * 100)+ 1);
}
randomize();

console.log(randomNum)
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

var addResetButtonListener = function (resetButton, guessField, output){
  randomize()
  guessField = ""
  output = ""
}


var addEnterListener = function (guessField, output, randomNum){
  guessField.addEventListener('keypress', function (e) {
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
    }
  });
}

var addGuessButtonListener = function (guessButton, guessField, output, randomNum){
  guessButton.addEventListener('click', function (e) {
    var text = '';
    var userGuess = parseInt(guessField.value)
    console.log(userGuess)
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
    output.innerText = text;
  });
}
var addClearButtonListener = function (clearButton, guessField,  output) {
  clearButton.addEventListener('click', function(e) {
    output.innerText = ""
    guessField.value = "";
    clearButton.disabled = true
  })
}

var addGuessFieldListener = function (guessField, clearButton) {
  guessField.addEventListener('keypress', function(e) {
    if(guessField.value != ""){
      clearButton.disabled = false;
    }
  })
}

var addListeners = function(e) {
  var guessField = document.querySelector('.guess-field');
  var guessButton = document.querySelector('.guess-btn');
  var clearButton = document.querySelector('.clear-btn');
  var resetButton = document.querySelector('reset-btn')
  var output = document.querySelector('.output')
  addGuessFieldListener(guessField, clearButton)
  addEnterListener (guessField, output, randomNum);
  addGuessButtonListener(guessButton, guessField, output, randomNum);
  addClearButtonListener(clearButton, guessField,  output);
  addResetButtonListener(clearButton, guessField, output);
}

ready(function(){
  addListeners();
});


ready();