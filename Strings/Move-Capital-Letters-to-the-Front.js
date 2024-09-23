/*Create a function that moves all capital letters to the front of a word.
Examples
capToFront("hApPy") ➞ "APhpy"
capToFront("moveMENT") ➞ "MENTmove"
capToFront("shOrtCAKE") ➞ "OCAKEshrt"*/

function capToFront(s) {
	const caps = s.split("").filter(x => x === x.toUpperCase()).join("");
	const lows = s.split("").filter(x => x === x.toLowerCase()).join("");
	return caps + lows;
}
