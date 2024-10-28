/*You prepare a list to send to the insurance company. As you finish, you notice you misformatted it. Given an object with at least one key/value pair, convert all the values to numbers.

Examples
convertToNumber({ piano: "200" }) ➞ { piano: 200 }

convertToNumber({ piano: "200", tv: "300" }) ➞ { piano: 200, tv: 300 }

convertToNumber({ piano: "200", tv: "300", stereo: "400" }) ➞ { piano: 200, tv: 300, stereo: 400 }*/

function convertToNumber(obj) {
	for (const item in obj) {
	    obj[item] = Number(obj[item])
	}
	return obj;
}
