function fectorial(number){
    let result = 1;
    for(let i = 1; i<=number; i++){
        result *= i;
    }
    return result;
}
const myNumber = 6;
console.log(fectorial(myNumber))

for(let i = 10; i >= 1; i--){
    console.log(i)
}
