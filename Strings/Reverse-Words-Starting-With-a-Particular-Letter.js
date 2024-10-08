/*Write a function that reverses all the words in a sentence that start with a particular letter.

Examples
specialReverse("word searches are super fun", "s")
➞ "word sehcraes are repus fun"

specialReverse("first man to walk on the moon", "m")
➞ "first nam to walk on the noom"

specialReverse("peter piper picked pickled peppers", "p")
➞ "retep repip dekcip delkcip sreppep"*/

function specialReverse(s, c) {
		return s.split(" ") // It converts the String to an array.
			.map(x => x.startsWith(c) ? x.split("").reverse().join("") : x) // It will only reverse words starting with that letter.
			.join(" "); // It converts the array back to a String.
}
