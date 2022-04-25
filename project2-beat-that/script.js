// Step 1: player submits to roll dice
// Step 2: player chooses which dice (1 or 2) comes first
// Step 3: repeat for player 2
// step 4: output winner

// Global variable
var playerRollDice = "playerRollDice";
var playerChooseOrder = "playerChooseOrder";
var gameStage = playerRollDice;
var compareScores = "compareScores";
//Create an array to store players dice no.
var currentPlayerRolls = [];

var currentPlayer = 1;
var allPlayersScore = [];
// function to generate dice roll
var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

//1. player rolls 2 dice - 2 random dice nos, use while loop and set counter to < 2
var rollDicePlayer = function () {
  var counter = 0;
  while (counter < 2) {
    currentPlayerRolls.push(rollDice());
    counter = counter + 1;
  }
  return `Hello Player ${currentPlayer} You have rolled a ${currentPlayerRolls[0]} for Dice 1 and a ${currentPlayerRolls[1]} for Dice 2. <br><br> Input 1 or 2 to select which dice will be the first digit of your final value. Good luck!`;
};

// 2. player decides order of dice, using if logic
var detPlayerScore = function (playerInput) {
  var playerScore;
  if (playerInput != 1 && playerInput != 2) {
    return `Oops, you did not select the correct option. Please try again by selecting 1 or 2 to choose the dice for the 1st digit`;
  }
  if (playerInput == 1) {
    playerScore = Number(
      String(currentPlayerRolls[0]) + String(currentPlayerRolls[1])
    );
  }
  if (playerInput == 2) {
    playerScore = Number(
      String(currentPlayerRolls[1]) + String(currentPlayerRolls[0])
    );
  }

  allPlayersScore.push(playerScore);
  currentPlayerRolls = []; //clear current player array to prepare for the next player
  return `Player ${currentPlayer}, your selected value is ${playerScore}`;
};

var comparePlayersScore = function () {
  var compareValue =
    "Player 1's score is " +
    allPlayersScore[0] +
    " and Player 2's score is " +
    allPlayersScore[1];
  // player 1 wins
  if (allPlayersScore[0] > allPlayersScore[1]) {
    compareValue =
      compareValue +
      " <br> Congratulations Player 1, you win! <br><br> Click on submit to start again!";
  }
  //player 2 wins
  if (allPlayersScore[0] < allPlayersScore[1]) {
    compareValue =
      compareValue +
      " <br> Congratulations Player 2, you win! <br><br> Click on submit to start again!";
  }
  // its a tie
  if (allPlayersScore[0] == allPlayersScore[1]) {
    compareValue =
      compareValue + " <br> It's a tie! <br><br> Click on submit to try again.";
  }
  return compareValue;
};

var resetGame = function () {
  currentPlayer = 1;
  gameStage = playerRollDice;
  allPlayersScore = [];
};

var main = function (input) {
  var myOutputValue = "";

  if (gameStage == playerRollDice) {
    myOutputValue = rollDicePlayer();
    gameStage = playerChooseOrder;
    return myOutputValue;
  }
  if (gameStage == playerChooseOrder) {
    myOutputValue = detPlayerScore(input);

    if (currentPlayer == 1) {
      currentPlayer = 2;
      gameStage = playerRollDice;
      return `${myOutputValue} <br> Player 2's turn!`;
    }

    if (currentPlayer == 2) {
      gameStage = compareScores;
      return `${myOutputValue} <br><br> Click on submit to find out the winner!`;
    }
  }
  // use the if logic to specify conditions for the winner
  if (gameStage == compareScores) {
    myOutputValue = comparePlayersScore();

    resetGame();
    return `${myOutputValue}`;
  }
};
