var main = function (input) {
  console.log("i also love coffee");

  var pi = 3.14;
  var radius = input;
  var area = pi * radius * radius;

  var myOutputValue =
    "i love chocolate. <br/>The area is " + area + "<br/> you input " + input;

  var additionalLog = "i like " + input + " too!";
  console.log(additionalLog);
  return myOutputValue;
};
