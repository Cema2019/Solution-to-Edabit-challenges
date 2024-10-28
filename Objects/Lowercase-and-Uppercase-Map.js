/*Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

Examples
mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }*/


function mapping(letters) {
	return letters.reduce((acc, val) => ({ ...acc, [val]: val.toUpperCase()}), {})
}



/* Code explanation
Here’s how it works step-by-step:
Reduce Initialization: The reduce method initializes the accumulator (acc) as an empty object {}.
Iteration: It iterates over each value (val) in the letters array.
Accumulator Update: For each iteration, it creates a new object using the spread operator ...acc to include all key-value pairs from the current acc object and adds a new key-value pair where the key is val and the value is val.toUpperCase(). Essentially, it's building up the object with each iteration.
Final Object: After iterating over all elements in the array, reduce returns the final object.*/
