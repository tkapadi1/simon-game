// creating a color array that has  the four colours the game for random generation.
var buttonColours = ["red","blue","green","yellow"];

// creating an empty array for using storing the random color sequence.
var gamePattern = [];

function nextSequence() {
    // generating a random number from 0-3
    var randomNumber = Math.floor(Math.random()*4);
    
    // random number value used as index for choosing the color of array.
    var randomChosenColour = buttonColours[randomNumber];
    
    // putting the color into the empty array for a color sequence.
    gamePattern.push(randomChosenColour );
}
