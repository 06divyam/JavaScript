// Super KeyWords
/**The super keyword is used to call the constuctor of its parent calss to access the parents properties & methods */
// super(args) 
// super.parentMethod(args)

class Person {
    constructor(){
        console.log("enter parent constructor");
        this.species = "homo sapiens";
    }

    eat(){
        console.log("eat");
    }
}

class engineer extends Person{
    constructor(branch){
        console.log("enter child constructor");
        super(); // to invoke parent class constuctor
        this.branch = branch;
        console.log("exit child constructor");
    }
    work(){
        console.log("solve problems, build something");
    }
}

let engineerObj = new engineer("chemical eng");