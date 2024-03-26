// Who is the shortest from an array?

const heights = [65, 66, 68, 72, 78, 60]

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const min = getMin(heights);
console.log("The max number is",min)