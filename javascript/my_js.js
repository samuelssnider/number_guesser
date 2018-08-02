


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

ready(function(){
  var guessField = document.querySelector('.guess-field');
  var output = document.querySelector('.output')
  var randomNum = (Math.floor(Math.random() * 100)+ 1);
  console.log(randomNum)
  guessField.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        var userGuess = parseInt(guessField.value)
        var text = ''
        switch ( true) {
          case userGuess > randomNum:
            text = "Too High";
            break;
          case userGuess < randomNum:
            text = "Too High";
            break;
          case userGuess === randomNum:
            text = "Too High"
            break;
        }
      }
  output.InnerText = text
      
  });

});


ready();