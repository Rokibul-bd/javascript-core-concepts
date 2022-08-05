function gradeCheak(mark){
    if(mark > 100){
        return 'Sorry please Enter vaild Mark';
    }
    else if(mark >= 90){
        return 'A+'
    }else if(mark >= 80){
        return 'A';
    }else if(mark >= 70){
        return 'B+';
    
    }else if(mark >= 60){
        return 'B';
    }else if(mark >= 50){
        return 'C';
    }else if(mark >= 33){
        return 'D';
    }
    else{
        return 'Sorry Your are faield';
    }    
}
console.log(gradeCheak(70));