var lucky11Main = function (number) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  var randomDiceNumber1 = diceNumber;
  var randomDiceNumber2 = diceNumber;
  if (
    number == randomDiceNumber1 ||
    number == randomDiceNumber2 ||
    randomDiceNumber1 + randomDiceNumber2 == 11
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  if (input == "chicken rice" || input == "nasi lemak") {
    return "Rice!";
  } else if (input == "hokkien mee" || input == "laksa") {
    return "Noodle!";
  } else {
    return "Others!";
  }
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
    //var randomInteger = Math.floor(Math.random() * 10);
    var fourDNumber1 = Math.floor(Math.random() * 10);
    var fourDNumber2 = Math.floor(Math.random() * 10);
    var fourDNumber3 = Math.floor(Math.random() * 10);
    var fourDNumber4 = Math.floor(Math.random() * 10);
    if (
      input == fourDNumber1 ||
      input == fourDNumber2 ||
      input == fourDNumber3 ||
      input == fourDNumber4
    ) {
      return `You have guessed ${input}, you win! The randomly-generated 4 digits are ${fourDNumber1}, ${fourDNumber2}, ${fourDNumber3}, ${fourDNumber4},`;
    } else {
      return `You have guessed ${input}, you lose! The randomly-generated 4 digits are ${fourDNumber1}, ${fourDNumber2}, ${fourDNumber3}, ${fourDNumber4},`;
    }
  
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  hawkerFoodRandomnessMain as the main function.
  var randomNo = Math.floor(Math.random() * 6);
  var dish;
  switch (randomNo) {
    case 0:
      dish = "chicken rice";
      break;
    case 1:
      dish = "roti prata";
      break;
    case 2:
      dish = "nasi lemak";
      break;
    case 3:
      dish = "hokkien mee";
      break;
    case 4:
      dish = "bak kut teh";
      break;
    case 5:
      dish = "laksa";
      break;
    default:
      break;
  }
  if (input === dish) {
    return `You have guessed Uncle's dish, you get a free meal!`;
  } else {
    return `Oh no!Please try again!`;
  }

};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var randomDecimal = Math.random() * 10000;
  var randomInteger = Math.floor(randomDecimal);
  var fourDNumber = randomInteger;
  if (Math.abs(input - fourDNumber) <= 1000) {
    return `You win! You have guessed ${input} and the winning number is ${fourDNumber}`;
  } else {
    return `You lose! You have guessed ${input} and the winning number is ${fourDNumber}`;
  }

};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};
