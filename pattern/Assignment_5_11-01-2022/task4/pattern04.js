//P4:- Write a program to draw a pattern given below from 0-9.  (max 2 loop allowed) [Don't Reveal this one pre handed]

let n = 5;
let string = "";

for (let i = -n-1; i <= n+1; i++) {
    for (let j = -n-1; j <= n+1; j++) {
        if (Math.abs(i) == n+1 || Math.abs(j) == 6) {
            string += "0";
        }
        else if (Math.abs(i) - Math.abs(j) >= 0) {
           
            if ((i < 0 && j > 0) || (i > 0 && j < 0)) {
                string += Math.abs(i) - Math.abs(j) + 1;
            }
            else {
                string += String.fromCharCode(Math.abs(i) - Math.abs(j) + 97);
            }
        }
        else {
            string += " ";
        }
    }
    string += "\n";
}
console.log(string);
