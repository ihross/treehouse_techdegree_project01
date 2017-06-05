// Declared variables
var currentQuote;
var usedQuotes = [];
var randomColor;

// Returns 1 of the 7 objects in quotes.js
function getRandomQuote() {
	var randNum = Math.floor(Math.random() * quotes.length);
	return quotes[randNum];
}

// Prints out the quote
function printQuote() {
	var quote = getRandomQuote();
	var message = '';

message += '<p class="quote">' + quote.text + '</p>';
message += '<p class="source">' + quote.source + '<span class="citation">' + quote.citation + '</span>'
				+ '<span class="year">' + quote.year + '</span> </p>';

document.getElementById('quote-box').innerHTML = message;

}



/*
function getRandomQuote() {
	do {
		randomNumber = Math.floor(Math.random() * quotes.length);
		currentQuote = usedQuotes.indexOf(randomNumber);

		if (usedQuotes.length === quotes.length) {
			usedQuotes = [];
		}
	}
	while (currentQuote >= 0);

	usedQuotes.push(currentQuote);
	return quotes[randomNumber];
}

function printQuote() {
	var quoteObj = getRandomQuote();
}
*/

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
