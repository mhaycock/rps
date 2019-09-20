var heading = document.getElementById("Heading");
var input = document.getElementById("name");
var playerName;
function setName() {
  playerName = input.value;
}

function game(playerMove) {
  var computerName = "CPU";
  var computerMove = generateComputerMove();
  heading.innerText = checkTheWinner(
    computerMove,
    playerMove,
    computerName,
    playerName
  );
}

function generateComputerMove() {
  var randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "scissors";
  } else if (randomNumber <= 1) {
    return "paper";
  }
}

function checkTheWinner(move1, move2, name1, name2) {
  if (move1 === move2) {
    return "Its a draw!";
  } else if (move2 === "rock") {
    if (move1 === "paper") {
      return name1 + " wins!";
    } else {
      return name2 + " wins";
    }
  } else if (move2 === "paper") {
    if (move1 === "scissors") {
      return name1 + " wins!";
    } else {
      return name2 + " wins";
    }
  } else if (move2 === "scissors") {
    if (move1 === "rock") {
      return name1 + " wins!";
    } else {
      return name2 + " wins";
    }
  }
}

// change game from prompts to inputs
// a button for rock, paper and scissors separately
//player presses rock, computer generates a move, check the winner
