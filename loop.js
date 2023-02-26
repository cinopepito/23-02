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

let list = ["milk", "bread", "apple"];
list.splice(1, 1, "Bananas", "Eggs");
list.pop();
list.sort();
list.splice(1, 0, "carrot", "lettuce");
console.log(list.lastIndexOf("milk"));
console.log(list);
let newlist = ["juice", "pop"];
let arr = list.concat(newlist);
console.log(arr);
let lastIndex = arr.lastIndexOf("pop");
console.log(lastIndex);

let mylist = [1, 2, 3];
let mylist2 = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
console.log(mylist2[0][1]);

const theList = [
  "Laurence",
  "Svekis",
  true,
  35,
  null,
  undefined,
  { test: "one", score: 55 },
  ["one", "two"],
];
theList.shift();
theList.pop();
theList.unshift("FIRST");
theList[4] = "hello world";
theList[3] = "MIDDLE";
theList.push("LAST");
console.log(theList);

let inventory = [
  (item = {
    name: "brose",
    model: "long",
    quantity: 10,
  }),
  (item2 = {
    name: "couteau",
    model: "large",
    quantity: 100,
  }),
  (item3 = {
    name: "tirebouchon",
    model: "plate",
    quantity: 200,
  }),
];
inventory[1].name = "barre de fer";
console.log(inventory);


