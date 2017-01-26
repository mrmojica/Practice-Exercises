//isEven

// function isEven(number) {
// 	if(number % 2 === 0 ) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

//ES6
let isEven = (num) => { return num % 2 === 0 };


//factorial
// factorial(4)  4 X 3 X 2 X 1 
let factorial = (num) => {
	var result = 1;
	for ( i = 1 ; i <= num; i++) {
		result = result * i;
	}
	return result;
}

//kebobToSnake (replaceing - with _ )

let kebabToSnake = (str) => {
	var newStr = str.replace(/-/g, "_");
	return newStr;
}

//higher order functions



