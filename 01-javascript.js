// JSON -> JAVASCRIPT OBJECT NOTATION 
/* JSON 
LIGERO, INTERCAMBIA DATOS, FACIL ESCRITURA Y LECTURA
{
    NOMBRE: {
        }
    }
}
*/
// TIPO DE DATOS (NUMBER), STRING, BOOL 
// VAR - CONST 
var json = {
nombre:'Jean Pierre',
edad:'24',
soltero:true,
fecha: new Date ('1995/08/13'),

}

console.log(json.nombre)
console.log(json['edad'])

json.nombre = 'nuevo'
 
json.direccion = 'XD'

console.log(json)

delete json.direccion

console.log(json)

/*
console.error()
console.info()
console.warn()
*/