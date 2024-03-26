let a = 5;
let b = 7;
console.log(a,b);

// Using temp
const temp = a;
a = b;
b = temp;
console.log(a,b)
console.log()

// Using Destructing
let x = 6;
let y = 9;
console.log(x,y);
[x, y] = [y, x];
console.log(x,y);

// Using Destructing for Different Data Types
let c = 'a';
let d = 9;
console.log(c,d);
[c, d] = [d, c];
console.log(c,d);
