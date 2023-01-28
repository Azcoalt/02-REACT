const personajes = ['goku','vegeta','trungs'];
const [ , , p3] = personajes;
console.log(p3)

const retornaAreglo = () =>{
    return ['ABC',123];
}

const [letras, numeros] = retornaAreglo();
console.log(letras, numeros);

const retornaValor = (valor) =>{
    return [valor, () => {console.log('Hola Mundo')}]
}

const [nombre, setNombre] = retornaValor('Goku');
console.log(nombre);
setNombre();