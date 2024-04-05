function getMultiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "Please provide a valid number"
    };
    const multiply = num1 * num2;
    return multiply
}

const result = getMultiply(5,'seven');
console.log(result)

// In JavaScript Array is considered as an Object. So, for checking validation of an array write "Array.isArray(parameter)" Function.

function getSecond(numbers){
    if(Array.isArray(numbers) === false){
        return "Please provide a valid array"
    }
    const second = numbers[1];
    return second
}
const second = getSecond(45)
console.log(second)