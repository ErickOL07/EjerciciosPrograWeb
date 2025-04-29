window.onload = function() {
    const formulario = document.getElementById('formularioReserva');
    const mensaje = document.getElementById('mensajeConfirmacion');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        mensaje.innerHTML = "¡Reserva enviada con éxito!";
        formulario.reset();
    });
}
