window.onload = function() {
    const formulario = document.getElementById('formularioEstudiante');
    const tabla = document.getElementById('tablaEstudiantes').getElementsByTagName('tbody')[0];

    let estudiantes = [];
    let indiceEditar = null;

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const edad = document.getElementById('edad').value;
        const curso = document.getElementById('curso').value;

        if (indiceEditar === null) {
            estudiantes.push({ nombre, edad, curso });
        } else {
            estudiantes[indiceEditar] = { nombre, edad, curso };
            indiceEditar = null;
        }

        formulario.reset();
        renderizarTabla();
    });

    function renderizarTabla() {
        tabla.innerHTML = '';

        estudiantes.forEach(function(estudiante, indice) {
            const fila = tabla.insertRow();

            fila.insertCell(0).innerHTML = estudiante.nombre;
            fila.insertCell(1).innerHTML = estudiante.edad;
            fila.insertCell(2).innerHTML = estudiante.curso;

            const celdaAcciones = fila.insertCell(3);

            const botonEditar = document.createElement('button');
            botonEditar.textContent = 'Editar';
            botonEditar.className = 'boton-editar';
            botonEditar.addEventListener('click', function() {
                document.getElementById('nombre').value = estudiante.nombre;
                document.getElementById('edad').value = estudiante.edad;
                document.getElementById('curso').value = estudiante.curso;
                indiceEditar = indice;
            });

            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.className = 'boton-eliminar';
            botonEliminar.addEventListener('click', function() {
                estudiantes.splice(indice, 1);
                renderizarTabla();
            });

            celdaAcciones.appendChild(botonEditar);
            celdaAcciones.appendChild(botonEliminar);
        });
    }
}
