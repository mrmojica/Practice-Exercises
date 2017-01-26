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


//array problem set

//print reverse

let printReverse = (array) => {
	var reverse = [];
	for(i = 0; array.length; i++) {
		reverse.push(array.pop(i));
	}
	console.log(reverse);
}

// isUniform() true/false if same 

let isUniform = (array) => {
	for ( i = 1; array.length; i++) {
		if(array[0] !== array[i]) {
			return false;
		}
			
	}
	return true;
}

//sum array

let sumArray = (array) => {
	var total = 0;
    array.forEach(function(num) {
		total += num;
	})
	return total;
}

//findmax

let max = (array) => {
	var max = array[0];
	for ( i = 0; i <= array.length; i++) {
		if(max < array[i]) {
			max = array[i];
		}
	}
	return max;
}





