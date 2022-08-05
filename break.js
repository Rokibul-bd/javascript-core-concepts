// for(let i = 1; i<=10; i++){
//     let number = Math.floor(Math.random() * 10) +1;
//     console.log(number);
//     if(number === i){
//         break; 
//     }else{
//         console.log(`winner number is ${number}`);
//     }
// }
// for(let i = 1; i<20; i++){
//     if(i%2===0){
//         continue;
//     }else{
//         console.log(i);
//     }
// }
function findResult(){
    let number = Math.floor(Math.random() * 100 + 1);
    console.log('Random Number is : '  + number)
    let sum = 0;
    for(let i = 1; i<=number; i++){
    sum += i;
    }
    console.log(sum)
}
findResult();