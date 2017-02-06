function average(arr) {
	var total = 0;
	var scoreList = arr.length;
	for(var i = 0; i < scoreList; i++) {
		total += arr[i];
	}
	
	console.log(Math.round(total / scoreList));
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);