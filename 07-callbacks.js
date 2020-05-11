// JavaScript Document

//API, rest API
// Programación funcional

// callback función que devuelve otra función

/*function programacionFuncional(numero1, () => { }, l) {
}*/


/*
function primeraFuncion() {
    setTimeout(
        () => {
            console.log('primera')
        }, 500
    )

}

function segundaFuncion() {
    console.log('2')
}

//primeraFuncion()
//segundaFuncion()

function saluda(nombre, callback) {
    console.log('saludo a', nombre)
    callback()
}

function funcionCallback() {
    primeraFuncion()
    segundaFuncion()
    console.log('ya salude')
}

saluda('Jean', () => {
console.log('saludaste')
}) */

/*function saludar(nombre) {
    console.log(`ejectuo saludo a ${nombre}`)
    return nombre
}
function peticionUsuario(nombre, callback) {
    callback(nombre)
}
peticionUsuario('Jean', saludar)
peticionUsuario('Jean', (saludar) => {
    console.log(saludar);
})*/

/*var arreglo = ['juan', 'juan', 'juan']
var nombreNuevo = 'juan'
function anadirNombre(arreglo, nombre, indice, cb) {
    //arreglo.push(nombre);
    arreglo[indice] = nombre
    cb(
        {
            mensaje: 'exito',
            arreglo
        }
    )
}
anadirNombre(arreglo, 'kevin', 2, (mensaje) => {
    console.log(mensaje);
});*/

var arregloUsuario = [1, 2, 3, 4, 5]

function listarUsuario(arreglo, cb) {
    arreglo
        .forEach(
            usuario => {
                console.log(usuario);
            });
    cb({
        mensaje: 'lista de usuario'
    })
}

listarUsuario(arregloUsuario, (respuestaMensaje) => {
    console.log(respuestaMensaje);
})



