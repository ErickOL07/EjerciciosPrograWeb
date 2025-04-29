window.onload = function() {
    const boton = document.getElementById('botonOcultar');
    const parrafos = document.querySelector('.parrafos');

    boton.addEventListener('click', function() {
        if (parrafos.style.display === 'none') {
            parrafos.style.display = 'block';
        } else {
            parrafos.style.display = 'none';
        }
    });
}
