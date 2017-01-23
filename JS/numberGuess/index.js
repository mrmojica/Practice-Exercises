let number = Math.round(Math.random() * 10) + 1;
let guess = prompt("Guess the correct number!");

console.log(number);

const newGame = () => {
	if(guess == number) {
		alert("Congrats! you got it right!");
		document.write("The correct number was " + guess)
	} else if ( guess > number ) {
		alert("you guessed to high!");
		guess = prompt("guess again!");
		newGame();
	} else if ( guess < number ) {
		alert("you guessed to low!");
		guess = prompt("guess again!");
		newGame();
	}
}

newGame();