/*Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

Examples
matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
// The last item is the rest joined.

matchLastItem([1, 1, 1, "11"]) ➞ false
// The last item should be "111".

matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true
Notes
The array is always filled with items.*/

function matchLastItem(arr) {
	const first = arr.slice(0, -1).join("");
	const last = arr.slice(-1).toString();
	return first == last;
}
