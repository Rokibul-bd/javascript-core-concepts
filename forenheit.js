function getCelcies(cel){
    let ftemp = cel;
    let result = ftemp * 9 / 5 + 32;
    return result;
}
console.log(getCelcies(50));

function getFarenheit(faren){
    let farenTemp = faren;
    let result = (farenTemp - 32) * 5 / 9;
    let farenResult = result.toFixed(4);
    return farenResult;
}
    
console.log(getFarenheit(35));