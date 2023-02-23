let question = [
  `quel est l\'age du capitaine' 
    1.42
    2.101
    3.18`,
  `la diffence entre pifeon
    1.Gluh
    2.Piou
    3.Uh`,
  `Qu'est ce qui est jaune et qui attend?
    1.Jonathan
    2.Homer simpson
    3.Un citron presse
    `,
  `Qui est le meilleur joueur du paris saint germain?
    1.M'bappe
    2.Lionnel Messi
    3.camavingha
    `,
];
let nbquestion = question.length;
let compteurBonnesReponse = 0;
let reponses = [1, 3, 2, 1];
alert(
  `welcome to this game, to win, you need to answer ` +
    nbquestion +
    "  questions"
);
function compterjuqua(nb) {
  for (let i = 0; i < nb; i++) {
    console.log(i);
  }
}
compterjuqua(10);
console.log("feu");
for (let i = 0; i < question.length; i++) {
  let reponseUtilisateur = prompt(question[i]);
  if (reponseUtilisateur == reponses[i]) {
    console.log("waou t'as gagné");
    compteurBonnesReponse = compteurBonnesReponse + 1;
  } else {
    console.log("bruh tes nul");
  }
}
alert(
  "you have " +
    compteurBonnesReponse +
    " reponses correctes sur " +
    nbquestion +
    " questions"
);
