// function lajoie(bottle) {
//   console.log("leave house");
//   console.log("moove right");
//   console.log("moove right");
//   console.log("moove up");
//   console.log("moove up");
//   console.log("Buy " + bottle  + " bottles of milk and bring it back to me");
//   console.log("moove up");
//   console.log("moove up");
//   console.log("moove down");
//   console.log("Get to the store");
// }
// lajoie(2);
// to get specific number of bottle of milk we can enter parameter in our instruction inside the block of code
function getMilk(money) {
  console.log("leave house");
  console.log("moove right");
  console.log("moove right");
  console.log("moove up");
  console.log("moove up");
  console.log("buy " + calculBottle(money, 1.5) + " bottles of milk");
  console.log("moove up");
  console.log("moove up");
  console.log("moove down");
  console.log("Get to the store");

  return calcChange(money, 1.5);
}

function calculBottle(startingMoney, costPerBottle) {
  let numberOfBottle = Math.round(startingMoney / costPerBottle);
  return numberOfBottle;
}
//this line return the remainder or change after buying milk that cos 1.5 $ per unit
function calcChange(startingMoney, costPerBottle) {
  var change = startingMoney % costPerBottle;
  return change;
}

console.log("Hello master, here is your " + getMilk(12) + " change");
