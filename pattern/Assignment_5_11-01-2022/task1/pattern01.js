//P1:- Write a program to draw a pattern given below from 0-9.  (max 2 loop allowed)

var n = 5;
var string = "";
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        if (i === j || (i + j === n - 1)) {
            string += "#";
        }
        else {
            string += "*";
        }

    }
    string += "\n"
}
console.log(string);
