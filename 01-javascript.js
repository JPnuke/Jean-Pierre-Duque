var json = {
nombre:'Jean Pierre',
edad:'24',
soltero:true,
fecha: new Date ('1995/08/13'),

}

console.log(json.nombre)
console.log(json['edad'])
 
json.direccion = 'XD'
delete json.direccion

console.log(json)