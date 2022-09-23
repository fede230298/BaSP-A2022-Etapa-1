window.onload = () => {
    var name = document.getElementById("name");
    var surname = document.getElementById("last-name");
    var dni = document.getElementById("dni");
    var phone = document.getElementById("phone");
    var address = document.getElementById("address");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("password-repeat");

    var nameContainer = document.getElementById("name-container");
    var surnameContainer = document.getElementById("surname-container");
    var dniContainer = document.getElementById("dni-container");
    var phoneContainer = document.getElementById("phone-container");
    var addressContainer = document.getElementById("address-container");
    var passwordContainer = document.getElementById("password-container");
    var passwordConfirmContainer = document.getElementById("password-repeat-container");

    name.onblur = function nameValidation(){
        var lastIndex = name.value.lastIndexOf();
        console.log(name.value[0])

        if(isNaN(name.value) && name.value.length > 3 && !name.value.includes("  ")){
            console.log(name.value.trim())
            return true
        }else{
            var invalidName = document.createElement("p");
            invalidName.innerText = "Invalid Name. Must be at least 4 character long";
            invalidName.classList.add("invalid-input");
            invalidName.classList.add("invalid-name");
            name.classList.add("form-input-invalid");
            nameContainer.append(invalidName);
            return false
        }
    }

    name.onfocus = ()=>{
        var invalidName = document.getElementsByClassName("invalid-name")
        invalidName[0].remove()
        name.classList.remove("form-input-invalid")
    }

    surname.onblur = function surnameValidation(){
        if(surname.value.length > 3 ){
            return true
        }else{
            var invalidSurname = document.createElement("p");
            invalidSurname.innerText = "InvalidSurname. Must be at least 4 character long";
            invalidSurname.classList.add("invalid-input");
            invalidSurname.classList.add("invalid-surname");
            surname.classList.add("form-input-invalid");
            surnameContainer.append(invalidSurname);
            return false
        }
    }

    surname.onfocus = ()=>{
        var invalidSurName = document.getElementsByClassName("invalid-surname")
        invalidSurName[0].remove()
        name.classList.remove("form-input-invalid")
    }

    dni.onblur = function nameValidation(){
        if(dni.value.length >= 7 ){
            if(isNaN(dni.value) == false){
                return true
            }else{
                var invalidDni = document.createElement("p");
                invalidDni.innerText = "Invalid DNI. It must contain only numbers";
                invalidDni.classList.add("invalid-input");
                invalidDni.classList.add("invalid-dni");
                dni.classList.add("form-input-invalid");
                dniContainer.append(invalidDni);
                return false
            }
        }else{
            var invalidDni = document.createElement("p");
            invalidDni.innerText = "Invalid DNI. Must be at least 7 character long and contain only numbers";
            invalidDni.classList.add("invalid-input");
            invalidDni.classList.add("invalid-dni");
            dni.classList.add("form-input-invalid");
            dniContainer.append(invalidDni);
            return false
        }
    }

    dni.onfocus = ()=>{
        var invalidDni = document.getElementsByClassName("invalid-dni")
        invalidDni[0].remove()
        dni.classList.remove("form-input-invalid")
    }

    phone.onblur = function nameValidation(){
        if(phone.value.length == 10 ){
            if(isNaN(phone.value) == false){
                return true
            }else{
                var invalidPhone = document.createElement("p");
                invalidPhone.innerText = "Invalid Phone. It must contain only numbers";
                invalidPhone.classList.add("invalid-input");
                invalidPhone.classList.add("invalid-phone");
                phone.classList.add("form-input-invalid");
                phoneContainer.append(invalidPhone);
                return false
            }
        }else{
            var invalidPhone = document.createElement("p");
            invalidPhone.innerText = "Invalid Phone. Must be 10 character long and contain only numbers";
            invalidPhone.classList.add("invalid-input");
            invalidPhone.classList.add("invalid-phone");
            phone.classList.add("form-input-invalid");
            phoneContainer.append(invalidPhone);
            return false
        }
    }

    phone.onfocus = ()=>{
        var invalidPhone = document.getElementsByClassName("invalid-phone")
        invalidPhone[0].remove()
        phone.classList.remove("form-input-invalid")
    }

    password.onblur = function passwordValidation(){
        if(password.value.length > 8){
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

    password.onfocus = () => {
        var invalidPassword = document.getElementsByClassName("invalid-password")
        invalidPassword[0].remove()
        password.classList.remove("form-input-invalid")
    }

    confirmPassword.onblur = function confirmPasswordValidation(){
        if(password.value == confirmPassword.value){
            if(confirmPassword.value.length == 0){
                var invalidPassword = document.createElement("p");
                invalidPassword.innerText = "Please complete Password Input";
                invalidPassword.classList.add("invalid-input");
                invalidPassword.classList.add("invalid-confirm-password");
                password.classList.add("form-input-invalid");
                passwordConfirmContainer.append(invalidPassword);
                return false
            }
            if(confirmPassword.value.length < 8){
                var invalidPassword = document.createElement("p");
                invalidPassword.innerText = "Password must contain more than 8 characters";
                invalidPassword.classList.add("invalid-input");
                invalidPassword.classList.add("invalid-confirm-password");
                password.classList.add("form-input-invalid");
                passwordConfirmContainer.append(invalidPassword);
                return false
            }
            return true
        }else{
            var invalidPassword = document.createElement("p");
            invalidPassword.innerText = "Passwords do not match";
            invalidPassword.classList.add("invalid-input");
            invalidPassword.classList.add("invalid-confirm-password");
            password.classList.add("form-input-invalid");
            passwordConfirmContainer.append(invalidPassword);
            return false
        }
    }

    confirmPassword.onfocus = () =>{
        var invalidPassword = document.getElementsByClassName("invalid-confirm-password")
        invalidPassword[0].remove()
        password.classList.remove("form-input-invalid")
    }
}