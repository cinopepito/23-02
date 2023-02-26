function getMilk(money) {
  console.log("going out");
  console.log("turn left");
  console.log("pass through the gate");
  console.log("turn right");
  console.log("walk 100m");
  console.log("buy " + calcBottle(money, 1.5) + " bottles of milk");
  console.log("collect the best");
  console.log("going out");
  console.log("turn left");
  console.log("pass through the gate");
  console.log("turn right");
  console.log("walk 100m");
  console.log("enter home");
  console.log(
    "hello sir here is your $" + change(money, 1.5) + " change remaining"
  );
}
getMilk(20);

function calcBottle(startingMoney, costBottle) {
  var numberBottle = Math.floor(startingMoney / costBottle);
  return numberBottle;
}
function change(startingMoney, costBottle) {
  let change = startingMoney % costBottle;
  return change;
}
