/**
 * Function args 
 */

function f(x, y = 12) {
    return x + y;    
}

function g(x, ...y) {
    return x * y.length;
}

function h(x, y, z) {
    return x + y + z;
}

console.log(f(3));
console.log(g(3, 'hello', true));
console.log(h(...[1,2,3],4,5,6) );
console.log( Math.max( ..."1234" ) );
