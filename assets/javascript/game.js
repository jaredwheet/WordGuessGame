// Array used for Hangman school and nickname answers

var $nicknames = [
    { s: "Colorado", n: "Buffaloes" },
    { s: "Nebraska", n: "Cornhuskers" },
    { s: "UCLA", n: "Bruins" },
    { s: "Arizona", n: "Wildcats" },
    { s: "Illinois State", n: "Redbirds" },
    { s: "Florida", n: "Gators" },
    { s: "Miami", n: "Hurricanes" },
    { s: "Michigan", n: "Wolverines" },
    { s: "Ohio State", n: "Buckeyes" },
    { s: "Kansas", n: "Jayhawks" }
    ];   

    //Creating variables to assist in game performance
var $nicknamesIndex = 0;
var $score = 0;
var $guesses = 0
var $currentSchool = $nicknames[$nicknamesIndex].s
var $currentNickname = $nicknames[$nicknamesIndex].n

// This function puts the name of the college or university on the screen as a hint to the player
function $populateSchool(){
    if ($nicknamesIndex <= ($nicknames.length - 1)){
      $("#college").text($currentSchool);
    }
    else {
      $("#any-key").text("Game Over!");
      $("#score").text("Final Score: " + $score + " out of " + $nicknames.length);
    }
}   

//This function takes the nickname or answer and turns it into a string of _
 function $gameplay () {  
    var $string = "";
    for (i = 1; i <= $currentNickname.length; i++){    
      $string = $string + "_";
      $("#blank-answer").text($string); 
    }
    var keysGuessed = "";
      if ($string !== $currentNickname && $guesses <= 10){
        $(document).keypress(function(event){
          var letterPressed = event.key;
          var lowerCasedArray = $currentNickname.split('').map(function(char){
            return char.toLowerCase();
          });
          var indexValue = lowerCasedArray.indexOf(letterPressed);
        
            if (indexValue >= 0){
              var newAnswers = $("#blank-answer").text().split('');
              newAnswers[indexValue] = $currentNickname[indexValue];
              console.log(newAnswers);

              $("#blank-answer").text(newAnswers.join(''));
            }

            else {
              if(keysGuessed !== '') {
                keysGuessed += ', ' + letterPressed;
              }
              else {
              keysGuessed += letterPressed;
              }
              console.log(keysGuessed);
              $("#letters-used-area").text(keysGuessed);
            }        
    })  
  }
}
  
      


// Run the first two functions to set up the game
$populateSchool()
$gameplay()
