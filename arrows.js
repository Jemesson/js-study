/**
 * Arrow functions.
 */

var evens = [2, 4, 6, 8, 10],
fives = [];

var odds = evens.map(e => e + 1);
var nums = odds.map((v, i) => v + i); // sum with index

console.log(odds);
console.log(nums);

// Statement bodies
nums.forEach(v => {
    if (v % 5 === 0) {
        fives.push(v)
    }
});
console.log(fives);

// This is bound to its lexical enclosing scope's this
function thisBinding() {
    return () => console.log(this.string);
}
thisBinding.call({string: 'testing'})()

// The same goes for arguments
function args() {
    return () => console.log(arguments)
}

args('arg1', 'arg2')();