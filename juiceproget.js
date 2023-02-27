// function juice(fruit){
//     console.log('cut ' + fruit + ' in pieces');
//     console.log('put part in the blender');
//     console.log('mix correctly to get smooth likid');
// }
// juice('fraise');
function getShoes(money) {
  console.log("go out");
  console.log("turn left");
  console.log("walk 100m");
  console.log("turn right");
  console.log("go straight");
  console.log("enter shop");
  console.log(
    "i came in this shop with $" + money + " in my pocket to buy shoes"
  );

  console.log(
    "i can buy " +
      calcPrice(money, 15.9) +
      " of this type of shoe with my $" +
      money
  );
  console.log("go out");
  console.log("turn left");
  console.log("walk 100m");
  console.log("turn right");
  console.log("go straight");
  console.log("enter home");
  console.log("good morning sir your change is $" + change(money, 15.9));
}
getShoes(200);
function calcPrice(startMoney, costshoe) {
  let costShoe = Math.floor(startMoney / costshoe);
  return costShoe;
}

function change(startMoney, costShoe) {
  let change = Math.floor(startMoney % costShoe);
  return change;
}
