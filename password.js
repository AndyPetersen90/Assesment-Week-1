const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let welcome = "Welcome to the Student Password Validator!"
console.log(welcome);

// Changes made during our review of the assessment. Most additions were just to give me and idea of what I didnt think of.//

reader.question("Please enter the password you would like to validate. ", function(password){
    console.log(password);
    if (password.length >= 10 && password.length <=25 && password.includes("!")) {
        console.log("Your password has been validated");
    } else if(password.length < 10 && password.length <=25 && password.includes("!")){
        console.log("Your password is too short.");
    } else if(password.length >= 10 && password.length >25 && password.includes("!")){
        console.log("Your password is too long.");
    } else if(password.length >= 10 && password.length <=25){
        console.log("Your password is missing and '!'.");
    }

    for(let i = 0; i < password.length; i++){
        let upperchar = password[i].toUpperCase()
        if(upperchar === password[i]){
            console.log("An uppercase was found.");
        } else{
            console.log("No upercase was found.")
        }
    }






//    Original code I wrote to try to check the password for a capital letter. Things I now see I missed:
//      setting my boolean first.
//      I over complicated my code and kept getting mixed up and confused.
//      Didnt know that 'break' would end the if statement.
// 
//   for ( i = 0; i < password.length; i++){
//        character = password.charAt(i)
//        uCharacter = character.toUpperCase(i)
//        if (character === uCharacter){
//            uPassword = "true";
//        } else {
//            uPassword = "false"
//        }
//    }
//    if(uPassword === "true"){
//        console.log("Your password contains a capital letter.");
//    } else {
//        console.log("Your password Must contain a capital letter.");
//    }



    reader.close()
})

