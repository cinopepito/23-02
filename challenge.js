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

// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
// let notFound = true;
// while (notFound && someArray.length > 0) {
//   if (someArray[0] === "Louiza") {
//     console.log("Found her!");
//     notFound = false;
//   } else {
//     someArray.shift();
//   }
// }

// let maxGuess = 5;
// let randomNum = Math.floor(Math.random() * 5) + 1;
// console.log(randomNum);
// let guess = Number(prompt("Enter number between 1 and 5"));
// if (guess < randomNum) {
//   alert("higher");
// } else if (guess > randomNum) {
//   alert("lower");
// } else {
//   alert("yes good guess");
// }

let count = 100;
while (count > 1) {
  console.log("number " + count);
  count--;
}
let arr = [];
for(let i=110;i>1;i--){
    arr.push(i)
}
console.log(arr)