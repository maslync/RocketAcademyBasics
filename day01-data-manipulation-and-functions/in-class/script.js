var fahrenheitToCelsiusMain = function (input) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var celsius = ((input - 32) * 5) / 9;
  var myOutputValue = celsius;
  return myOutputValue;
};

var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  var convertKmtoMile = input * 0.62;
  var amountOfFuelUsed = convertKmtoMile / 9;
  var totalCostofFuel = amountOfFuelUsed * 2.2;
  var myOutputValue = totalCostofFuel;
  return myOutputValue;
};

var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var convertKmtoMile = input * 0.62;
  var amountOfFuelUsed = convertKmtoMile / 9;
  var totalCostofFuelFerrari = amountOfFuelUsed * 2.2;
  var totalCostOfFuelTrain = amountOfFuelUsed * 2;
  var costSavings = totalCostofFuelFerrari - totalCostOfFuelTrain;
  var myOutputValue = costSavings;
  return myOutputValue;
};

//No. of ice cubes needed for the event
var detTotalNoOfIceCubesNeeded = function (input) {
  var totalNoOfIceCubesNeeded = input * 2 * 4;
  return totalNoOfIceCubesNeeded;
};
//Total weight of ice cubes in pounds
var convertGramstoPounds = function (totalNoOfIceCubesNeeded) {
  var weightInPounds =
    detTotalNoOfIceCubesNeeded(totalNoOfIceCubesNeeded) * 0.0022;
  return weightInPounds;
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  //How long does does the ice machine need to run
  var machineRunTime = convertGramstoPounds(input) / 5;
  var myOutputValue = `The machine will need to run for ${machineRunTime} hours to produce enough ice for ${input} guests`;
  return myOutputValue;
};

var calcTotalNoOfPintsDaily = function (NoOfCustomers) {
  var NoOfPintsDaily = NoOfCustomers * 2;
  return NoOfPintsDaily;
};

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  //No. of pints required daily

  // no. of half-barrel kegs required per day
  var NoOfHalfKegsDaily = calcTotalNoOfPintsDaily(input) / 124;
  //No. of half-barrel kegs required in a quarter
  var noOfDaysInAQuarter = 90;
  var noOfHalfKegsQuarter = NoOfHalfKegsDaily * noOfDaysInAQuarter;

  var myOutputValue = `${noOfHalfKegsQuarter.toFixed(
    2
  )} half-kegs required for an average of ${input} customers dailt`;
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
