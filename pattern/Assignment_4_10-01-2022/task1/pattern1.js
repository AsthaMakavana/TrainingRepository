//P1: Write a program to draw a pattern given below from 0-100 where n=5

var n = 5;
var string = "";
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        string += "*";
    }
    string += "\n"
}
console.log(string);
