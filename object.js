class Person{
    constructor(name,age,address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    printName(){
        console.log('My Name is ' + this.name);
    }
    printAge(){
        console.log('My Age ' + this.age);
    }
    printAddress(){
        console.log('My Address ' + this.address);
    }
}
let person1 = new Person('Md Rokibul Islam', 22, 'Thakurgaon');
person1.printName();