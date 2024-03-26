const today = new Date();
console.log(today)
const date = new Date('2002-1-03') 
// For string it will work from 0 to 11 for (1 to 12)
console.log(date.getDate());

// JS use indexing for calculating month. So if we input 0 for month we will get month no 1. 
console.log(date.getMonth());
