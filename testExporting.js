var exporting = require('./exporting');

var seed = 100;

for(var i = 0; i < 10; i++) {
	var rand = Math.floor(Math.random() * seed);
	exporting.storeNum(rand);
}

var sorted = exporting.sortAscending();
console.log(sorted);