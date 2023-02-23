// let bouteilleDeauMarque = "repere";
// let bouteilleDeauQuantite = 100;
// let bouteilleDeauOuverte = true;

// let bouteilleDeau = {
//   marque: "champomyl",
//   quantite: 100,
//   estOuverte: true,
//   ville: ["lilles", "paris", "strasbourg"],
// };
// console.log(bouteilleDeau.marque);
// console.log(bouteilleDeau.quantite);
// console.log(bouteilleDeau.estOuverte);
// bouteilleDeau["ville"][0] = "sevran";
// console.log(bouteilleDeau);
let userInput = prompt("choisissez un fruit a manger");
userInput.toLowerCase();
switch (userInput) {
  case "kiwi":
    console.log("les kiwwis sont verts et parfois jaunes");
    break;
  case "banane":
    console.log("les bananes autant que les kiwi sont verts et parfois jaunes");
    break;
  case "fraise":
    console.log(
      "les fraises sont des fruits rouges qui sont tres appetissants"
    );
    break;
  default:
    console.log("faites un choix please");
    break;
}
