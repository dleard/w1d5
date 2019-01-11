var assert = require("chai").assert;
var check = require("../check");

describe("check", function() {
	it("should return true if (digits 1:n-1 - digit n) % 10 === 0), else return false", function () {
		var falseNum = 11111111121;
		var trueNum = 12345678907;
		assert.isFalse(check.check(falseNum));
		assert.isTrue(check.check(trueNum));
	});
});

describe("doubleThenSumOther", function() {
	it("should double every 2nd number of an array starting at the right, then subtract 9 if > 9", function() {
		var numArray = [1,1,1,4,1,1,1,6,1,9,1];
		var result = check.doubleThenSumOther(numArray);
		var expected = [1,2,1,8,1,2,1,3,1,9,1]
		for (var i = 0; i < result.length; i++) 
			assert.equal(result[i], expected[i]);
	});
});	