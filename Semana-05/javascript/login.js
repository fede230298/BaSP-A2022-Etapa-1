window.onload = function() {
    console.log("Hola")

    var emailContainer = document.getElementById("email-container");

    var passwordContainer = document.getElementById("password-container")

    var email = document.getElementById("email");

    var password = document.getElementById("password");

    var submit = document.getElementById("submit");

    email.onblur = function emailValidation(){
        var validChar = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (email.value.match(validChar)){
            return true
        }else{
            var invalidEmail = document.createElement("p");
            invalidEmail.innerText = "Invalid Email";
            invalidEmail.classList.add("invalid-input");
            invalidEmail.classList.add("invalid-email");
            email.classList.add("form-input-invalid");
            emailContainer.append(invalidEmail);
            return false
        }
    }

    email.onfocus = function() {
        var invalidEmail = document.getElementsByClassName("invalid-email")
        invalidEmail[0].remove()
        email.classList.remove("form-input-invalid")
    }

    password.onblur = function passwordValidation(){
        var validChar = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/

        if(password.value.match(validChar) && password.value.length >= 8){
            return true
        }else{
            var invalidPassword = document.createElement("p");
            invalidPassword.innerText = "Invalid Password";
            invalidPassword.classList.add("invalid-input");
            invalidPassword.classList.add("invalid-password");
            password.classList.add("form-input-invalid");
            passwordContainer.append(invalidPassword);
            return false
        }
    }

    password.onfocus = function() {
        var invalidPassword = document.getElementsByClassName("invalid-password")
        invalidPassword[0].remove()
        password.classList.remove("form-input-invalid")
    }

    submit.onclick = ((e)=>{
        e.preventDefault();
        if(email.onblur() && password.onblur()){
            alert("Email: " + email.value + " " + "Password: " + password.value)
        }else{
            
        }
    })


    function emailValidation(){
        var validChar = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (email.value.match(validChar)){
            alert("Valid email")
            return true
        }else{
            alert("Invalid email")
            return false
        }
    }

    function passwordValidation(){
        var validChar = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/

        if(password.value.match(validChar)){
            alert("Valid password")
            return true
        }else{
            alert("Invalid password")
            return false
        }
    }
}