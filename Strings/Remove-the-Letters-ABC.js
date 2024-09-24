/*Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

Examples
removeABC("This might be a bit hard") ➞ "This might e  it hrd"

removeABC("hello world!") ➞ null

removeABC("") ➞ null
Notes
If the given string does not contain "a", "b", or "c", return null.*/

function removeABC(str) {
	// If none of the words contains 'a', 'b' or 'c' return null.
	if (!/[abc]/.test(str)) return null;
	
	// Otherwise, remove the characters.
	return str.split(" ")
			.map(x => x.replace(/[abc]/g, '')) 
			.join(" "); 
}
