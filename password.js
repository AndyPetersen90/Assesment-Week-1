const { Console } = require('console');
const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let welcome = "Welcome to the Student Password Validator!"
console.log(welcome);

reader.question("Please enter the password you would like to validate.", function(password){
    if (password.length >= 10) {
        console.log("Your password has been validated");
    } else if (password.length < 10) {
        console.log("Your password is too short.");
    };

   for ( i = 0; i < password.length; i++){
       character = password.charAt(i)
       uCharacter = character.toUpperCase(i)
       if (character === uCharacter){
           upassword = "true";
       } else {
           upassword = "false"
       }
   }

   if(upassword === "true"){
       console.log("Your password contains a capital letter.");
   } else {
       console.log("Your password Must contain a capital letter.");
   }


    reader.close()
})

