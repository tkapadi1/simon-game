// creating a color array that has  the four colours the game for random generation.
var buttonColours = ["red", "blue", "green", "yellow"];

// creating an empty array for using storing the random color sequence.
var gamePattern = [];

// creating an empty array for using storing the USER color sequence.
var userClickedPattern = [];

// creating a variable to check the current level of the game.
var currentLevel = 0;

// variable that is initialiased as true that says that the process is started.
var running = true;

// to start the game jquery event listener keypress.
$(document).keypress(function () {
  // checks if the process is just started or not.
  if (running) {
    //this code executes when the keypress event occurs.
    $("#level-title").text("level " + currentLevel);
    setTimeout(function () {
      nextSequence();
    }, 500);
    running = false;
  }
});

// to check the button click of mouse and its attribute.
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});


// function made to check wheather the latest button click of sequence was right or not.
function checkAnswer(level) {
  if (gamePattern[level] === userClickedPattern[level]) {
    console.log("right!");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    var error = "/wrong";
    playSound(error);
    $("body").addClass("game-over");
    $("#level-title").text("Game Over! press any key to Restart.");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
    console.log("wrong");
  }
}


// generates the sequence to follow.
function nextSequence() {
  userClickedPattern = [];
  currentLevel++;
  $("#level-title").text("level " + currentLevel);
  // generating a random number from 0-3
  var randomNumber = Math.floor(Math.random() * 4);

  // random number value used as index for choosing the color of array.
  var randomChosenColour = buttonColours[randomNumber];

  // putting the color into the empty array for a color sequence.
  gamePattern.push(randomChosenColour);

  setTimeout(function () {
    // Jquery for flasing the buttons with id of randomchosencolour.
    $("#" + randomChosenColour)
      .fadeOut(100)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);

    // play audio for the button seleced and done.
    playSound(randomChosenColour);

    //   ANIMATE THE color key.
    animatePress(randomChosenColour);
  }, 700);
}


// function to play all the button sounds
function playSound(userChosenColour) {
  var audio = new Audio("sounds/" + userChosenColour + ".mp3");
  audio.play();
}


//function to execute the animation of the button. 
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// Function to start the game again.
function startOver() {
  currentLevel = 0;
  gamePattern = [];
  running = true;
}
