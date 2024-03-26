// Who is the tallest from an array?

const heights = [65, 66, 68, 72, 78, 60]

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const max = getMax(heights);
console.log("The max number is",max)