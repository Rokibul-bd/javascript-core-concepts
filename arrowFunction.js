let sumNumber = (num1, num2, num3) => {
    const fixedNumber = 12;
    let sum = num1 + num2 + num3;
    return fixedNumber * sum;
}
let number = sumNumber(20,90,300);
console.log(number);