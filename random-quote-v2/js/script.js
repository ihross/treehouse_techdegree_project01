// Declared variables
var currentQuote;
var usedQuotes = [];


// Returns 1 of the 7 objects in quotes.js
function getRandomQuote() {
	var randNum = Math.floor(Math.random() * quotes.length);
	return quotes[randNum];
}


// Randomizes the color of the background and button
function changeColor() {
	var color = 'rgb(';
	color += Math.floor(Math.random() * 256) + ',';
	color += Math.floor(Math.random() * 256) + ',';
	color += Math.floor(Math.random() * 256) + ')';
	document.body.style.backgroundColor = color;
	document.getElementById('loadQuote').style.backgroundColor = color;
}

// Prints out the quote
function printQuote() {
	var quote = getRandomQuote();
	var message = '';

	// Quote display
	message += '<p class="quote">' + quote.text + '</p>';
	message += '<p class="source">' + quote.source;

	// If citation property exists
	if (quote.citation !== 'N/A') {
		message += '<span class="citation">' + quote.citation + '</span>';
	}
	// If year property exists
	if (quote.year !== 'N/A') {
		message += '<span class="year">' + quote.year + '</span>';
	}
	message += '<span class="tags">' + quote.tags + '</span>'
	message += '</p>';

	document.getElementById('quote-box').innerHTML = message;
	changeColor();
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
