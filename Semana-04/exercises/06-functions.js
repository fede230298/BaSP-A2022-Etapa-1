console.log('--EXERCISE 6: FUNCTIONS');

// a Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('-Exercise 6.a:');

function addNumbers(numA, numB){
    return numA + numB;
};
var resultA = addNumbers(5,10);

console.log(resultA)

// b A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('-Exercise 6.b:');

function addNumbers(numA, numB){
    if(isNaN(numA) || isNaN(numB)){
        alert ('One of the parameters is not a number')
        return alert(NaN)
    }
    return numA + numB;
};

console.log(addNumbers(5,10));
console.log(addNumbers(5,'string'));

// c Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log('-Exercise 6.c:');

function validateInteger(num){
    return Number.isInteger(num)
}

console.log(validateInteger(5))
console.log(validateInteger(5.1))

// d A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado).

console.log('-Exercise 6.d:');

function addNumbers(numA, numB){
    if(isNaN(numA) || isNaN(numB)){
        alert ('One of the parameters is not a number')
        return NaN;
    };
    if (validateInteger(numA) == false){
        alert('The number: '+ numA + ' is not integer. It will be rounded');
        numA = Math.round(numA);
    };
    if (validateInteger(numB) == false){
        alert('The number: '+ numB + ' is not integer. It will be rounded');
        numB = Math.round(numB);
    }
    return numA + numB;
};

console.log(addNumbers(5,9.5))

// e Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

console.log('-Exercise 6.e:');

function roundNumber(num){
    if (validateInteger(num) == false){
        alert('The number: '+ num + ' is not integer. It will be rounded');
        num = Math.round(num);
    };
}

function addNumbers(numA, numB){
    if(isNaN(numA) || isNaN(numB)){
        alert ('One of the parameters is not a number');
        return NaN;
    };
    roundNumber(numA);
    roundNumber(numB);
    return numA + numB;
};

console.log(addNumbers(5,15));
console.log(addNumbers(5.5,15));
console.log(addNumbers(5.5,15.6));
console.log(addNumbers(5.5,'string'));