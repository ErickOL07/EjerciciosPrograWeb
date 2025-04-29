function cambiar() {
    
    let elementos = document.getElementsByClassName('parrafo')

    for (let i = 0; i < elementos.length; i++) {
        elementos[i].innerHTML = '¡Has hecho click!';
    }

}