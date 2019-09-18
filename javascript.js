function game(){

alert("You are about to take on the computer! Good luck, you're gonna need it...");
var playerName = prompt("What's your name fool?");
var computerName = "CPU";
var playerMove = prompt("What move are you going to play??? rock, paper or scissors? I pity the fool!");
var computerMove = generateComputerMove();
console.log(checkTheWinner(computerMove, playerMove, computerName, playerName));
}

function generateComputerMove(){
  var randomNumber = Math.random();
  if (randomNumber < 0.33){
    return "rock";
  } else if (randomNumber < 0.66){
    return "scissors";
  }else if (randomNumber <= 1){
    return "paper";
  }
}

function checkTheWinner(move1, move2, name1, name2){

if (move1 === move2) {
return ("Its a draw!");
} else if (move2 === "rock"){
if (move1 === "paper") {
return (name1 + " wins!");

} else {  return (name2 + " wins");
}
} else if (move2 === "paper"){
if (move1 === "scissors"){
return (name1 + " wins!");

} else {  return (name2 + " wins")
}
} else if (move2 === "scissors"){
if (move1 === "rock") {
return (name1 + " wins!");

} else {  return ( name2 +" wins");
        }
    }
}

var playAgain = true;
while(playAgain){

game();

playAgain = confirm("play again?");

}

