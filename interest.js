function interest(money,year){
    const persent = 8;
    const month = year * 12;
    const oneMonthInterest = money / 100; 
    const total = oneMonthInterest * persent;
    const totalInterest = total * month;
    return `Your interest money is : ${totalInterest}` ;
}
console.log(interest(20000,10));