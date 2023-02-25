function wake() {
  console.log("stop and squeeze");
  console.log("stop and release");
}

function getMilk(money) {
  console.log("Leave House");
  console.log("Moove right");
  console.log("Moove right");
  console.log("Leave House");
  console.log("Moove right");
  wake();
  console.log("Moove right");
  console.log("Leave House");
  console.log("Moove right");
  console.log("Moove right");
  console.log("Buy milk for mother");

  var numberOfBottle = Math.floor(money / 1.5);
  console.log("buy " + numberOfBottle + " bottle of milk");

  return money % 1.5;
}

var change = getMilk(6);
console.log(change)
//function life in a week challenge

function lifeInWeek(age) {
  var yearRemaining = 90 - age;
  var dayRemaining = 365 * yearRemaining;
  var weekRemaining = 52 * yearRemaining;
  var monthRemaining = 12 * yearRemaining;
  console.log(
    "you have " +
      dayRemaining +
      " days remaining" +
      " ," +
      weekRemaining +
      " weeks remaining and " +
      monthRemaining +
      " months remaining to live before 90 years."
  );
}
lifeInWeek(12);

//bmiCalculator
const bmiCalculator = (weight,height)=>{
    return weight/(Math.pow(height,2));
}
//Math.floor method is used to round the result of the function.
console.log(Math.floor(bmiCalculator(80,1.76)))