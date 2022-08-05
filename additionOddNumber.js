function addOddNumber(num){
    let sum = 0;
    for(let i = 1; i<=num; i++){
        if(i%2!==0){
            sum += i;
        }
    }
    return sum;
}

console.log(addOddNumber(50));
function addEvenNumber(num){
    let sum = 0;
    for(let i = 1; i<=num; i++){
        if(i%2===0){
            sum += i;
        }
    }
    return sum;
}
console.log(addEvenNumber(50))