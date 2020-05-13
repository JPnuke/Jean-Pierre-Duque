// interfaces => nos ayudan a tener mejor tipado
// interface
interface persona {
    nombre: string,
    apellido: string,
    edad: number,
    esSoltero: boolean
}


interface correo {
    email?: string
}

interface trabajo extends correo, persona {
    nombreTrabajo: string
}

const policia: trabajo = {
    apellido: '',
    edad: 1,
    esSoltero: false,
    nombre: '',
    nombreTrabajo: ''
}

const valor = 1;
//casteo
//AS
// valor as number;
// <tipoDato>
<number> valor
