/*You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.

Examples
mostExpensiveItem({
  piano: 2000,
}) ➞ "piano"

mostExpensiveItem({
  tv: 30,
  skate: 20,
}) ➞ "tv"

mostExpensiveItem({
  tv: 30,
  skate: 20,
  stereo: 50,
}) ➞ "stereo"*/

function mostExpensiveItem(obj) {
	let maxLength = 0;
  for (const key in obj) {
    maxLength = Math.max(maxLength, obj[key]); // Loop to get the highest value
  }
  return Object.keys(obj).find(key => obj[key] === maxLength) // Returns the key whose value is the highest.
}
