window.onload = function() {
    const formulario = document.getElementById('formularioRegistro');
    const mensaje = document.getElementById('mensajeConfirmacion');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        mensaje.innerHTML = "¡Registro enviado con éxito!";
        formulario.reset();
    });
}
