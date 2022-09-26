window.onload = function() {
    var name = document.getElementById("name");
    var surname = document.getElementById("last-name");
    var dni = document.getElementById("dni");
    var phone = document.getElementById("phone");
    var address = document.getElementById("address");
    var city = document.getElementById("city");
    var postalCode = document.getElementById("postal-code");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("password-repeat");

    var nameContainer = document.getElementById("name-container");
    var surnameContainer = document.getElementById("surname-container");
    var dniContainer = document.getElementById("dni-container");
    var phoneContainer = document.getElementById("phone-container");
    var addressContainer = document.getElementById("address-container");
    var cityContainer = document.getElementById("city-container");
    var postalCodeContainer = document.getElementById("postal-code-container");
    var emailContainer = document.getElementById("email-container");
    var passwordContainer = document.getElementById("password-container");
    var passwordConfirmContainer = document.getElementById("password-repeat-container");

    function hasNotBlankSpace(string){
        if(string.trim() == string){
            return true
        }else{
            return false
        }
    }

    function containsNumber(string){
        let string1 = String(string);
        for(var i = 0; i < string1.length; i++){
            if(!isNaN(string1.charAt(i)) && !(string1.charAt(i) === " ")){
              return true;
            }
        }
        return false;
    }

    function containsNumber(string){
        var containsNumber = false;
        let toString = String(toString);
        for( let i = 0; i < string1.length; i++){
            if(toString[i].charCodeAt(0) >= 48 && toString[i].charCodeAt(0) <= 57){
                containsNumber = true;
                break;
            };
        }
        return containsNumber;
    }

    function OnlyNumbers(string){
        var onlyNumbers = true;
        var toString = String(string);
        for (var i = 0; i < toString.length; i++) {
            if(toString[i].charCodeAt(0) < 48 || toString[i].charCodeAt(0) > 57){
                onlyNumbers = false;
                break;
            };
        };
        return onlyNumbers;
    };

    function onlyLetters(string){
        var onlyLetter = true;
        for (var i = 0; i < string.length; i++) {
            var letterLower = string[i].toLowerCase();
            var letterUpper = string[i].toUpperCase();
            if (letterLower == letterUpper){
                if (string[i] == " "){
                    continue
                }
                onlyLetter = false;
                break
            }
        }
        return onlyLetter;
    }

    function alphanumericMandatory(string){
        var letters = false;
        var numbers = false;
        var specialChar = false;
        var alphanumeric = false;
        for (var i = 0; i < string.length; i++) {
            if(onlyLetters(string[i])){
                if(letters == false){
                    letters = true
                    continue;
                }
                continue;
            }else if(OnlyNumbers(string[i])){
                if(numbers == false){
                    numbers = true
                    continue
                }
                continue
            }else{
                specialChar = true
                break
            }
        }
        if(letters == true && numbers == true && specialChar == false){
            alphanumeric = true;
        }
        return alphanumeric;
    }

    function alphanumericOptional(string){
        var letters = false;
        var numbers = false;
        var specialChar = false;
        var alphanumeric = false;
        for (var i = 0; i < string.length; i++) {
            if(onlyLetters(string[i])){
                if(letters == false){
                    letters = true
                    continue;
                }
                continue;
            }else if(OnlyNumbers(string[i])){
                if(numbers == false){
                    numbers = true
                    continue
                }
                continue
            }else{
                specialChar = true
                break
            }
        }
        if(specialChar == false){
            alphanumeric = true;
        }
        return alphanumeric;
    }

    function errorInput(param, invalidParam, invalidMessage, paramContainer, validation, inputName){
        invalidParam.innerText = invalidMessage;
        invalidParam.classList.add("invalid-input");
        invalidParam.classList.add("invalid-" + inputName);
        param.classList.add("form-input-invalid");
        paramContainer.append(invalidParam);
        validation = false;
        return false
    }

    function correctInput(param, invalidParam){
        invalidParam[0].remove()
        param.classList.remove("form-input-invalid")
    }

    name.onblur = function nameValidation(){
        var validName = false;
        var inputName = Object.keys({name})[0]
        var errors = ["Invalid Name. It must be only letters","Invalid Name. Must contain at least 4 letters","Invalid Name. There are blank spaces in one or both edges"]

        if(onlyLetters(name.value)){
            if(name.value.length > 3){
                if(hasNotBlankSpace(name.value)){
                    validName = true
                }else{
                    var invalidName = document.createElement("p");
                    errorInput(name, invalidName, errors[2], nameContainer, validName, inputName)
                }
            }else{
                var invalidName = document.createElement("p");
                errorInput(name, invalidName, errors[1], nameContainer, validName, inputName)
            }
        }else{
            var invalidName = document.createElement("p");
            errorInput(name, invalidName, errors[0], nameContainer, validName, inputName)
        }
    }

    name.onfocus = function(){
        var invalidName = document.getElementsByClassName("invalid-name")
        correctInput(name, invalidName);
    }

    surname.onblur = function(){
        var validName = false;
        var inputName = Object.keys({surname})[0]
        var errors = ["Invalid Surname. It must be only letters","Invalid Surname. Must contain at least 4 letters","Invalid Surname. There are blank spaces in one or both edges"]

        if(onlyLetters(surname.value)){
            if(surname.value.length > 3){
                if(hasNotBlankSpace(surname.value)){
                    validName = true
                }else{
                    var invalidSurname = document.createElement("p");
                    errorInput(surname, invalidSurname, errors[2], surnameContainer, validName, inputName)
                }
            }else{
                var invalidSurname = document.createElement("p");
                errorInput(surname, invalidSurname, errors[1], surnameContainer, validName, inputName)
            }
        }else{
            var invalidSurname = document.createElement("p");
            errorInput(surname, invalidSurname, errors[0], surnameContainer, validName, inputName)
        }
    }

    surname.onfocus = function(){
        var invalidName = document.getElementsByClassName("invalid-surname")
        correctInput(surname, invalidName);
    }

    dni.onblur = function nameValidation(){
        var validDni = false;
        var inputName = Object.keys({dni})[0]
        var errors = ["Invalid DNI. Must be at least 7 character long and contain only numbers","Invalid DNI. It must contain only numbers"]

        if(dni.value.length >= 7 ){
            if(OnlyNumbers(dni.value)/*  == false */){
                return true
            }else{
                var invalidDni = document.createElement("p");
                errorInput(dni, invalidDni, errors[1], dniContainer, validDni, inputName)
            }
        }else{
            var invalidDni = document.createElement("p");
            errorInput(dni, invalidDni, errors[0], dniContainer, validDni, inputName);
        }
    }

    dni.onfocus = function(){
        var invalidDni = document.getElementsByClassName("invalid-dni")
        invalidDni[0].remove()
        dni.classList.remove("form-input-invalid")
    }

    phone.onblur = function nameValidation(){
        var validPhone = false;
        var inputName = Object.keys({phone})[0]
        var errors = ["Invalid Phone. Must be 10 character long and contain only numbers","Invalid Phone. It must contain only numbers"]

        if(phone.value.length == 10 ){
            if(OnlyNumbers(phone.value)){
                return true
            }else{
                var invalidPhone = document.createElement("p");
                errorInput(phone, invalidPhone, errors[1], phoneContainer, validPhone, inputName);
            }
        }else{
            var invalidPhone = document.createElement("p");
            errorInput(phone, invalidPhone, errors[0], phoneContainer, validPhone, inputName);
        }
    }

    phone.onfocus = function(){
        var invalidPhone = document.getElementsByClassName("invalid-phone")
        invalidPhone[0].remove()
        phone.classList.remove("form-input-invalid")
    }

    address.onblur = function nameValidation(){
        var validAddress = false;
        var inputName = Object.keys({address})[0]
        var errors = ["Invalid Address. Must be at least 5 character long",
        "Invalid Address. Must contain letters and numbers",
        "Invalid Address. Must contain at least one blank space",
        "Invalid Address. There are blank spaces in one or both edges"]
        /* var content = address.value.trim() */

        if(address.value.length > 4){
            if(alphanumericMandatory(address.value)){
                if(address.value.includes(" ")){
                    if(hasNotBlankSpace(address.value)){
                        return true
                    }else{
                        var invalidAddress = document.createElement("p");
                        errorInput(address, invalidAddress, errors[3], addressContainer, validAddress, inputName);
                    }
                }else{
                    var invalidAddress = document.createElement("p");
                    errorInput(address, invalidAddress, errors[2], addressContainer, validAddress, inputName);
                }
            }else{
                var invalidAddress = document.createElement("p");
                errorInput(address, invalidAddress, errors[1], addressContainer, validAddress, inputName);
            }
        }else{
            var invalidAddress = document.createElement("p");
            errorInput(address, invalidAddress, errors[0], addressContainer, validAddress, inputName);
        }
    }

    address.onfocus = function(){
        var invalidAddress = document.getElementsByClassName("invalid-address")
        invalidAddress[0].remove()
        address.classList.remove("form-input-invalid")
    }

    city.onblur = function nameValidation(){
        var validCity = false;
        var inputName = Object.keys({city})[0]
        var errors = ["Invalid City Name. Must be at least 3 character long",
        "Invalid City Name. Must contain alphanumeric text",
        "Invalid City Name. Invalid Address. There are blank spaces in one or both edges"]

        if(city.value.length > 3){
            if(alphanumericOptional(city.value)){
                if(hasNotBlankSpace(city.value)){
                    return true
                }else{
                    var invalidCity = document.createElement("p");
                    errorInput(city, invalidCity, errors[2], cityContainer, validCity, inputName);
                }
            }else{
                var invalidCity = document.createElement("p");
                errorInput(city, invalidCity, errors[1], cityContainer, validCity, inputName);
            }
        }else{
            var invalidCity = document.createElement("p");
            errorInput(city, invalidCity, errors[0], cityContainer, validCity, inputName);
        }
    }

    city.onfocus = function(){
        var invalidCity = document.getElementsByClassName("invalid-city")
        invalidCity[0].remove()
        city.classList.remove("form-input-invalid")
    }

    postalCode.onblur = function nameValidation(){
        var validPostalCode = false;
        var inputName = Object.keys({postalCode})[0]
        var errors = ["Invalid Phone. Must be between 4 and 5 character long and contain only numbers",
        "Invalid Phone. It must contain only numbers"]

        if(postalCode.value.length > 3 && postalCode.value.length < 6){
            if(OnlyNumbers(postalCode.value)){
                return true
            }else{
                var invalidPostalCode = document.createElement("p");
                errorInput(postalCode, invalidPostalCode, errors[1], postalCodeContainer, validPostalCode, inputName);
            }
        }else{
            var invalidPostalCode = document.createElement("p");
            errorInput(postalCode, invalidPostalCode, errors[0], postalCodeContainer, validPostalCode, inputName);
        }
    }

    postalCode.onfocus = function(){
        var invalidPostalCode = document.getElementsByClassName("invalid-postalCode")
        invalidPostalCode[0].remove()
        postalCode.classList.remove("form-input-invalid")
    }

    email.onblur = function emailValidation(){
        var validEmail = false;
        var inputName = Object.keys({email})[0]
        var errors = ["Invalid Email"]
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

        if(email.value.match(emailExpression)){
            return true
        }else{
            var invalidEmail = document.createElement("p");
            errorInput(email, invalidEmail, errors[0], emailContainer, validEmail, inputName);
        }
    }

    email.onfocus = function() {
        var invalidEmail = document.getElementsByClassName("invalid-email")
        invalidEmail[0].remove()
        email.classList.remove("form-input-invalid")
    }

    password.onblur = function passwordValidation(){
        var validPassword = false;
        var inputName = Object.keys({password})[0]
        var errors = ["Invalid Password. Must contain at least 8 alphanumeric characters, including 1 letter and"+
        " 1 number. No special characters allowed",
        "Invalid Password. Must contain only alphanumeric characters including 1 letter and"+
        " 1 number, no special characters allowed"]

        if(password.value.length > 8){
            if(alphanumericMandatory(password.value)){
                validEmail = true;
                return true;
            }else{
                var invalidPassword = document.createElement("p");
                errorInput(password, invalidPassword, errors[1], passwordContainer, validPassword, inputName);
            }
        }else{
            var invalidPassword = document.createElement("p");
            errorInput(password, invalidPassword, errors[0], passwordContainer, validPassword, inputName);
        }
    }

    password.onfocus = function(){
        var invalidPassword = document.getElementsByClassName("invalid-password")
        invalidPassword[0].remove()
        password.classList.remove("form-input-invalid")
    }

    confirmPassword.onblur = function confirmPasswordValidation(){
        var validPassword = false;
        var inputName = Object.keys({confirmPassword})[0]
        var errors = ["Passwords do not match",
        "Password must contain more than 8 characters",
        "Please complete Password Input"]

        if(password.value == confirmPassword.value){
            if(confirmPassword.value.length == 0){
                var invalidPassword = document.createElement("p");
                errorInput(confirmPassword, invalidPassword, errors[2], passwordConfirmContainer, validPassword, inputName);
            }else if(confirmPassword.value.length < 8){
                var invalidPassword = document.createElement("p");
                errorInput(confirmPassword, invalidPassword, errors[1], passwordConfirmContainer, validPassword, inputName);
            }else{
                validPassword = true;
                return true
            }
        }else{
            var invalidPassword = document.createElement("p");
            errorInput(confirmPassword, invalidPassword, errors[0], passwordConfirmContainer, validPassword, inputName);
        }
    }

    function correctInput(param, invalidParam){
        invalidParam[0].remove()
        param.classList.remove("form-input-invalid")
    }

    confirmPassword.onfocus = function(){
        var invalidPassword = document.getElementsByClassName("invalid-confirmPassword");
        correctInput(confirmPassword, invalidPassword);
        /* invalidPassword[0].remove()
        confirmPassword.classList.remove("form-input-invalid") */
    }

    /* function errorInput(param, invalidParam, invalidMessage, paramContainer, validation, inputName){
        invalidParam.innerText = invalidMessage;
        invalidParam.classList.add("invalid-input");
        invalidParam.classList.add("invalid-" + inputName);
        param.classList.add("form-input-invalid");
        paramContainer.append(invalidParam);
        validation = false;
        return false
    } */

}