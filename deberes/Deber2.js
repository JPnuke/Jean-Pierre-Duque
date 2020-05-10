// JavaScript Document

// DEBER  PALABRA='COMERCIO ELECTRONICO',   invertir palabra

var PALABRA = "COMERCIO ELECTRONICO";

function InvertirCadena(cadena) {
	var CadenaInvertida = "";
	for (var i = cadena.length - 1; i >= 0; i--) {
		CadenaInvertida += cadena.charAt(i);
	}
	return CadenaInvertida;
}
var CI = InvertirCadena(PALABRA)
console.log(" ")
console.log("1. Invertir palabras 'COMERCIO ELECTRONICO' ")
console.log(CI)
console.log(" ")


/* DEBER UTILICEN FUNCIONES
- primera palabra en mayuscula
- la palabra de la mitad en mayuscula
- ultima palabra  en mayuscula
- sumar todos los punto
- sumar todos las comas
Realiza fotografías de 20 megapíxeles y
puede utilizar un perfil de color Dlog-M
de 10 bits, con el que se obtiene un rango
dinámico más amplio al registrar hasta mil millones de
colores. Esto queda bastante por encima de los 16 millones de
colores de los perfiles de 8 bits, pudiendo dejar más margen y
libertad en la edición posterior del material.
Por su parte, el Mavic 2 Zoom cuenta con
un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto.
En este caso es capaz de realizar capturas de 12 megapíxeles,
disponiendo un zoom automático híbrido (que combina detección de fase y contraste)
de una función de "Superresolución" que recurre al zoom óptico para realizar nueve
fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle). */

var texto = "Realiza fotografías de 20 megapíxeles y puede utilizar un perfil de color Dlog-M de 10 bits, con el que se obtiene un rango dinámico más amplio al registrar hasta mil millones de colores. Esto queda bastante por encima de los 16 millones de colores de los perfiles de 8 bits, pudiendo dejar más margen y libertad en la edición posterior del material. Por su parte, el Mavic 2 Zoom cuenta con un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. En este caso es capaz de realizar capturas de 12 megapíxeles, disponiendo un zoom automático híbrido (que combina detección de fase y contraste) de una función de 'Superresolución' que recurre al zoom óptico para realizar nueve fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle).";

function primeraPalabra(cadena) {
	var separador = " ";
	var limite = 1;
	var arregloDeSubCadena = cadena.split(separador, limite);
	return arregloDeSubCadena
}
var PP = primeraPalabra(texto);
var PPcadena = PP.join(); //
console.log("2.");
console.log(texto);
console.log(" ");
console.log("- Primera palabra en mayúsculas");
console.log(PPcadena.toUpperCase());

function palabraMitad(cadena) {
	var palabras = cadena.split(" ");
	var Cpalabras = Math.round(palabras.length / 2); // 
	var separador = " ";
	var limite = Cpalabras;
	var arregloDeSubCadena = cadena.split(separador, limite);
	return arregloDeSubCadena
}
var PM = palabraMitad(texto);
var cantidadPM = PM.length - 1;
var PalabraMitad = PM[cantidadPM];
var PMcadena = PalabraMitad.toString(); //
console.log("- La palabra de la mitad en mayúsculas")
console.log(PMcadena.toUpperCase());

function ultimaPalabra(cadena) {
	var palabras = cadena.split(" ");
	var Cpalabras = palabras.length
	var separador = " ";
	var limite = Cpalabras;
	var arregloDeSubCadena = cadena.split(separador, limite);
	return arregloDeSubCadena
}
var PU = ultimaPalabra(texto);
var cantidadPU = PU.length - 1;
var PalabraUltima = PU[cantidadPU];
var PUcadena = PalabraUltima.toString(); // 
var PUM1 = PUcadena.replace(')', ' ')
var PUM2 = PUM1.replace('.', ' ')
console.log("- Última palabra  en mayúsculas")
console.log(PUM2.toUpperCase());

function SumaPuntos(cadena, caracter) {
	var cantidad = [];
	for (var i = 0; i < cadena.length; i++) {
		if (cadena[i] === caracter) cantidad.push(i); // 
	}
	return cantidad.length;
}
var rSumaPunto = SumaPuntos(texto, ".");
console.log("- Sumar todos los .")
console.log(rSumaPunto);

function SumaComas(cadena, caracter) {
	var cantidad = [];
	for (var i = 0; i < cadena.length; i++) {
		if (cadena[i] === caracter) cantidad.push(i);  // 
	}
	return cantidad.length;
}
var rSumaComa = SumaComas(texto, ",");
console.log("- Sumar todos las ,")
console.log(rSumaComa);
