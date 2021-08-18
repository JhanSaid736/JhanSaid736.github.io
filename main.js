var imagenes = ['img/imagenCompleta.jpg', 'img/imagen_1.jpg', 'img/imagen_2.jpg', 'img/imagen_3.jpg'],
    cont = 0;

function carrocel(contenedor){
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;
        
        if(tgt == atras){
            if(cont > 0){
                img.src = imagenes[cont - 1];
                cont --;
            } else{
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }

        } else if(tgt == adelante){
            if(cont < imagenes.length - 1){
                img.src = imagenes[cont + 1];
                cont ++;
            } else{
                img.src = imagenes [0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor')

    carrocel(contenedor);
});
