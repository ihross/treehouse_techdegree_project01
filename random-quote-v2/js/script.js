// Declared variables
var currentQuote;
var usedQuotes = [];
var randomNumber;
var randomColor;




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

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);