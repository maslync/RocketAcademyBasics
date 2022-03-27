var computeAreaOfCircle = function () {
  var pi = 3.14;
  var radius = 10;
  var area = pi * radius * radius;

  return area;
};

var main = function (input) {
  console.log("i also love coffee");

  var area = computeAreaOfCircle();

  var myOutputValue =
    "i love chocolate. <br/>The area is " + area + "<br/> you input " + input;

  var additionalLog = "i like " + input + " too!";
  console.log(additionalLog);
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue =
    "Hello " +
    input +
    ", you look great today! " +
    input +
    " what are your plans for today?";
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var distanceInMiles = input * 0.62;
  var myOutputValue = `Hi! ${input} is equal to ${distanceInMiles} miles.`;
  return myOutputValue;
};

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = convertKmToMiles(input);
  return myOutputValue;
};

var convertMinsToHrs = function (mins) {
  return mins / 60;
};

var calcTrainTwoSpeed = function (delayInMins) {
  // save the fixed values to variables
  var trainSpeed = 200;
  var time = 2;
  var distanceToTokyo = trainSpeed * time;

  var remainingTimeForTravel = time - convertMinsToHrs(delayInMins);

  var trainTwoNewSpeed = distanceToTokyo / remainingTimeForTravel;

  // return the new speed; toFixed() limits the anwser to a specific deciaml place
  return trainTwoNewSpeed.toFixed(2);
};

var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.

  var trainTwoNewSpeed = calcTrainTwoSpeed(input);

  var myOutputValue = `Given a ${input} min delay, train 2 need to travel at a speed of ${trainTwoNewSpeed} km/h to arrive at the same time as train 1`;
  return myOutputValue;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  var minPerHour = 60;
  var numHours = 1 + input / minPerHour;
  var numMins = input % minPerHour;

  // angle of hour hand (from 12)
  var numberOfHours = 12;
  var oneRoundAngle = 360;
  var anglePerHour = oneRoundAngle / numberOfHours;
  var hourAngle = anglePerHour * numHours;

  // angle of minute hand (from 12)
  var minutesPerHour = 60;
  var anglePerMinute = oneRoundAngle / minutesPerHour;
  var minuteAngle = anglePerMinute * numMins;

  var angleHourAndMin = Math.abs(hourAngle - minuteAngle);
  return angleHourAndMin;
};
