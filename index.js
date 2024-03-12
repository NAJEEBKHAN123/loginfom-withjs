// function checkEmailAddress(fieldId){
//     if (document.getElementById(fieldId).value === ""){
//         alert("Email required")
//     }
//     else if(document.getElementById(fieldId).value === "najeebkhalaku@gmail.com"){
//         alert("Correct Email")
//     }
    
// }

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");

let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    

}
