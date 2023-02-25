function wake(){
    console.log('stop and squeeze');
    console.log('stop and release');
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

  var numberOfBottle = Math.floor(money/1.5);
  console.log("buy "+ numberOfBottle + " bottle of milk")
} 

getMilk(2);
