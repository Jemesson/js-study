/**
 * Arrow functions.
 */

var evens = [2, 4, 6, 8, 10],
fives = [];

var odds = evens.map(e => e + 1);
let nums = odds.map((v, i) => v + i); // sum with index

console.log(odds);
console.log(nums);

const divisibleNumber = 6;

// Statement bodies
// nums.forEach(num => {
//     if (num % divisibleNumber === 0) {
//         numbers.push(num)
//     }
// });

oddNumbers = nums.filter(num => num % divisibleNumber === 0).map(num => num + 1);
console.log(oddNumbers);

// This is bound to its lexical enclosing scope's this
function thisBinding() {
    return () => console.log(this.name);
}
thisBinding.call({name: 'jemesson'})()

// The same goes for arguments
function args() {
    return () => console.log(arguments)
}

args('arg1', 'arg2')();