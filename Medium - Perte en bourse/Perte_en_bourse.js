/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());
var inputs = readline().split(' ');
console.error(n);
console.error(inputs);
var pCurr = 0;
var vCurr = 0;
var pMax = 0;
for (let i = 0; i < n; i++) {
    const v = parseInt(inputs[i]);

    if (v>vCurr){
        vCurr = v;
    } else {
        pCurr = v - vCurr;
        if (pCurr < pMax) {
            pMax = pCurr;
        } 
    }

}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
//console.log(n);
//console.log(inputs);
console.log(pMax);
