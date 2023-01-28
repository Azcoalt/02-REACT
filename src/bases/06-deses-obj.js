//Desestructuracion

const persona = {
    nombre:'David',
    edad:22,
    clave:'ieiuahfiua',
};

//desestructuracion
//const {nombre, edad, clave} = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

//desestrucruracion flecha
const useContext2 = ({nombre,edad,}) =>{
    //console.log(nombre,edad);
    return{
        nombreClave: nombre,
        anios: edad,
        latlg:{
            lat:153656,
            long:-635244,
        },
    };
};


const {nombreClave, anios, latlg:{lat,long,}} = useContext2(persona);
//retornaPersona(persona);
console.log(nombreClave,anios);
console.log(lat,long);