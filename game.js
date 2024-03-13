

buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

nextSequence();
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    
    let sound = new Audio("sounds/" + randomChosenColor + ".mp3");
    sound.play();
}