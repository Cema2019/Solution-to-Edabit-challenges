/*Create a function that takes a word and returns true if the word has two consecutive identical letters.

Examples
doubleLetters("loop") ➞ true

doubleLetters("yummy") ➞ true

doubleLetters("orange") ➞ false

doubleLetters("munchkin") ➞ false*/

function doubleLetters(word) {
	return [...word].some((char, i, arr) => char === arr[i + 1])
}
