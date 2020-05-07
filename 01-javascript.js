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
var json2={
    nombre:'Jean Pierre',
edad:'24',
soltero:true,
fecha: new Date ('1995/08/13'),
interese: {
    hobbies: [
        'futbol',
        'ps4'
    ],
    peliculas: [
        {
            nombre: '',
            tipo: '',
            esBuena: true,
        },
        {
            nombre: '',
            tipo: '',
            esBuena: true,
        }
    ]
},
familia: [
    {
        nombre: 'Padre',
        edad: 1,
    },
    {
        nombre: 'Madre',
        edad: 1,
    }
]
}


// stringify =  todo a  string

var json2String = JSON.stringify(json2)
console.log(json2)
console.log(jsonString)

//parce 
var jsonParce = JSON.parse(jsonString)
console.log(jsonParse)

