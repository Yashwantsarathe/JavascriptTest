/*Calculate the sum of numbers within an array
*/
const numbers = [1, 2, 3, 4, 5];

const calculateSum = (arr) => {
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

return sum;
};

const result = calculateSum(numbers);
console.log(result);
