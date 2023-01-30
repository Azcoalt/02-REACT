import {getHeroeById} from './bases/08-imp-exp';

// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         //console.log('2 segundos despues');
//         const p1 = getHeroeById(2);
//         //console.log(heroe);
//         resolve(p1);
//         reject('no se pududo en contrar el heroe');
//     }, 2000);
// });

// promesa.then((heroe)=>{
//     console.log('heroe',heroe);
// }).catch(err => console.warn(err));


const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //console.log('2 segundos despues');
            const p1 = getHeroeById(id);
            //console.log(heroe);
            if(p1){
                resolve(p1);
            }else{
                reject('no se pududo en contrar el heroe');
            } 
        }, 4000);
    });
}

getHeroeByIdAsync(12).then( heroe => console.log('heroe',heroe)).catch(err => console.warn(err));