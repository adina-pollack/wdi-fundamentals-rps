////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move = 'rock' || move = 'paper' || move = 'scissors') {
      return prompt();
    }
		else if (!move) {
			move = getInput();
	}
	return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move = 'rock' || move = 'paper' || move = 'scissors') {
      return prompt ()
    }
    if (!move) {
			move = randomPlay();
	}
	return move;
}

function getWinner(playerMove, computerMove) {
    var winner;
    if (playerMove == computerMove) {
      winner= 'tie';
    }
    else if (playerMove == 'rock' && computerMove == 'scissors') {
      winner= 'player';
    }
    else if (playerMove == 'paper' && computerMove == 'rock') {
      winner= 'player';
    }
    else if (playerMove == 'scissors' && computerMove == 'paper') {
      winner= 'player';
    }
    else {
      winner= 'computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    for (playerWins = 0; playerWins <= 5; playerWins++)
   		for (computerWins = 0; computerWins <= 5; computerWins++){
   		if ((playerWins + 1) < 5 ){
   			result = playerWins;
   		} else if ((computerWins + 1) < 5);{
   			result = computerWins;
   		} if (playerWins === 5 || computerWins === 5){
   			return [playerWins, computerWins];
   		}
      console.log('Player chose ' + playerMove +  ' while Computer chose ' + computerMove);
      console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
   	}
  }
