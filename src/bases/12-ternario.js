
const activo = true;

//let mensaje = '';

//forma tradicional
// if(activo){
//     mensaje = 'Activo';
// }else{
//     mensaje = 'Inactivo';
// }

//forma corta
//const mensaje = (activo) ? 'Activo':'Inactivo';

//forma mas corta
const mensaje = activo && 'Activo'

console.log(mensaje);