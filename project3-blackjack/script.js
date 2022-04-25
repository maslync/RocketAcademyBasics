// player vs. computer
// first deck must be shuffled
// player will deal 2 cards (using the for loop)
// player will decide whether to hit (draw another card) or stand (end the turn)
// compute total score for player and computer
// decide on the winner, with condition that the score does not exceed 21. If one scores above 21, immediately loses, using the if condition

//global variables
// 1. define game modes
var GAMESTART = "game start";
var GAMECARDSDRAWN = "cards are drawn";
var GAMERESULTSSHOWN = "results are shown";
var GAMEOPTION = "hit or stand";
var currentGameMode = GAMESTART;

var gameOver = false;

//2. Create an array for player and dealer to hold their cards
var playerHand = [];
var dealerHand = [];

// 3. variable for the card deck
var gameDeck = [];

// create a deck of card
var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["♥️", "♦️", "♣️", "♠️"];

  // Loop over the suits array
  for (var i = 0; i < suits.length; i += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[i];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "ace";
      } else if (cardName == 11) {
        cardName = "Jack";
      } else if (cardName == 12) {
        cardName = "Queen";
      } else if (cardName == 13) {
        cardName = "King";
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
      };

      // Add the new card to the deck
      cardDeck.push(card);
    }
  }

  // Return the completed card deck
  return cardDeck;
};

// create a shuffled deck - 1. to create a random integer 2. function that shuffles deck 3. shuffled deck
var getRandomIndex = function (number) {
  return Math.floor(Math.random() * number);
};

var shuffleDeck = function (cards) {
  var index = 0;
  while (index < cards.length) {
    var randomIndex = getRandomIndex(cards.length);
    var currentItem = cards[index];
    var randomItem = cards[randomIndex];
    //replacing the current card with the random card
    cards[index] = randomItem;
    cards[randomIndex] = currentItem;
    index = index + 1;
  }
  return cards;
};

var createNewDeck = function () {
  var newDeck = makeDeck();
  var shuffledDeck = shuffleDeck(newDeck);
  return shuffledDeck;
};

// Game functions
var checkForBlackjack = function (handArray) {
  // loop through player's hand to find for blackjack (if yes return true), otherwise false
  var playerCardOne = handArray[0];
  var playerCardTwo = handArray[1];
  var isBlackJack = false;

  if (
    (playerCardOne.name == "ace" && playerCardTwo.rank >= 10) ||
    (playerCardOne.rank >= 10 && playerCardTwo.name == "ace")
  ) {
    isBlackJack = true;
  }
  return isBlackJack;
};
// in the event there is no black jack, calculate total score for player and dealer
var calculateTotalHandValue = function (handArray) {
  var totalHandValue = 0;
  var aceCounter = 0;
  // use a 'while' loop to go through all the cards
  var index = 0;
  while (index < handArray.length) {
    var currentCard = handArray[index];
    if (
      currentCard.name == "King" ||
      currentCard.name == "Queen" ||
      currentCard.name == "Jack"
    ) {
      totalHandValue = totalHandValue + 10;
    } else if (currentCard.name == "ace") {
      totalHandValue = totalHandValue + 11;
      aceCounter = aceCounter + 1;
    } else {
      totalHandValue = totalHandValue + currentCard.rank;
    }
    index = index + 1;
  }
  index = 0;
  while (index < aceCounter) {
    if (totalHandValue > 21) {
      totalHandValue = totalHandValue - 10;
    }
    index = index + 1;
  }
  return totalHandValue;
};

// display player and dealer's cards on screen
var displayPlayerAndDealerMinusOneHands = function (
  playerHandArray,
  dealerHandArray
) {
  var playerMessage = "<b>Player</b> Hand is <br>";
  var index = 0;
  while (index < playerHandArray.length) {
    playerMessage =
      playerMessage +
      "- " +
      playerHandArray[index].name +
      " of " +
      playerHandArray[index].suit +
      "<br>";
    index = index + 1;
  }
  index = 0;
  var dealerMinusOneMessage =
    "<b>Dealer's</b> Hand is (one card is hidden, take a guess!)<br>";
  var index = 1;
  while (index < dealerHandArray.length) {
    dealerMinusOneMessage =
      dealerMinusOneMessage +
      "- " +
      dealerHandArray[index].name +
      " of " +
      dealerHandArray[index].suit +
      "<br>";
    index = index + 1;
  }

  return playerMessage + "<br>" + dealerMinusOneMessage;
};

var displayPlayerAndDealerHands = function (playerHandArray, dealerHandArray) {
  var playerMessage = "<b>Player</b> Hand is <br>";
  var index = 0;
  while (index < playerHandArray.length) {
    playerMessage =
      playerMessage +
      "- " +
      playerHandArray[index].name +
      " of " +
      playerHandArray[index].suit +
      "<br>";
    index = index + 1;
  }
  index = 0;
  var dealerMessage = "<b>Dealer's</b> Full Hand is <br>";
  var index = 0;
  while (index < dealerHandArray.length) {
    dealerMessage =
      dealerMessage +
      "- " +
      dealerHandArray[index].name +
      " of " +
      dealerHandArray[index].suit +
      "<br>";
    index = index + 1;
  }

  return playerMessage + "<br>" + dealerMessage;
};

// display the total score (hand value) for the player and the dealer in the output
var displayHandTotalValues = function (playerHandValue, dealerHandValue) {
  var totalHandValueMessage = `<br> <b>Player</b> total hand value is ${playerHandValue} and <b>Dealer</b> total hand value is ${dealerHandValue}`;
  return totalHandValueMessage;
};

var main = function (input) {
  var myOutputValue = ""; //create an empty variable for the output value since it will be changed throughout the game

  // 1st step of the game -> generate cards for each player
  if (currentGameMode == GAMESTART) {
    gameDeck = createNewDeck();
    console.log(gameDeck);

    // generate 2 cards for the player and 2 for the dealer. To note that the gameDeck will reduce by the same amount
    playerHand.push(gameDeck.pop());
    playerHand.push(gameDeck.pop());
    dealerHand.push(gameDeck.pop());
    dealerHand.push(gameDeck.pop());

    console.log("Current player hand:");
    console.log(playerHand);
    console.log("Current dealerhand:");
    console.log(dealerHand);

    //update gamemode to cards drawn
    currentGameMode = GAMECARDSDRAWN;

    myOutputValue =
      "All players have been dealt a card.<br>Click on the <b>SUBMIT</b> button to calculate the cards. <br><br> Drum Roll 🥁🥁 !";

    return myOutputValue;
  }
  // 2nd step -> check if any of the players have black jack
  if (currentGameMode == GAMECARDSDRAWN) {
    var playerHasBlackjack = checkForBlackjack(playerHand);
    var dealerHasBlackjack = checkForBlackjack(dealerHand);

    console.log("Does player have Blackjack?", playerHasBlackjack);
    console.log("Does dealer have Blackjack?", dealerHasBlackjack);

    // define the output values in the different blackjack situations as well as no blackjack (else condition, move to 3rd step)
    if (playerHasBlackjack == true || dealerHasBlackjack == true) {
      if (playerHasBlackjack == true && dealerHasBlackjack == true) {
        myOutputValue =
          displayPlayerAndDealerHands(playerHand, dealerHand) +
          `Both player and dealer have Blackjack. It's a tie!`;
      } else if (playerHasBlackjack == true && dealerHasBlackjack == false) {
        myOutputValue =
          displayPlayerAndDealerHands(playerHand, dealerHand) +
          `Player has a Blackjack, Congratulations Player, you have won this round!`;
      } else {
        myOutputValue =
          displayPlayerAndDealerHands(playerHand, dealerHand) +
          `Dealer won with a Blackjack this time. Sorry Player, try again!`;
      }
      console.log(myOutputValue);
    } else {
      myOutputValue =
        displayPlayerAndDealerMinusOneHands(playerHand, dealerHand) +
        `<br>No Blackjack this time! Click hit or stand to continue 🤞🏼`;
      console.log(myOutputValue);
      currentGameMode = GAMEOPTION;

      return myOutputValue;
    }
  }
  //4th step, player selects whether to hit or stand
  if (currentGameMode == GAMEOPTION) {
    if (input == "hit") {
      playerHand.push(gameDeck.pop());
      myOutputValue = `${displayPlayerAndDealerMinusOneHands(
        playerHand,
        dealerHand
      )} <br> You drew another card. Would you like to continue to hit or stand?`;
    } else if (input == "stand") {
      var playerHandTotalValue = calculateTotalHandValue(playerHand);
      var dealerHandTotalValue = calculateTotalHandValue(dealerHand);
      //when the player inputs stand, the dealer will then have the option to hit or stand
      while (dealerHandTotalValue < 17) {
        dealerHand.push(gameDeck.pop());
        dealerHandTotalValue = calculateTotalHandValue(dealerHand);
      }

      console.log("Player's total hand value is", playerHandTotalValue);
      console.log("Dealer's total hand value is", dealerHandTotalValue);
      if (playerHandTotalValue == dealerHandTotalValue) {
        myOutputValue = `${displayPlayerAndDealerHands(
          playerHand,
          dealerHand
        )} <br> It is a tie!<br> ${displayHandTotalValues(
          playerHandTotalValue,
          dealerHandTotalValue
        )}`;
      } else if (playerHandTotalValue > dealerHandTotalValue) {
        myOutputValue = `${displayPlayerAndDealerHands(
          playerHand,
          dealerHand
        )} <br> <b>Player</b> wins this round!<br> ${displayHandTotalValues(
          playerHandTotalValue,
          dealerHandTotalValue
        )}<br><br>Refresh the page to start again!`;
      } else {
        myOutputValue = `${displayPlayerAndDealerHands(
          playerHand,
          dealerHand
        )} <br> <b>Dealer</b> wins this round!<br> ${displayHandTotalValues(
          playerHandTotalValue,
          dealerHandTotalValue
        )}<br><br>Refresh the page to start again!`;
        currentGameMode = GAMERESULTSSHOWN;
      }
    } else {
      myOutputValue =
        "Input error. Enter hit or stand to continue.<br><br>" +
        displayPlayerAndDealerMinusOneHands(playerHand, dealerHand);
    }
    return myOutputValue;
  }
};

//next step is to make the max value = 21, once the player / dealer's score exceed 21 they will lose.
