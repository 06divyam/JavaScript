/**  class is a program-code template for creating objects.
Those objects will hace some state (variable) & some behaviour (function) inside it.
class MyClass{
constructor(){...}
myMethod(){...}
} 
let myObj= newMyClass();*/



class Toyota{
    constructor(brand, mileage){
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    
}

let fortuner = new Toyota("fortuner", 10);
console.log(fortuner);
let lexus = new Toyota("lexus", 12);
console.log(lexus);