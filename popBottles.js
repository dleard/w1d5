var bottles = {
	numBottles: 0,
	numCaps: 0,
	emptyBottles: 0,
	bought: 0,
	capRedeemed: 0,
	emptyRedeemed: 0
}

function calculateBottles() {
	var dollars = process.argv[2];
	buyBottles(dollars);
	drinkBottles();
	console.log('TOTAL BOTTLES: ' + (bottles.bought + bottles.capRedeemed + bottles.emptyRedeemed));
	console.log('REMAINING BOTTLES: ' + bottles.emptyBottles);
	console.log('REMAINING CAPS: ' + bottles.numCaps);
	console.log('TOTAL EARNED: ');
	console.log('   Bottles: ' + bottles.emptyRedeemed);
	console.log('   CAPS: ' + bottles.capRedeemed);
}

function buyBottles(dollars) {
	bottles.dollars = dollars % 2;
	bottles.numBottles += Math.floor(dollars/2);
	bottles.bought = bottles.numBottles;
	drinkBottles();
}

function drinkBottles() {
	while (bottles.numBottles > 0) {
		bottles.numBottles --;
		bottles.numCaps++;
		bottles.emptyBottles++;
	}
	while (bottles.numCaps >= 4 || bottles.emptyBottles >= 2) {
		redeemBottles()
	}
}

function redeemBottles() {
	if (bottles.numCaps >= 4) {
		bottles.numBottles += Math.floor(bottles.numCaps / 4);
		bottles.capRedeemed += Math.floor(bottles.numCaps / 4);
		bottles.numCaps = bottles.numCaps % 4;
		console.log('caps: ' + bottles.numCaps);
	}
	if (bottles.emptyBottles >= 2) {
		bottles.numBottles += Math.floor(bottles.emptyBottles / 2);
		bottles.emptyRedeemed += Math.floor(bottles.emptyBottles / 2);
		bottles.emptyBottles = bottles.emptyBottles % 2;
		console.log('empty: ' + bottles.emptyBottles);
	}
	console.log('redeemed: ' + (bottles.capRedeemed + bottles.emptyRedeemed));
	console.log();
	if (bottles.numBottles > 0) drinkBottles();
}

calculateBottles();	
