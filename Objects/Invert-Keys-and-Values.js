/*Write a function that inverts the keys and values of an object.

Examples
invert({ "z": "q", "w": "f" })
➞ { "q": "z", "f": "w" }

invert({ "a": 1, "b": 2, "c": 3 })
➞ { 1: "a", 2: "b", 3: "c" }

invert({ "zebra": "koala", "horse": "camel" })
➞ { "koala": "zebra", "camel": "horse" }*/

function invert(o) {
	const arr = Object.entries(o); // Convert the object to an array.
	const inverted = arr.map(([key, value]) => [value, key]); // Invert the values from the array with destructuring.
	return Object.fromEntries(inverted); // Convert the array back to an object.
}
