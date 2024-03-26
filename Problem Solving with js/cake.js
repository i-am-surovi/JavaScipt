// Can you find who will get the delicious cake?


const Disha = 56;
const Salman = 95;

if(Disha > Salman){
    console.log("DIsha will get the strawberry")
}
else {
    console.log("Salman will get the strawberry")
}

// using a function
function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else {
        return num2;
    }
}

const max = getMax(96, 79)
console.log('max of two is:', max)