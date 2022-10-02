window.onload = function() {
    var emailContainer = document.getElementById('email-container');
    var passwordContainer = document.getElementById('password-container')

    var email = document.getElementById('email');
    var password = document.getElementById('password');

    var submit = document.getElementById('submit');

    var loginURL = "https://basp-m2022-api-rest-server.herokuapp.com/login";

    function errorInput(param, invalidParam, invalidMessage, paramContainer, validation, inputName){
        invalidParam.innerText = invalidMessage;
        invalidParam.classList.add('invalid-input');
        invalidParam.classList.add('invalid-' + inputName);
        param.classList.add('form-input-invalid');
        paramContainer.append(invalidParam);
        validation = false;
        return false;
    };

    function correctInput(param, invalidParam){
        invalidParam[0].remove();
        param.classList.remove('form-input-invalid');
    };

    function onlyNumbers(string){
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
                if (string[i] == ' '){
                    continue;
                }
                onlyLetter = false;
                break;
            };
        };
        return onlyLetter;
    };

    function alphanumericMandatory(string){
        var letters = false;
        var numbers = false;
        var specialChar = false;
        var alphanumeric = false;
        for (var i = 0; i < string.length; i++) {
            if(onlyLetters(string[i])){
                if(letters == false){
                    letters = true;
                    continue;
                };
                continue;
            }else if(onlyNumbers(string[i])){
                if(numbers == false){
                    numbers = true;
                    continue;
                };
                continue;
            }else{
                specialChar = true;
                break;
            };
        };
        if(letters == true && numbers == true && specialChar == false){
            alphanumeric = true;
        };
        return alphanumeric;
    }

    var validEmail = false;
    var validPassword = false;

    email.onblur = function emailValidation(){
        var inputName = Object.keys({email})[0];
        var errors = ['Invalid Email','Email must not contain blank spaces'];
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

        if(email.value.match(emailExpression)){
            if(email.value.includes(" ") == false){
                validEmail = true;
                return true;
            }else{
                var invalidEmail = document.createElement('p');
                validEmail = false;
                errorInput(email, invalidEmail, errors[1], emailContainer, validEmail, inputName);
            }
        }else{
            var invalidEmail = document.createElement('p');
            validEmail = false;
            errorInput(email, invalidEmail, errors[0], emailContainer, validEmail, inputName);
        };
    };

    email.onfocus = function() {
        var invalidEmail = document.getElementsByClassName('invalid-email');
        if(!!invalidEmail[0]){
            correctInput(email, invalidEmail);
        }
    };

    function passwordValidation(){
        var inputName = Object.keys({password})[0];
        var errors = ['Invalid Password. Must contain only alphanumeric characters including 1 letter and'+
        ' 1 number, no special characters allowed','Invalid Password. Must not contain blank spaces'];

        if(alphanumericMandatory(password.value)){
            if(password.value.includes(' ') == false){
                validPassword = true;
                return true;
            }else{
                validPassword = false;
                var invalidPassword = document.createElement('p');
                errorInput(password, invalidPassword, errors[1], passwordContainer, validPassword, inputName);
            }
        }else{
            validPassword = false;
            var invalidPassword = document.createElement('p');
            errorInput(password, invalidPassword, errors[0], passwordContainer, validPassword, inputName);
        };
    };

    password.onblur = passwordValidation;

    password.onfocus = function(){
        var invalidPassword = document.getElementsByClassName('invalid-password');
        if(!!invalidPassword[0]){
            correctInput(password, invalidPassword);
        }
    };


    submit.onclick = (function(e){
        e.preventDefault();
        if(validEmail == true && validPassword == true){
            fetch(loginURL+"?email="+email.value+"&password="+password.value,{
                method: 'GET',
            })
            .then(function(res){return res.json()})
            .then(function(data) {alert(data.msg)})
            .catch(function(err){alert(err)})
        }else if(validEmail == false && validPassword == false){
            alert('Invalid Email and Password');
        }else if(validEmail == false && validPassword == true){
            alert('Invalid Email')
        }else{
            alert('Invalid Password')
        }
    })
}