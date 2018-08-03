var randomNum = (Math.floor(Math.random() * 100)+ 1);
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
          text = "You Guessed It Buddy!";
          break;
      }
      output.innerText = text;
    }
  });
}

var addGuessButtonListener = function (guessButton, guessField, output, randomNum){
  guessButton.addEventListener('click', function (e) {
    var text = ''
    var userGuess = parseInt(guessField.value)
    switch (true) {
      case userGuess > randomNum:
        text = "Too High";
        break;
      case userGuess < randomNum:
        text = "Too Low";
        break;
      case userGuess === randomNum:
        text = "You Guessed It Buddy!";
        break;
      output.innerText = text;
    }
  });
}


var addListeners = function(e) {
  var guessField = document.querySelector('.guess-field');
  var guessButton = document.querySelector('.guess-btn');
  var clearButton = document.querySelector('.clear-btn');
  var output = document.querySelector('.output')
  addEnterListener (guessField, output, randomNum);
  addGuessButtonListener(guessButton, guessField, output, randomNum)
}

ready(function(){
  addListeners();
});


ready();