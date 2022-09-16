console.log('--EXERCISE 3: ARRAYS');

// a Dado el siguiente array: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
// 'Octubre', 'Noviembre', 'Diciembre'] mostrar por consola los meses 5 y 11 (utilizar console.log).

console.log('-Exercise 3.a:');

var arrayMonths = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];

console.log(arrayMonths[4] + ' ' + arrayMonths[10]);

// b Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('-Exercise 3.b:');

console.log(arrayMonths.sort());

// c Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('-Exercise 3.c:');


arrayMonths.unshift('I am first');
arrayMonths.push('I am last');

console.log(arrayMonths);

// d Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('-Exercise 3.d:');

arrayMonths.shift();
arrayMonths.pop();

console.log(arrayMonths);

// e Invertir el orden del array (utilizar reverse).

console.log('-Exercise 3.e:');

arrayMonths.reverse();

console.log(arrayMonths);

// f Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log('-Exercise 3.f:');

var stringMonths = arrayMonths.join('-');

console.log(stringMonths);

// g Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('-Exercise 3.g:')

var arrayMonths = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];
var sliceArrayMonths = arrayMonths.slice(4,11);

console.log(sliceArrayMonths);