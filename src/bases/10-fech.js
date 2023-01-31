const appKey = '';//key de acceso

const peticion = fetch('');//de donde tiene que ser estraido

peticion
    .then(resp => resp.json())//lo convierte en un json
    .then(({data}) => {
        const {url} = data.images.original;//se accede a la url
        
        const img = document.createElement('img');//se crea un elemento para el navegador
        img.src = img;

        document.body.append(img);//se muestra en el navegador
    });