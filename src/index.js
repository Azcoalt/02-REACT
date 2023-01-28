import {heroes} from './data/heroes'

//regresa solo uno
const getHeroeById = (id) =>{
    return heroes.find( heroe => heroe.id === id);
};
console.log(getHeroeById(2));

//regresa todos los que cumplan la condicion
const getHeroeByOwner = (owner) => {
    return heroes.filter(heroe => heroe.owner === owner);
};
console.log(getHeroeByOwner('DC'));