console.log("Up and running!");
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You've found a match!");
	} else {
		console.log("Sorry, Try again.")
	}
}

function flipCard(cardId) {
	console.log("User flipped a " + cards[cardId].rank + ".")
	console.log(cards[cardId].suit)
	console.log(cards[cardId].cardImage)
	cardsInPlay.push(cards[cardId].rank)
	if (cardsInPlay.length === 2) {
		checkForMatch()
	}
}