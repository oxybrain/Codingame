/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = readline();
var messageBin = MESSAGE.charCodeAt().toString(2);
var outPut ="";
var actualChar = "";
var previousChar = "";
var count = 0;

for (i=0; i<MESSAGE.length; i++){
    var charBin = MESSAGE[i].charCodeAt().toString(2).padStart(7,0);
   
    for (j=0; j<charBin.length; j++){
        count ++;
        actualChar = charBin[j];
        if (count == 1 && charBin[0] == 1){
            outPut += "0 0";
        } else if (count == 1 && charBin[0] == 0) {
            outPut += "00 0";
        } else {
            if (charBin[j] == 1) {
                actualChar == previousChar ? outPut += "0" : outPut += " 0 0";
            } else {
                actualChar == previousChar ? outPut += "0" : outPut += " 00 0";
            }
        }
        previousChar = charBin[j];
    }   
}
console.log(outPut);
