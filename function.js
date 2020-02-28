function nameOfFunction(){
    console.log("Test Function")
    console.log("Next function")
}
nameOfFunction();

function doubleIt(num){
    var moot = num*2;
    console.log(moot);
}
doubleIt(100);

function tripleIt(num){
    var moot = num*3;
    return moot;
}
var ek = tripleIt(100);
var dui = tripleIt(150);
var shorbomoot = ek+dui;
console.log(shorbomoot, "Taka");

function add (num1, num2, num3){
    var result = num1+num2+num3;
    return result;
}
var sum = add(10, 20, 30);
console.log(sum);