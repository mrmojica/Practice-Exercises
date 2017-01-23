var answer = prompt("are we there yet?");

while(answer !== "yes" && answer !== "yeah") {
	var answer = prompt("are we there yet?");
} 

alert("We finally made it!...");



// alternative - checks if yes is included in the response

// var answer = prompt("are we there yet?");

// while(answer.indexOf("yes") == -1) {
// 	var answer = prompt("are we there yet?");
// } 

// alert("We finally made it!...");
