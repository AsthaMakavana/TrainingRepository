//P3: Write a program to draw a pattern given below from 0-9 where n=5

var n = 5;
var string = "";
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if(i-Math.abs(j)>=0) {
            string += i-Math.abs(j)+1;
        }
        else {
            string += " ";
        }
    
    }
    string += "\n"
}
console.log(string);
