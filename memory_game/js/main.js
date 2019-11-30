console.log("Up and running!");
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You've found a match!");
	} else {
		console.log("Sorry, Try again.")
	}
}

function flipCard(cardId) {
	console.log("User flipped a " + cards[cardId] + ".")
	cardsInPlay.push(cards[cardId])
	if (cardsInPlay.length === 2) {
		checkForMatch()
	}
}