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
var GAMEOPTION = "hit or stand";
var currentGameMode = GAMESTART;

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
  var suits = ["hearts", "diamonds", "clubs", "spades"];

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
        cardName = "jack";
      } else if (cardName == 12) {
        cardName = "queen";
      } else if (cardName == 13) {
        cardName = "king";
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

var main = function (input) {
  var myOutputValue = ""; //create an empty variable for the output value since it will be changed throughout the game
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
      "All players have been dealt a card.<br>Click on the button to calculate the cards. <br><br> Good luck!";

    return myOutputValue;
  }
};
