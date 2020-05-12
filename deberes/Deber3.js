// JavaScript Document

/*DEBER

usar un arreglo de json (nombre, edad, fechaNacimiento, Telf)
- callback crear UN USUARIO (JSON) - buscar en si ya existe debe impirmir q ya existe y sino crearlo
- callback editar un usuario
- callback eliminar un usuario
- callback listar usuario */


var json = {
    arreglo: {
        usuario: [
            'jean',
            '24',
            '1995/08/13',
            '0999999999',
            ' '
        ]
    }
}

var nombreNuevo = 'pedro'
var edadNuevo = '20'
var fNacimientoNuevo = '2000/12/25'
var telefonoNuevo = '8888888888'

function anadirUsuarios(arreglo, nombre, edad, fnacimiento, telefono, cb) {
    arreglo.push(nombre)
    arreglo.push(edad)
    arreglo.push(fnacimiento)
    arreglo.push(telefono)
    cb(
        {
            mensaje: 'Usuario agregado con exito',
            arreglo
        }
    )
}
var index = json.arreglo.usuario.indexOf(nombreNuevo);
if (index !== -1) {
    console.log('Este usuario ya existe');
} else {
    anadirUsuarios(json.arreglo.usuario, nombreNuevo, edadNuevo, fNacimientoNuevo, telefonoNuevo, (mensaje) => {
        console.log(mensaje);

    })
}

function listarUsuarios(arreglo, cb) {
    arreglo
        .forEach(
            usuario => {
                console.log(usuario);
            });
    cb({
        mensaje: 'Lista de usuarios'
    })
}

listarUsuarios(json.arreglo.usuario, (respuestaMensaje) => {
    console.log(respuestaMensaje);
})

var nombreEdit = 'miguel'
var edadEdit = '30'
var fNacimientoEdit = '1990/12/25'
var telefonoEdit = '6666666666'
function editarUsuarios(arreglo, nombre, edad, fnacimiento, telefono, i0, i1, i2, i3, cb) {

    arreglo[i0] = nombre
    
    arreglo[i1] = edad
    
    arreglo[i2] = fnacimiento
  
    arreglo[i3] = telefono
    
    cb({
      mensaje: "Usuario editado con exito",
      arreglo,
    });
  }
  
  editarUsuarios(json.arreglo.usuario, nombreEdit, edadEdit, fNacimientoEdit, telefonoEdit, 0, 1, 2, 3, (respuestaMensaje) => {
    console.log(respuestaMensaje);
  });

function eliminarUsuarios(arreglo, nombre, edad, fnacimiento, telefono, i0, i1, i2, i3, cb) {

    arreglo[i0] = nombre
    
    arreglo[i1] = edad
    
    arreglo[i2] = fnacimiento
  
    arreglo[i3] = telefono
    cb({
      mensaje: "Usuario eliminado con exito",
      arreglo,
    });
  }
  
  eliminarUsuarios(json.arreglo.usuario, " ", " ", " ", " ", 0, 1, 2, 3, (respuestaMensaje) => {
    console.log(respuestaMensaje);
  });

