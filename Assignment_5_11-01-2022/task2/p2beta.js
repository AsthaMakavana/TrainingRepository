//Write a program to draw a pattern given below from 0-9 where n=5
let n = 5;
let string = "";

for (let i = -n+1; i <= n-1; i++) {
    if (i==0) {
        continue;
    }
    for (let j = -n+1; j <= n-1; j++) {
        if (j==0) {
            continue;
        }
        if(Math.abs(i)+Math.abs(j)<=n) {
            string += "@";
        }
        
        else {
            string += "-";
        }
    }

    
    string += "\n";
}

console.log(string);