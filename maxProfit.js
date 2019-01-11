function maxProfit(stocks) {
	var arrLen = stocks.length;
	var maxProfit = stocks[1] - stocks[0];
	var smallestNum = stocks[0];
	
	console.log(stocks);
	for (var i = 1; i < arrLen; i++) {
		console.log('smallest: ' + smallestNum + ' next index: ' + stocks[i]);
		if (stocks[i] - smallestNum > maxProfit) {
			maxProfit = stocks[i] - smallestNum;
		}
		if (stocks[i] < smallestNum) {
			smallestNum = stocks[i];
		}
		console.log('Max Profit: ' + maxProfit);
	}
	return maxProfit;
};


console.log('MAX PROFIT: ' + maxProfit([45, 24, 35, 31, 40, 38, 11]));