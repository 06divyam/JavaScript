// Prompt the user to enter their full name. Genrate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname lenght.
// eg. user name= "shardhakhapra", username should be"@shardhakhapra13"

let fullName =prompt("Enter your fullname without spaces");

let username = "@" + fullName + fullName.length;
console.log(username);