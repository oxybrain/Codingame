/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
var tMinPos = 5527;
var tMinNeg = -274;
var tFinal = 0;
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    if (t > 0){
       if ((tMinPos - t) > 0) {
        tMinPos = t;
       }
    }
    if (t<0){
        if ((tMinNeg - t) < 0) {
         tMinNeg = t;
        }
    }
    if ((tMinNeg + tMinPos) < 0 ) {
        tFinal = tMinPos;
    } else if ((tMinNeg + tMinPos) > 0 && tMinNeg != -274) {
        tFinal = tMinNeg;
    } else {
        tFinal = tMinPos;
    }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
console.log(tFinal);