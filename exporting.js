/*1 Create a module that exports a function that takes a number as a parameter and stores it in a list. 
The list should not be accessible from outside the module.

2 Export another function that returns a version of the data list that is sorted in ascending order. 
The function you use to sort the data correctly should not be accessible from outside the module. 
(Think back to the Custom Sorting Exercise when handling sorting)

3 Implement a Node.js script that imports the functionality of your module, adds at least 5 different data 
points to the module's data list, and outputs the sorted list. */


var numList = [];

function sortList(list) {
	return list.sort(function(a,b){return a-b});
}

module.exports = {
	
	storeNum: function(num) {
		numList.push(num);
	},

	sortAscending: function(list) {
		return sortList(numList);
	}
}