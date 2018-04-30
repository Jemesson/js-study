/**
 * JavaScript already has several looping constructs
 * ES6 introduces a new type of loop the for-of loop.
 * This loop iterates over Iterable objects (e.g. Array,
 * Map, Set, arguments).
 */
let fibo = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1;
        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return { done: false, value: cur }
            }
        }
    }
}

for(var n of fibo) {
    if (n > 1000)
        break;
    console.log(n); 
}

[1, 2, 3].forEach(v => {
    console.log(v);    
});

for(var item of [1,2,3]) {
    console.log(item);
}