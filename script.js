// Define initial scores
var humanScore = 0;
var computerScore = 0;

// Add click listeners to game buttons
document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;

// Functions to handle button clicks
function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}

// Main game function
function play(humanPlay) {

  // Get the computer's play
  computerPlay = getComputerPlay();

  // Update the status message
  document.getElementById('status').innerHTML = "<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>.</p>";

  // Determine the winner of the game
  if (humanPlay == 'rock') {
    if (computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>You tied. </p>";
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You lose. </p>";
      computerScore++;
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You win!</p>";
      humanScore++;
    }
  } else if (humanPlay == 'paper') {
    if (computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>You win! </p>";
      humanScore++;
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You tied. </p>";
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You lose. </p>";
      computerScore++;
    }
  } else if (humanPlay == 'scissors') {
    if (computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>You lose. </p>";
      computerScore++;
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You win! </p>";
      humanScore++;
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You tied. </p>";
    }
  }

  // Update the scores on the page
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;

}

// Function to get the computer's play
function getComputerPlay() {
  var plays = ['rock', 'paper', 'scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}

// Add click listener to reset button
document.getElementById('reset').onclick = resetScores;

// Function to reset the scores
function resetScores() {
  humanScore = 0;
  computerScore = 0;
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
  document.getElementById('status').innerHTML = "";
}
