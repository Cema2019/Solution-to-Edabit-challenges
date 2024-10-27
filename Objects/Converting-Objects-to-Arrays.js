/*Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

Examples
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ []
Notes
Return an empty array if the object is empty.*/

// Option 1
function toArray(obj) {
	let arr = [];
	for (const item in obj) {
	    arr.push([item, obj[item]])
	}
	return arr;
}

// With .map()
const toArray = (obj) => Object.entries(obj).map(([key, value]) => [key, value]);
