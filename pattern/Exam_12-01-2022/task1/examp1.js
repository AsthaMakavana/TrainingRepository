//Write a program to draw a pattern given below from 0-9.  (max 2 loop allowed)
 
var n = 5;
var string = "";
 
for (let i = 0; i < 1; i++) {
   for (let j = -n; j <= 0; j++) {
       if (i == 0 && j == 0) {
           string += "o\n";
       }
       else {
           string += " ";
       }  
   }
}
 
for (let l = 0; l < n-1; l++) {
    for (let i = 0; i < n; i++) {
        for (let j = -n; j <= n; j++) {
            if (i+j == -1) {
                string += "/";
            }
            else if (j-i == 1) {
                string += "\\";
            }
            else if ((Math.abs(i)-Math.abs(j)) < n && (Math.abs(i)-Math.abs(j)) >= 0) {
                string += "-";
            }
            else {
                string += " ";
            }  
        }
        string += "\n";
    }
}
 
for (let i = 0; i < n; i++) {
    for (let j = -n; j <= n; j++) {
       
        if (j == 0) {
            string += "=";
        }
        else if (Math.abs(j)==2) {
            string += "|";
        }
        else {
            string += " ";
        }  
    }
    string += "\n";
}
 
for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 2*n +1; j++) {
            string += "=";
    }
}
console.log(string);