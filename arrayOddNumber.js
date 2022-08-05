function oddNumberFunction(number){
    const oddNumber  = [];
    for(let i = 0; i< number.length; i++){
        if(number[i] % 2 !== 0){
            oddNumber.push(number[i]);
        }
    }
    return oddNumber;
}
function addArrayNumber(arr){
    let result = 0;
    for(let i = 0; i<arr.length; i++){
        result += arr[i];
    }
    return result
}
const arr = [20,45,80,87,90,105,];
console.log(addArrayNumber(oddNumberFunction(arr)))
console.log(oddNumberFunction(arr));