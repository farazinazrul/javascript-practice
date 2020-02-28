var num = 2.45;
var downResult = Math.floor(num);
var upResult = Math.ceil(num);
var roundFigure = Math.round(num);
console.log(downResult);
console.log(upResult);
console.log(roundFigure);

var dice = Math.random() * 6;
var roundNum = Math.round(dice);
console.log(roundNum);

for(i = 0; i <=8; i++ ){
    var dice = Math.random() * 10;
    roundNum = Math.round(dice);
    console.log(roundNum);
}
