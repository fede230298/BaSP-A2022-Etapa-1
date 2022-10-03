window.onload = function() {
    var errorsArray = [];

    var signupURL = "https://basp-m2022-api-rest-server.herokuapp.com/signup";

    var name = document.getElementById('name');
    var surname = document.getElementById('last-name');
    var dni = document.getElementById('dni');
    var birthday = document.getElementById('birthday')
    var phone = document.getElementById('phone');
    var address = document.getElementById('address');
    var city = document.getElementById('city');
    var postalCode = document.getElementById('postal-code');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('password-repeat');
    var submit = document.getElementById('submit');
    var allInputs = document.querySelectorAll
    ('#name, #last-name, #dni, #birthday, #phone, #address, #city, #postal-code, #email, #password, #password-repeat');

    var nameContainer = document.getElementById('name-container');
    var surnameContainer = document.getElementById('surname-container');
    var dniContainer = document.getElementById('dni-container');
    var birthdayContainer = document.getElementById('birthday-container')
    var phoneContainer = document.getElementById('phone-container');
    var addressContainer = document.getElementById('address-container');
    var cityContainer = document.getElementById('city-container');
    var postalCodeContainer = document.getElementById('postal-code-container');
    var emailContainer = document.getElementById('email-container');
    var passwordContainer = document.getElementById('password-container');
    var passwordConfirmContainer = document.getElementById('password-repeat-container');

    var modal = document.getElementById("myModal");
    var modalHeader = document.getElementsByClassName('modal-header')[0];
    var modalBody = document.getElementsByClassName('modal-body')[0];
    var cross = document.getElementsByClassName("close")[0];

    function modalOpen(messageHeader, message){
        modal.style.display="block";
        var alertMessageHeader = document.createElement('h2');
        alertMessageHeader.innerText = messageHeader;
        modalHeader.append(alertMessageHeader);
        var alertMessage = document.createElement('p');
        alertMessage.innerText = message;
        modalBody.append(alertMessage);
    }

    function inputDate(){
        var localDate = localStorage.getItem('dob');
        var month = localDate.charAt(0)+localDate.charAt(1);
        var day = localDate.charAt(3)+localDate.charAt(4);
        var year = localDate.charAt(6)+localDate.charAt(7)+localDate.charAt(8)+localDate.charAt(9);
        var correctDateArray = [year,month,day]
        var correctDateString = correctDateArray.join("-")
        return correctDateString
    };

    function loadLocalStorage(input,localName){
        input.setAttribute('value', localStorage.getItem(localName));
    };

    function existLocalStorage(name){
        if(localStorage.getItem(name)){
            return true;
        }else{
            return false;
        };
    };

    if(localStorage.length == 10 &&
        existLocalStorage('name') &&
        existLocalStorage('lastName') &&
        existLocalStorage('dni') &&
        existLocalStorage('dob') &&
        existLocalStorage('phone') &&
        existLocalStorage('address') &&
        existLocalStorage('city') &&
        existLocalStorage('zip') &&
        existLocalStorage('email') &&
        existLocalStorage('password')
        ){
        loadLocalStorage(name,'name',0);
        loadLocalStorage(surname,'lastName',1);
        loadLocalStorage(dni,'dni',2);
        birthday.setAttribute('value', inputDate());
        loadLocalStorage(phone,'phone',4);
        loadLocalStorage(address,'address',5);
        loadLocalStorage(city,'city',6);
        loadLocalStorage(postalCode,'zip',7);
        loadLocalStorage(email,'email',8);
        loadLocalStorage(password,'password',9);
        errorsArray.push('Confirm Password');
    }else{
        errorsArray.push('Name', 'Last Name', 'DNI', 'Birthday', 'Phone', 'Address', 'City', 'Postal Code',
        'Email', 'Password', 'Confirm Password');
    };

    function hasNotBlankSpace(string){
        if(string.trim() == string){
            return true;
        }else{
            return false;
        };
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
                }else{
                    onlyLetter = false;
                    break;
                }
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
    };

    function alphanumericOptional(string){
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
        if(specialChar == false){
            alphanumeric = true;
        };
        return alphanumeric;
    };

    function errorInput(param, invalidParam, invalidMessage, paramContainer, inputName){
        invalidParam.innerText = invalidMessage;
        invalidParam.classList.add('invalid-input');
        invalidParam.classList.add('invalid-' + inputName);
        param.classList.add('form-input-invalid');
        paramContainer.append(invalidParam);
        return false;
    };

    function correctInput(param, invalidParam){
        invalidParam[0].remove();
        param.classList.remove('form-input-invalid');
    };

    function addError(errorName){
        if(!(errorsArray.includes(errorName))){
            errorsArray.push(errorName);
        };
    };

    function deleteError(errorName){
        if(errorsArray.includes(errorName)){
            var index = errorsArray.indexOf(errorName);
            if(index > -1){
                errorsArray.splice(index,1);
            };
        };
    };

    name.onblur = function nameValidation(){
        var inputName = Object.keys({name})[0];
        var errors = ['Invalid Name. It must be only letters',
        'Invalid Name. Must contain at least 4 letters',
        'Invalid Name. There are blank spaces in one or both edges'];

        if(onlyLetters(name.value)){
            if(name.value.length > 3){
                if(hasNotBlankSpace(name.value)){
                    deleteError('Name');
                }else{
                    addError('Name');
                    var invalidName = document.createElement('p');
                    errorInput(name, invalidName, errors[2], nameContainer, inputName);
                };
            }else{
                addError('Name');
                var invalidName = document.createElement('p');
                errorInput(name, invalidName, errors[1], nameContainer, inputName);
            };
        }else{
            addError('Name');
            var invalidName = document.createElement('p');
            errorInput(name, invalidName, errors[0], nameContainer, inputName);
        };
    };

    name.onfocus = function(){
        var invalidName = document.getElementsByClassName('invalid-name');
        if(!!invalidName[0]){
            correctInput(name, invalidName);
        };
    };

    surname.onblur = function surnameValidation(){
        var inputName = Object.keys({surname})[0];
        var errors = ['Invalid Surname. It must be only letters',
        'Invalid Surname. Must contain at least 4 letters',
        'Invalid Surname. There are blank spaces in one or both edges'];

        if(onlyLetters(surname.value)){
            if(surname.value.length > 3){
                if(hasNotBlankSpace(surname.value)){
                    deleteError('Last Name');
                }else{
                    addError('Last Name');
                    var invalidSurname = document.createElement('p');
                    errorInput(surname, invalidSurname, errors[2], surnameContainer, inputName);
                };
            }else{
                addError('Last Name');
                var invalidSurname = document.createElement('p');
                errorInput(surname, invalidSurname, errors[1], surnameContainer, inputName);
            };
        }else{
            addError('Last Name');
            var invalidSurname = document.createElement('p');
            errorInput(surname, invalidSurname, errors[0], surnameContainer, inputName);
        };
    };

    surname.onfocus = function(){
        var invalidName = document.getElementsByClassName('invalid-surname');
        if(!!invalidName[0]){
            correctInput(surname, invalidName);
        };
    };

    dni.onblur = function dniValidation(){
        var inputName = Object.keys({dni})[0];
        var errors = ['Invalid DNI. Must be at least 7 character long and contain only numbers',
        'Invalid DNI. It must contain only numbers',
        'Invalid DNI. There are blank spaces in one or both edges'];

        if(dni.value.length >= 7 ){
            if(onlyNumbers(dni.value)){
                if(hasNotBlankSpace(dni.value)){
                    deleteError('DNI');
                }else{
                    addError('DNI');
                    var invalidDni = document.createElement('p');
                    errorInput(dni, invalidDni, errors[2], dniContainer,inputName);
                }
            }else{
                addError('DNI');
                var invalidDni = document.createElement('p');
                errorInput(dni, invalidDni, errors[1], dniContainer, inputName);
            };
        }else{
            addError('DNI');
            var invalidDni = document.createElement('p');
            errorInput(dni, invalidDni, errors[0], dniContainer, inputName);
        };
    };

    dni.onfocus = function(){
        var invalidDni = document.getElementsByClassName('invalid-dni');
        if(!!invalidDni[0]){
            correctInput(dni, invalidDni);
        };
    };

    birthday.onblur = function birthdayValidation(){
        var inputName = Object.keys({birthday})[0];
        var errors = ['Invalid Birthday. Please complete the input',
        'Invalid Birthday. The year must be 4 character long'];

        if(birthday.value != ''){
            if(birthday.value.length == 10){
                deleteError('Birthday');
            }else{
                addError('NBirthday');
                var invalidBirthday = document.createElement('p');
                errorInput(birthday, invalidBirthday, errors[1], birthdayContainer, inputName);
            };
        }else{
            addError('Birthday');
            var invalidBirthday = document.createElement('p');
            errorInput(birthday, invalidBirthday, errors[0], birthdayContainer, inputName);
        };
    };

    birthday.onfocus = function(){
        var invalidBirthday = document.getElementsByClassName('invalid-birthday');
        if(!!invalidBirthday[0]){
            correctInput(birthday, invalidBirthday);
        };
    };

    phone.onblur = function phoneValidation(){
        var inputName = Object.keys({phone})[0];
        var errors = ['Invalid Phone. Must be 10 character long and contain only numbers',
        'Invalid Phone. It must contain only numbers',
        'Invalid Phone. There are blank spaces in one or both edges'];

        if(phone.value.length == 10 ){
            if(onlyNumbers(phone.value)){
                if(hasNotBlankSpace(phone.value)){
                    deleteError('Phone');
                }else{
                    addError('Phone');
                    var invalidPhone = document.createElement('p');
                    errorInput(phone, invalidPhone, errors[2], phoneContainer, inputName);
                }
            }else{
                addError('Phone');
                var invalidPhone = document.createElement('p');
                errorInput(phone, invalidPhone, errors[1], phoneContainer, inputName);
            };
        }else{
            addError('Phone');
            var invalidPhone = document.createElement('p');
            errorInput(phone, invalidPhone, errors[0], phoneContainer, inputName);
        };
    };

    phone.onfocus = function(){
        var invalidPhone = document.getElementsByClassName('invalid-phone');
        if(!!invalidPhone[0]){
            correctInput(phone, invalidPhone);
        };
    };

    address.onblur = function addressValidation(){
        var inputName = Object.keys({address})[0];
        var errors = ['Invalid Address. Must be at least 5 character long',
        'Invalid Address. Must contain letters and numbers',
        'Invalid Address. Must contain at least one blank space',
        'Invalid Address. There are blank spaces in one or both edges'];

        if(address.value.length > 4){
            if(alphanumericMandatory(address.value)){
                if(address.value.includes(' ')){
                    if(hasNotBlankSpace(address.value)){
                        deleteError('Address');
                    }else{
                        addError('Address');
                        var invalidAddress = document.createElement('p');
                        errorInput(address, invalidAddress, errors[3], addressContainer, inputName);
                    };
                }else{
                    addError('Address');
                    var invalidAddress = document.createElement('p');
                    errorInput(address, invalidAddress, errors[2], addressContainer, inputName);
                };
            }else{
                addError('Address');
                var invalidAddress = document.createElement('p');
                errorInput(address, invalidAddress, errors[1], addressContainer, inputName);
            };
        }else{
            addError('Address');
            var invalidAddress = document.createElement('p');
            errorInput(address, invalidAddress, errors[0], addressContainer, inputName);
        };
    };

    address.onfocus = function(){
        var invalidAddress = document.getElementsByClassName('invalid-address');
        if(!!invalidAddress[0]){
            correctInput(address, invalidAddress);
        };
    };

    city.onblur = function cityValidation(){
        var inputName = Object.keys({city})[0];
        var errors = ['Invalid City Name. Must be at least 3 character long',
        'Invalid City Name. Must contain alphanumeric text',
        'Invalid City Name. There are blank spaces in one or both edges'];

        if(city.value.length > 3){
            if(alphanumericOptional(city.value)){
                if(hasNotBlankSpace(city.value)){
                    deleteError('City');
                }else{
                    addError('City');
                    var invalidCity = document.createElement('p');
                    errorInput(city, invalidCity, errors[2], cityContainer, inputName);
                };
            }else{
                addError('City');
                var invalidCity = document.createElement('p');
                errorInput(city, invalidCity, errors[1], cityContainer, inputName);
            };
        }else{
            addError('City');
            var invalidCity = document.createElement('p');
            errorInput(city, invalidCity, errors[0], cityContainer, inputName);
        };
    };

    city.onfocus = function(){
        var invalidCity = document.getElementsByClassName('invalid-city');
        if(!!invalidCity[0]){
            correctInput(city, invalidCity);
        };
    };

    postalCode.onblur = function postalValidation(){
        var inputName = Object.keys({postalCode})[0];
        var errors = ['Invalid Phone. Must be between 4 and 5 character long and contain only numbers',
        'Invalid Postal Code. It must contain only numbers',
        'Invalid Postal Code. There are blank spaces in one or both edges'];

        if(postalCode.value.length > 3 && postalCode.value.length < 6){
            if(onlyNumbers(postalCode.value)){
                if(hasNotBlankSpace(postalCode.value)){
                    deleteError('Postal Code');
                }else{
                    addError('Postal Code');
                    var invalidPostalCode = document.createElement('p');
                    errorInput(postalCode, invalidPostalCode, errors[2], postalCodeContainer, inputName);
                }
            }else{
                addError('Postal Code');
                var invalidPostalCode = document.createElement('p');
                errorInput(postalCode, invalidPostalCode, errors[1], postalCodeContainer, inputName);
            };
        }else{
            addError('Postal Code');
            var invalidPostalCode = document.createElement('p');
            errorInput(postalCode, invalidPostalCode, errors[0], postalCodeContainer, inputName);
        };
    };

    postalCode.onfocus = function(){
        var invalidPostalCode = document.getElementsByClassName('invalid-postalCode');
        if(!!invalidPostalCode[0]){
            correctInput(postalCode, invalidPostalCode);
        };
    };

    email.onblur = function emailValidation(){
        var inputName = Object.keys({email})[0];
        var errors = ['Invalid Email','Email must not contain blank spaces'];
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

        if(email.value.match(emailExpression)){
            if(email.value.includes(" ") == false){
                deleteError('Email');
            }else{
                addError('Email');
            var invalidEmail = document.createElement('p');
            errorInput(email, invalidEmail, errors[1], emailContainer, inputName);
            }
        }else{
            addError('Email');
            var invalidEmail = document.createElement('p');
            errorInput(email, invalidEmail, errors[0], emailContainer, inputName);
        };
    };

    email.onfocus = function() {
        var invalidEmail = document.getElementsByClassName('invalid-email');
        if(!!invalidEmail[0]){
            correctInput(email, invalidEmail);
        };
    };

    function confirmPasswordValidation(){
        var inputName = Object.keys({confirmPassword})[0];
        var errors = ['Passwords do not match',
        'Password must contain more than 8 characters',
        'Please complete Password Input'];

        if(password.value == confirmPassword.value){
            if(confirmPassword.value.length == 0){
                addError('Confirm Password');
                var invalidPassword = document.createElement('p');
                errorInput
                (confirmPassword, invalidPassword, errors[2], passwordConfirmContainer, inputName);
            }else if(confirmPassword.value.length < 8){
                addError('Confirm Password');
                var invalidPassword = document.createElement('p');
                errorInput
                (confirmPassword, invalidPassword, errors[1], passwordConfirmContainer, inputName);
            }else{
                deleteError('Confirm Password');
            };
        }else{
            addError('Confirm Password');
            var invalidPassword = document.createElement('p');
            errorInput(confirmPassword, invalidPassword, errors[0], passwordConfirmContainer, inputName);
        };
    };

    password.onblur = function passwordValidation(){
        var inputName = Object.keys({password})[0];
        var errors = ['Invalid Password. Must contain at least 8 alphanumeric characters, including 1 letter and'+
        ' 1 number. No special characters allowed',
        'Invalid Password. Must contain only alphanumeric characters including 1 letter and'+
        ' 1 number, no special characters allowed', 'Invalid Password. Must not contain blank spaces'];

        if(password.value.length > 8){
            if(alphanumericMandatory(password.value)){
                if(!(password.value.includes(' '))){
                    deleteError('Password');
                    if(confirmPassword.value.length > 0){
                        confirmPasswordValidation();
                    }
                }else{
                    addError('Password');
                    var invalidPassword = document.createElement('p');
                    errorInput(password, invalidPassword, errors[2], passwordContainer, inputName);
                };
            }else{
                addError('Password');
                var invalidPassword = document.createElement('p');
                errorInput(password, invalidPassword, errors[1], passwordContainer, inputName);
            };
        }else{
            addError('Password');
            var invalidPassword = document.createElement('p');
            errorInput(password, invalidPassword, errors[0], passwordContainer, inputName);
        };
    };

    password.onfocus = function(){
        var invalidPassword = document.getElementsByClassName('invalid-password');
        if(!!invalidPassword[0]){
            correctInput(password, invalidPassword);
        };
        var invalidConfirmPassword = document.getElementsByClassName('invalid-confirmPassword');
        if(!!invalidConfirmPassword[0]){
            correctInput(confirmPassword, invalidConfirmPassword);
        };
    };

    confirmPassword.onblur = confirmPasswordValidation;

    confirmPassword.onfocus = function(){
        var invalidPassword = document.getElementsByClassName('invalid-confirmPassword');
        if(!!invalidPassword[0]){
            correctInput(confirmPassword, invalidPassword);
        };
    };

    submit.onclick = function(e){
        e.preventDefault();
        if(errorsArray.length == 0){
            var year = birthday.value.substring(0,birthday.value.indexOf("-"));
            var month = birthday.value.substring(birthday.value.indexOf("-")+1,birthday.value.indexOf("-")+3);
            var day = birthday.value.substring(birthday.value.indexOf("-")+4);
            var correctDateArray = [month,day,year];
            var correctDateString = correctDateArray.join("/");
            fetch(signupURL+
                "?name="+name.value+
                "&lastName="+surname.value+
                "&dni="+dni.value+
                "&dob="+correctDateString+
                "&phone="+phone.value+
                "&address="+address.value+
                "&city="+city.value+
                "&zip="+postalCode.value+
                "&email="+email.value+
                "&password="+password.value,
                {
                method: 'GET',
            })
            .then(function(res){ return res.json()})
            .then(function(data){
                modalOpen(data.msg, "Your data is: "+ "\n" +
                'Name: ' + data.data.name + '\n' +
                'Surname: ' + data.data.lastName + '\n' +
                'DNI: ' + data.data.dni + '\n' +
                'Birthday: ' + data.data.dob + '\n' +
                'Phone: ' + data.data.phone + '\n' +
                'Address: ' + data.data.address + '\n' +
                'City: ' + data.data.city + '\n' +
                'Postal Code: ' + data.data.zip + '\n' +
                'Email: ' + data.data.email + '\n' +
                'Password: ' + data.data.password + '\n');
                window.localStorage.setItem("name", (data.data.name));
                window.localStorage.setItem("lastName", (data.data.lastName));
                window.localStorage.setItem("dni", (data.data.dni));
                window.localStorage.setItem("dob", (data.data.dob));
                window.localStorage.setItem("phone", (data.data.phone));
                window.localStorage.setItem("address", (data.data.address));
                window.localStorage.setItem("city", (data.data.city));
                window.localStorage.setItem("zip", (data.data.zip));
                window.localStorage.setItem("email", (data.data.email));
                window.localStorage.setItem("password", (data.data.password));
                allInputs.forEach(function(allInputs){
                    errorsArray.push('Name', 'Last Name', 'DNI', 'Birthday', 'Phone', 'Address', 'City', 'Postal Code',
                    'Email', 'Password', 'Confirm Password');
                    allInputs.value='';
                });
            })
            .catch(function(err){alert(err)});
        }else{
            var invalidFields = errorsArray.join('\n');
            modalOpen('Please check the incorrect inputs:', invalidFields)
            /* alert('Please check the incorrect inputs: \n' + invalidFields); */
        };
    };

    cross.onclick = function() {
        modal.style.display = "none";
        while(modalBody.firstChild){
            modalBody.removeChild(modalBody.firstChild);
            modalHeader.removeChild(modalHeader.lastChild);
        }
    }
};