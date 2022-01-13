//P2: Write a program to draw a pattern given below from 0-9 where n=5

let n = 5;
let string = "";

for (let i = -n; i <= n; i++) {
    if (i==0) {
        continue;
    }
    for (let j = -n; j <= n; j++) {
        if (j==0) {
            continue;
        }
        if((Math.abs(i)+Math.abs(j)<=n+1 && (Math.sign(i)+Math.sign(j))<=0)) {
            string += "@";
        }
        
        else {
            string += " ";
        }
    }

    
    string += "\n";
}

console.log(string);