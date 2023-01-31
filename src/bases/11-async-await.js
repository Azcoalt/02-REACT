//async es una promesa

const getImagen = async () => {
    try {
        const appKey = '';
        //await esprea aque se resuelva la condicion para que continue con el codigo
        const resp = await fetch('');
        const {data} = await resp.json();

        const {url} = data.img.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error);
    }
}