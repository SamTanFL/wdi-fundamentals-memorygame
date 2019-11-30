console.log("Up and running!");
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne;
cardOne = cards[3];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay[0]);
let cardTwo;
cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You've found a match!");
	} else {
		alert("Sorry, Try again.");
	}
}