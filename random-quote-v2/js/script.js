// Global variables
var timeoutID;				// Timer for the page to update
var tempArray = [];		// Array to avoid repetition

// Returns 1 of the 7 objects in quotes.js without repeating
function getRandomQuote() {
	var randNum = Math.floor(Math.random() * quotes.length);
	var randQuote = quotes[randNum];

	// Puts the quote objects in a temporary array to avoid repetition
	tempArray.push(quotes[randNum]);
	quotes.splice(randNum, 1);

	// After emptying array the count starts over
	if (quotes.length === 0) {
		quotes = tempArray;		// Original quotes array is refilled
		tempArray = [];				// Temporary array goes back to empty
	}
	return randQuote;
}

// Randomizes the color of the background and the button
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
	var quote = getRandomQuote();	// Assigns random quote object
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

// Runs the printQuote() function every 30 seconds
var timeoutID = window.setTimeout(printQuote, 30000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
