function fectorial(number){
    let sum = 1;
    for(let i = number; i >= 1; i--){
        sum *= i;
    }
    return sum;
}
console.log(fectorial(7));
