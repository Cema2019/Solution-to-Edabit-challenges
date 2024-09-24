/*An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

Examples
isIsogram("Algorism") ➞ true

isIsogram("PasSword") ➞ false
// Not case sensitive.

isIsogram("Consecutive") ➞ false*/

function isIsogram(str) {
	return [...new Set(str.toLowerCase())].join('').length === str.length;
  // It creates a set that removes any duplicate characters and will compare its length with the length of the original String.
}
