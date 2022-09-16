console.log('--EXERCISE 2: STRINGS');

// a Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('-Exercise 2.a:');

var stringA = 'Hello, this string has more than 10 characters';
var result2A = stringA.toUpperCase();

console.log(result2A);

// b Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.b:');

var stringA = "Great, this string also has more than 10 characters";
var result2B = stringA.substring(0,5)

console.log(result2B);

// c Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.c:')

var stringA = "This is another string with more than 10 characters";
var result2C = stringA.substring(stringA.length-3)

console.log(result2C);

// d Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.d:')

var stringA = "yeT anoTher LoNG strinG";
var result2D = (stringA.substring(0,1)).toUpperCase()+(stringA.substring(1)).toLowerCase();

console.log(result2D);

// e Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('-Exercise 2.e:');

var stringA = "One more time, this is large";
var result2E = stringA.indexOf(" ");

console.log(result2E);

// f Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.f:');

var stringA = 'incoMpreHeNsibly flabBerGasTed'
var result2F = stringA.substring(0,1).toUpperCase()+
    stringA.substring(1,stringA.indexOf(' ')).toLowerCase()+
    ' '+
    stringA.substring(((stringA.indexOf(' '))+1),((stringA.indexOf(' '))+2)).toUpperCase()+stringA.substring((stringA.indexOf(' ')+2)).toLowerCase();

console.log(result2F);