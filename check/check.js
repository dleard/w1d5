

function check(num) {
	var sNum = num.toString();
	numArray = sNum.split('');
	for (var i = 0; i < numArray.length; i++) {
		numArray[i] = Number(numArray[i]);
	}
	var doubleSum = doubleThenSumOther(numArray);
	
	var sum = 0;
	for (var i = 0; i < doubleSum.length-1; i++) {
		sum += doubleSum[i];
	}

	if ((sum - doubleSum[doubleSum.length - 1]) % 10 === 0) return true;
	return false;
}

function doubleThenSumOther(numArray) {
	for (var i = numArray.length - 2; i >=0; i = i-2) {
		numArray[i] = numArray[i] * 2;
		if (numArray[i] > 9) numArray[i] = numArray[i] - 9;
	}
	return numArray;
}



module.exports = {
	check,
	doubleThenSumOther
}	
	