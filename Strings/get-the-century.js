/*Create a function that takes in a year and returns the correct century.

Examples
century(1756) ➞ "18th century"

century(1555) ➞ "16th century"

century(1000) ➞ "10th century"

century(1001) ➞ "11th century"

century(2005) ➞ "21st century"
Notes
All years will be between 1000 and 2010.
The 11th century is between 1001 and 1100.
The 18th century is between 1701-1800.*/

function century(year) {
let result;
switch (true) {
		case (year === 1000):
        result = "10th century";
        break;
    case (year > 1000 && year < 1101):
        result = "11th century";
        break;
    case (year > 1100 && year < 1201):
        result = "12th century";
        break;
    case (year > 1200 && year < 1301):
        result = "13th century";
        break;
		case (year > 1300 && year < 1401):
        result = "14th century";
        break;
		case (year > 1400 && year < 1501):
        result = "15th century";
        break;
		case (year > 1500 && year < 1601):
        result = "16th century";
        break;
		case (year > 1600 && year < 1701):
        result = "17th century";
        break;
		case (year > 1700 && year < 1801):
        result = "18th century";
        break;
		case (year > 1800 && year < 1901):
        result = "19th century";
        break;
		case (year > 1900 && year < 2001):
        result = "20th century";
        break;
		case (year > 2000 && year < 2101):
        result = "21st century";
}
 	return result;
}
