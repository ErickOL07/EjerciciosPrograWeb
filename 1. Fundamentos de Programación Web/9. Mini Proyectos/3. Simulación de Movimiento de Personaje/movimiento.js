window.onload = function() {
    const avatar = document.getElementById('avatar');
    const areaJuego = document.getElementById('areaJuego');

    let paso = 20;
    let x = 0;
    let y = 0;

    function mover(dx, dy) {
        x += dx;
        y += dy;

        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x > areaJuego.clientWidth - avatar.clientWidth) {
            x = areaJuego.clientWidth - avatar.clientWidth;
        }
        if (y > areaJuego.clientHeight - avatar.clientHeight) {
            y = areaJuego.clientHeight - avatar.clientHeight;
        }

        avatar.style.left = x + 'px';
        avatar.style.top = y + 'px';
    }

    document.getElementById('arriba').addEventListener('click', function() {
        mover(0, -paso);
    });

    document.getElementById('abajo').addEventListener('click', function() {
        mover(0, paso);
    });

    document.getElementById('izquierda').addEventListener('click', function() {
        mover(-paso, 0);
    });

    document.getElementById('derecha').addEventListener('click', function() {
        mover(paso, 0);
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowUp') {
            mover(0, -paso);
        } else if (event.key === 'ArrowDown') {
            mover(0, paso);
        } else if (event.key === 'ArrowLeft') {
            mover(-paso, 0);
        } else if (event.key === 'ArrowRight') {
            mover(paso, 0);
        }
    });
}
