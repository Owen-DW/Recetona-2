const formulario = document.getElementById('formulario');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('contrasenia');
const inputs = document.querySelectorAll('input');
const botonEnviar = document.querySelector('button');
const mensajeError = document.getElementById('formulario-mensaje');

// Ocultar mensaje de error inicialmente
mensajeError.style.display = 'none';

// Expresiones regulares para validación
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d#?!@$%^&*-]{8,12}$/;

// Objeto para controlar el estado de validación
const campos = {
    email: false,
    contrasenia: false
}



// Mostrar/ocultar contraseña
const iconoOjo = document.querySelector(".bx")
iconoOjo.addEventListener("click", e => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        iconoOjo.classList.remove('bx-show-alt');
        iconoOjo.classList.add('bx-hide');
    } else {
        passwordInput.type = "password";
        iconoOjo.classList.add('bx-show-alt');
        iconoOjo.classList.remove('bx-hide');
    }
});



const validarFormulario = (e) => {
    switch (e.target.name) {
        case "email":
            validarCampo(emailRegex, e.target, 'email');
            break;
        case "contrasenia":
            validarCampo(passwordRegex, e.target, 'contrasenia');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    const grupo = document.getElementById(`${campo}-group`);
    const iconoValidacion = grupo.querySelector('.validacion-estado');

    if (expresion.test(input.value)) {
        grupo.classList.remove('formulario-grupo-incorrecto');
        grupo.classList.add('formulario-grupo-correcto');
        if (iconoValidacion) {
            iconoValidacion.classList.remove('fa-times-circle');
            iconoValidacion.classList.add('fa-check-circle');
        }
        campos[campo] = true;
    } else {
        grupo.classList.add('formulario-grupo-incorrecto');
        grupo.classList.remove('formulario-grupo-correcto');
        if (iconoValidacion) {
            iconoValidacion.classList.add('fa-times-circle');
            iconoValidacion.classList.remove('fa-check-circle');
        }
        campos[campo] = false;
    }
}


// Event listeners
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.email && campos.contrasenia) {
        formulario.reset();

        document.querySelectorAll('.formulario-grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario-grupo-correcto');
        });

        // Ocultar mensaje de error si estaba visible
        mensajeError.style.display = 'none';

        // Mostrar mensaje de éxito
        const mensajeExito = document.createElement('div');
        mensajeExito.classList.add('formulario-mensaje-exito');
        mensajeExito.textContent = '¡Formulario enviado exitosamente!';
        formulario.appendChild(mensajeExito);

        setTimeout(() => {
            mensajeExito.remove();
        }, 3000);
    } else {
        mensajeError.style.display = 'block';
        setTimeout(() => {
            mensajeError.style.display = 'none';
        }, 3000);
    }
});







//VERIFICAMOS LAS TECLAS QUE PRESIONADAS LFJ
// inputs.forEach((input) => {
//     input.addEventListener('keyup', () => {
//         console.log(`Tecla levantada`);
//     });
// });

// botonEnviar.addEventListener('click', () => {
//     console.log('Botón enviar clickeado');
// });



// //Validamos que el campo de los inputs no esten vacios
// function validarCampoVacioEnFormulario() {
//     let validado = false;
//     for (let i = 0; i < inputs.length; i++) {
//         if (inputs[i].value.trim() === "") {
//             alert(`El campo ${inputs[i].placeholder} es obligatorio`);
//             break;
//         }
//     }
//     return validado;
// }
// formulario.addEventListener('submit', (e) => {
//     if (!validarCampoVacioEnFormulario()) {
//         e.preventDefault();
//     }
// });