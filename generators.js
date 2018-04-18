// ES6 introduces a new type of function, the generator function
// these functions do not have normal control flow of input and
// return. The 'yield' expression can be used to pause the function
// an emit an intermediate result. The function can be reentered
// where it left off with last yield expression.

var fibonacci = {
    [Symbol.iterator]: function*() {
      var pre = 0, cur = 1;
      for (;;) {
        var temp = pre;
        pre = cur;
        cur += temp;
        yield cur;
      }
    }
  }

for (var n of fibonacci) {
    if (n > 1000)
      break;
    console.log(n);
}

function* generator() {
    return (yield (yield 10) + 'world');
}

var gen = generator();
console.log(gen.next('hello').value);
console.log(gen.next(0).value);
console.log(gen.next().value);

// Generators can be composed with the use of the yield* expression
function *compose() {
    yield* generator();
  }
  
console.log(compose().next().value);