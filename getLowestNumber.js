function getLowestNumber(numbers){
    let lowestNumber = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(lowestNumber > numbers[i]){
            lowestNumber = numbers[i];
        }
    }
    return lowestNumber;
}

const height = [150,190,250,140,160,130,245,222];

console.log(getLowestNumber(height))
console.log(Math.max(20,30,10,15))