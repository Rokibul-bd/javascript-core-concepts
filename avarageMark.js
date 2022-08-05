let marks = [65,21,66,55,90];
let subject = 5; //marks[marks.length -1]; // ai khane ami chassi j last index number pete and tar sathe 1 jog kore ami array a acctual last index ta pabo not index value
console.log(subject)
function ghor(marks,subject){
    let sum = 0;
    let total = 0;
    for(let i = 0; i< marks.length; i++){
        sum += marks[i];
    }
    let vag = sum / subject ;
    console.log(vag)
}
ghor(marks, subject)