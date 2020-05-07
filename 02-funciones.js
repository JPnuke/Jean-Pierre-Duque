function saludar() {
    return 'hola'
}

saludar()
console.log(saludar())

// funciones anonimas

var funcionAnonima = function() {
    return 'funcion anonima'
}
console.log(funcionAnonima())

// Funciones fat arrow function
var funcionesFlechaGorda =(a, b) =>{
return a+b;
}
console.log(funcionesFlechaGorda(' a ', {a:1}))

var json ={
    suma:(a, b) =>{
return a + b;
    }
}
console.log(jsom.suma(1, 2)); 
