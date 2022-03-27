//compute area of a triangle

var computeAreaOfTriangle = function (base, height) {
  //take the inputs and compute the area of triangle
  var area = (base * height) / 2;
  // output the area
  return area;
};

//job application

var generatePushyJobApplication = function (
  jobTitle,
  companyName,
  desiredAnnualSalary
) {
  var message = `To whom it may concern, I want a job right now. Please hire me for the position of ${jobTitle} at ${companyName}. I want to be paid ${desiredAnnualSalary}. This comes out to ${
    desiredAnnualSalary / 12
  } a month.`;
  return message;
};

var orangeJuiceMain = function (numGuests) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var orangesPerGlass = 4;
  var glassesPerGuest = 2;
  var numGlasses = numGuest * glassesPerGuest;
  var numOranges = numGlasses * orangesPerGlass;
  var myOutputValue = `${numOranges} oranges are needed`;
  return myOutputValue;
};

var orangeJuiceAdvanced = function (numGuests, glassesPerGuest) {
  var orangesPerGlass = 4;
  var numOfGlasses = numGuests * glassesPerGuest;
  var numOranges = numOfGlasses * orangesPerGlass;
  var myOutputValue = numOranges;
  return myOutputValue;
};

var getRandomInteger = function (max) {
  // Generate a decimal from 0 through max + 1
  // This decimal will be inclusive of 0 and exclusive of max + 1
  var randomDecimal = Math.random() * (max + 1);

  // Remove the decimal with floor operation.
  // The resulting integer will be from 0 through max, inclusive of 0 and max
  var resultInteger = Math.floor(randomDecimal);

  return resultInteger;
};

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var paintMain = function (input) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var totalPaintArea = 6 * 3 * 3;
  var totalPaintAmount = totalPaintArea * 2;
  var litresOfPaint = totalPaintAmount / 300;
  var totalCostOfPaint = input * litresOfPaint;

  var myOutputValue = `It will cost $ ${totalCostOfPaint} in total`;
  return myOutputValue;
};

var paintMainAdvanced = function (pricePerLitre, numRooms, numCoatsPerArea) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.

  var areaPerRoom = 3 * 3;
  var areaToPaint = areaPerRoom * numRooms * numCoatsPerArea;

  var areaPerLitre = 300;
  var litreUsed = areaToPaint / areaPerLitre;
  var cost = litreUsed * pricePerLitre;

  var myOutputValue = `Paint cost: $${cost}`;
  return myOutputValue;
};

var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  // Generate a random dice number
  var randomDiceNumber = rollDice();
  // Personalise the output
  var myOutputValue = "You just rolled a " + randomDiceNumber + "!";
  // Return and print output.
  return myOutputValue;
};

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  // Set a default value for myOutputValue
  var myOutputValue = "hello world";
  // If input is our secret phrase, change the value of myOutputValue
  if (input == "palatable papaya") {
    myOutputValue = "you wrote the secret phrase!";
  } else {
    myOutputValue = "the door shall not open!";
  }
  // return myOutputValue as output
  return myOutputValue;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  var randomDiceNumber = rollDice();
  // Personalise the output
  var myOutputValue = "You just rolled a " + randomDiceNumber + "!";
  if (input == randomDiceNumber) {
    myOutputValue = myOutputValue + " You win!";
  }
  // Return and print output.
  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
