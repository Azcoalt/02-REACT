//areglos en js

const areglo = [1,2,3,4];

let areglo2 = [...areglo,5];

//metodo map es como un siclo
const areglo3 = areglo2.map(function(numero){
    return numero * 2;
})

console.log(areglo);
console.log(areglo2);
console.log(areglo3);