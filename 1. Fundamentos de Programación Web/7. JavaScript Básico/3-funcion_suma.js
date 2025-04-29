window.onload = function() {

    const pantalla = document.getElementById('resultado');
    const numero = document.getElementsByClassName('numero');
    const operacion = document.getElementsByClassName('operacion');
    const limpiar = document.getElementById('limpiar');
    const igual = document.getElementById('igual');
    let op = true;
    let num1 = null;
    let num2 = null;
    let calc = null;
    let resultado = null;

    for (let i = 0; i < numero.length; i++) {
        numero[i].addEventListener('click', function() {
            pantalla.value += numero[i].textContent;
            if (calc == null) {
                if (num1 == null) {
                    num1 = numero[i].textContent;
                    resultado = num1;
                } else {
                    num1 += numero[i].textContent;
                    resultado = num1;
                }
                op = false;
            } else {
                if (num2 == null) {
                    num2 = numero[i].textContent;
                    resultado = num2;
                } else {
                    num2 += numero[i].textContent;
                    resultado = num2;
                }
                op = true;
            }
        });
    }

    for (let i = 0; i < operacion.length; i++) {
        operacion[i].addEventListener('click', function() {
            if (op == false){
                pantalla.value += operacion[i].textContent;
                calc = operacion[i].textContent;
                op = true;
            } else if (op == true && num2 != null && num1 != null && calc != null) {
                if (calc == '+') {
                    resultado = parseFloat(num1)+parseFloat(num2);
                } else if (calc == '-') {
                    resultado = parseFloat(num1)-parseFloat(num2);
                } else if (calc == '*') {
                    resultado = parseFloat(num1)*parseFloat(num2);
                } else {
                    if (parseFloat(num2) != 0) {
                        resultado = parseFloat(num1)/parseFloat(num2);
                    } else {
                        alert('No se puede dividir entre 0.');
                        return;
                    }
                }
                pantalla.value += operacion[i].textContent;
                calc = operacion[i].textContent;
                num1 = resultado;
                num2 = null;
            }
        });
    }

    limpiar.addEventListener('click', function() {

        pantalla.value = '';
        op = true;
        calc = null;
        num1 = null;
        num2 = null;
        resultado = null;

    });

    igual.addEventListener('click', function() {

        if (op == true && num2 != null && num1 != null && calc != null) {
            if (calc == '+') {
                resultado = parseFloat(num1)+parseFloat(num2);
            } else if (calc == '-') {
                resultado = parseFloat(num1)-parseFloat(num2);
            } else if (calc == '*') {
                resultado = parseFloat(num1)*parseFloat(num2);
            } else {
                if (parseFloat(num2) != 0) {
                    resultado = parseFloat(num1)/parseFloat(num2);
                } else {
                    alert('No se puede dividir entre 0.');
                    return;
                }
            }
        }
        pantalla.value = resultado;
        op = false;
        calc = null;
        num1 = resultado;
        num2 = null;
        resultado = null;
    });

}