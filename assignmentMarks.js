function totalMark(arguments){
    let sum = 0;
    for(let i = 0; i<arguments.length; i++){
        sum += i
    }
    let ghor = sum / arguments.length;

    return ghor;
}

console.log(totalMark(60,50,55));