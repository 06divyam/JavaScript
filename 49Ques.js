// You are creating a website for your college. Create a class user with 2 properties, name & emails. It also has a method called viewData() that allows user to view website data.

let DATA = "secret information";
class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data = ", DATA);
    }
}
let student1 = new user("shradha", "abc@gmail.com");
let student2 = new user("Divyam", "123D@gmail.com");
let teacher1 = new user("Dean", "DeanClg@gmail.com");

