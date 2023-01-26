//funciones js

function saludar(nombre){
    return `Hola ${nombre}`;
}

//funcion flecha
const saludar2 = (nombre) =>{
    return `Hola ${nombre}`;
}

//forma corta
const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));

//con areglos
const getUser = () => ({
    udi:'ABCD12350',
    userName:'Azcoalt',
});

const user = getUser();
console.log(user);

function getUsuarioActivo(nombre){
    return{
        udi:'ABC567',
        userName:nombre,
    }
};

const usuarioActivo = getUsuarioActivo('David');
console.log(usuarioActivo);

const getUsuariActivo2 = (nombre) => ({
    udi:'ABC567',
    username:nombre
});

const usuarioActivo2 = getUsuariActivo2('Ximena');
console.log(usuarioActivo2);