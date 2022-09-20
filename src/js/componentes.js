import '../css/componentes.css'
// import webpackimg from '../assets/img/webpack-logo.png'

export const despedida = (nombre) => {
    console.log('Creando una etique h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}`

    document.body.append(h1);

    //Img
    //     console.log(webpackimg); 
    //     const img = document.createElement('img');
    //     img.src = webpackimg;
    //     document.body.append(img);
}