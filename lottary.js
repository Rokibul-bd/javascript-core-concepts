function lottary(number){
    let items = Math.floor(Math.random() * number.length);
    let result
    for(let i = 0; i<number.length; i++){
        result = number[items]
    }
    return ` ${result} Congratulation you are winner`
}
const arr = ['Rakib','Jannat','Mim','Bristy']
console.log(lottary(arr))
