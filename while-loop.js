let num = 0;
while(num<10){
    console.log(`This number is ${num}`);
    num++
}

let propose = 1;
while(propose < 20){
    console.log('I love Javascipt ' + propose);
    propose++
}

for(let i = 1; i<=30; i++){
    if(i%2===0){
        console.log(`This is Even Number : ${i}`)
    }
}
for(let i = 1; i<=20; i++){
    if(i%2!=0){
        console.log(`This number is Odd ${i}`);
    }
};
let students = ['Nirob','Rafi','Milon','sagor','Jahid','Mahir'];
students.push('Rokibul');
students.unshift('Jony Cmt');
let result = students.map((x)=>{
    console.log(`Student Name is ${x}`);
});
let grade = 70;
if(grade < 50){
    console.log('F');
}else if(grade < 60){
    console.log('D');
}else if(grade < 70){
    console.log('C')
}else if(grade<80){
    console.log('B');
}else if(grade < 90){
    console.log('A');
}else if(grade<100){
    console.log('A+');
}
else{
    console.log('Result not Found');
}
let n = 1;
while(n<10){
    console.log(n);
    n = n+2;
}
let fruits = ['Mango','Banana','JackFruit','coconat','paynapple'];

// for(let i in fruits){
//     console.log(`${i} : ${fruits[i]}`);
// }
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i])
}