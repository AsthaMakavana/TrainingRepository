//P6: Write a program to draw a pattern given below from 0-9 where n=5

var n = 5;
var string = "";
for (i = 1; i <= n; i++) {

    for (j = 1; j <= n - i; j++) {
        string += " ";
    }
    for (k = 1; k <= i; k++) {
        string += k;
    }
    for (l = i - 1; l >= 1; l--) {
        string += l;
    }
    string += "\n"

}
console.log(string);
