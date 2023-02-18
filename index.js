let Username = document.querySelector("#Username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");

function ShowError(input, message){
    const FormControl = input.parentElement;
     FormControl.className = "form-control error";
    const small =  FormControl.querySelector("small");
    small.innerText = message;
}

function ShowError(input){
    const FormControl = input.parentElement;
     FormControl.className = "form-control success"; 

}

