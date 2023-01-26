
const nombre = 'David';
const apellido = 'Torres';

//const nombreCompleto = nombre + ' '+apellido;

const nombreCompleto = ` ${nombre} ${apellido}`;//template string

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola '+ nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);