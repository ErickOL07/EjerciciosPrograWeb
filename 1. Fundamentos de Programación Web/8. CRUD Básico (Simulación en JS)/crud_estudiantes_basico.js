window.onload = function() {
    const formulario = document.getElementById('formularioEstudiante');
    const tabla = document.getElementById('tablaEstudiantes').getElementsByTagName('tbody')[0];

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const edad = document.getElementById('edad').value;

        const fila = tabla.insertRow();

        const celdaNombre = fila.insertCell(0);
        const celdaEdad = fila.insertCell(1);
        const celdaAcciones = fila.insertCell(2);

        celdaNombre.innerHTML = nombre;
        celdaEdad.innerHTML = edad;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'eliminar';
        botonEliminar.addEventListener('click', function() {
            tabla.removeChild(fila);
        });

        celdaAcciones.appendChild(botonEliminar);

        formulario.reset();
    });
}
