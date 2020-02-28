var friendAge = [20, 26, 17, 27, 36, 37, 19];
//*console.log(friendAge[1])*//
var thirdsAge = friendAge[4]
console.log(thirdsAge)
friendAge[4] = 33;
console.log(friendAge.length);
var position = friendAge.indexOf(26);
console.log(position)
friendAge.push(88, 99, 77);
console.log(friendAge);
friendAge.pop();
console.log(friendAge)
friendAge.unshift(55);
console.log(friendAge);
friendAge.shift();
console.log(friendAge.length)