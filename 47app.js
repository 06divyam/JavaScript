// INHERITANCE in JS
/** inheritance is passing down properties & methods from parent class to child class. 
 * If child & parent have same method, child's method will be used.[Method overriding]
*/

class Person{
    consturctor(){
        this.species = "homo sapiens"
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("Do nothing");
    }
}
class engineer extends Person{
    work(){
        console.log("solve problems, build something");
    }
}

class Doctor extends Person {
    work(){
        console.log("treat patients");
    }
}

let shradhaObj = new engineer();