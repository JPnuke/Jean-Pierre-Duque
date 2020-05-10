// JavaScript Document

/* arreglo uno, multiplique * 2, y me filtrar los pares, usar map y filter
arreglo dos, filter los impares , sumar + 2
var json =
{
    arreglos: {
        uno: [2, 4, 5, 8, 6, 9, 10],
        dos: [
            { valor: 1 },
            { valor: 4 },
            { valor: 2 },
            { valor: 24 },
            { valor: 100 },
            { valor: 23 },
            { valor: 45 },
            { valor: 23 }
        ],
    }
};
*/

var uno = [2, 4, 5, 8, 6, 9, 10];

console.log('Arreglo1 ');
console.log(uno);
console.log(' ');

var multiplicacion = uno
    .map(
        (item) => {
            return item * 2;
        }
    )

console.log('Arreglo1 * 2');
console.log(multiplicacion);
console.log(' ');

var pares = uno
    .filter(
        (item) => {
            if (item % 2 === 0) {
                return item;
            }
        }
    )

console.log('Arreglo1 valores pares');
console.log(pares);
console.log(' ');

var operadoresMapyFilter = uno
    .map(
        (item) => {
            return item * 2;
        }
    )
    .filter(
        (item) => {
            if (item % 2 === 0) {
                return item;
            }
        }
    )

console.log('Map y filter Arreglo1 ');
console.log(operadoresMapyFilter);
console.log(' ');

var dos = [
    { valor: 1 },
    { valor: 4 },
    { valor: 2 },
    { valor: 24 },
    { valor: 100 },
    { valor: 23 },
    { valor: 45 },
    { valor: 23 }
];

console.log('Arreglo2 ');
console.log(dos);
console.log(' ');

var impar = dos
    .filter(
        (item) => {
            if (item.valor % 2 != 0) {
                return item.valor;
            }
        }
    )

console.log('Arreglo2 valores impares');
console.log(impar);
console.log(' ');

var suma = dos
    .map(
        (item) => {
            return item.valor + 2;
        }
    )

console.log('Arreglo2 + 2');
console.log(suma);
console.log(' ');

var operadoresFilteryMap = dos
    .filter(
        (item) => {
            if (item.valor % 2 != 0) {
                return item.valor;
            }
        }
    )
    .map(
        (item) => {
            return item.valor + 2;
        }
    )

console.log('Filter y Map Arreglo2');
console.log(operadoresFilteryMap);
