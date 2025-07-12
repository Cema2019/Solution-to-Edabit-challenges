/*Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.

Examples
isAnagram("cristian", "Cristina") ➞ true

isAnagram("Dave Barry", "Ray Adverb") ➞ true

isAnagram("Nope", "Note") ➞ false
Notes
Should be case insensitive.
The two given strings can be of different lengths.*/

function isAnagram(s1, s2) {
	if (s1.length !== s2.length) return false;
	
	const word1 = s1.toLowerCase();
	const word2 = s2.toLowerCase();
	return [...word2].every(el => [...word1].includes(el));
}
