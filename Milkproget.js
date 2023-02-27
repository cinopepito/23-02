function getMilk(money) {
  console.log("go out");
  console.log("turn left");
  console.log("pass the front gate");
  console.log("turn right");
  console.log("take the street");
  console.log("change road side");
  console.log("enter store");
  console.log("buy milk and come back home safely");
  console.log(
    "when you were going i gave you $ " + money + " to buy me some milk."
  );
  console.log("go out");
  console.log('with $' + money + ' you can buy ' + calcBottle(money,1.5)+' bottles of milk at the mall');
 
  console.log("turn left");
  console.log("pass the front gate");
  console.log("turn right");
  
  console.log("hello sir" + ' you gave me $' + money + 'and your change after buying is $' + change(money,1.5) )

}
getMilk(10);

function calcBottle(startMoney, costPerBottle) {
  let calcBottle = startMoney/costPerBottle;
  return Math.floor(calcBottle);
}

function change(startMoney, costPerBottle) {
  let change = startMoney % costPerBottle;
  return change;
}
//with the manipulation of the parameter we put inside the function, we can interact with the user easily.

//now let's change this parameter and use money at bottle place
