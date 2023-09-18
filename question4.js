/**Write a code to Remove the spaces found in a string
* */
const inputString = "This is a sample string with spaces.";
const stringWithoutSpaces = inputString.replace(/\s+/g, '');

console.log(stringWithoutSpaces); 