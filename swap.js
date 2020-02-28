var a = 5;
var b = 7;
console.log("Before Swap A=", a, "B=", b);

var tempSwap = a;
var a = b;
var b = tempSwap;
console.log("After Swap A=", a, "B=", b)

console.log("A+B=", a+b);

var x = 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y;
console.log(x, y);

var p = 5;
var q = 7;
[p, q] = [q, p]
console.log(p, q)