for (let i = 0; i <= 100; i++) {
  function fizzBuzz() {
    if (i % 2 == 0) {
      console.log("Fizz");
    }
    if (i % 5 == 0) {
      console.log("Buzz");
    }
    if (i % 5 == 0 && i % 2 == 0) {
      console.log("FizzBuzz");
    }
  }
}

let people = ["angela", "ben", "jenny", "mickael", "chloe"];

function whoisPaying() {
  let index = Math.floor(Math.random() * people.length);

  console.log(index);
  let randomPerson = people[index];
  return randomPerson + " is going to buy launch today";
}
console.log(whoisPaying());
