let tweet = prompt("what is you sentence ?");
let countTweet = tweet.length;
let character = tweet.slice(0, 1);
console.log(character);
let characterToUpperCase = character.toUpperCase();
console.log(characterToUpperCase);
let restOfTweet = tweet.slice(1, tweet.length);
console.log(restOfTweet);
let totalTweet = characterToUpperCase + restOfTweet;
console.log(totalTweet);

alert(
  "vous avez tweete " +
    countTweet +
    " mots " +
    "il vous reste " +
    (220 - countTweet) +
    " mots a tweeter"
);
//challenge 1
// let sentence = "broly is the best to answer the question";
// let partOfsentence = sentence.slice(0, 2);
// let myName = "henri";
// let firsCharacter = myName.slice(0, 1);
// let restOfName = myName.slice(1, myName.length);
// console.log(restOfName);
// alert("hello " + firsCharacter.toUpperCase() + restOfName);

//challenge 2
// let dogAge = 20;
// let humanAge = (dogAge - 2) * 4 + 21;
// console.log(humanAge);
