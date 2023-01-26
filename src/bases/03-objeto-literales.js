
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 542315896,
        lat: 14.235469,
        lng: 13.2546954,
    }
};

console.log(persona);

//clonar el objeto

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona2);