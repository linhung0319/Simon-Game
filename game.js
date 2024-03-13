
let gamePattern = [];
let randomChosenColor = nextSequence()
buttonColors = ["red", "blue", "green", "yellow"];
gamePattern.push(randomChosenColor);
console.log(gamePattern);

nextSequence();
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}