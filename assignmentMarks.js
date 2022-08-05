function totalMark(...arguments){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    let totalAssigment = arguments.length;
    let ghor = sum / totalAssigment;

    return ghor;
}

console.log(totalMark(60,50,55));