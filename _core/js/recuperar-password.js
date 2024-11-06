const formulario = document.querySelector('.formulario-inicio')
const inputs = document.querySelectorAll('input');
const emailInput = document.getElementById('email');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/;

const mensajeError = document.querySelector('.error');
const mensajeExito = document.querySelector('.exito');


mensajeError.style.display = 'none';
mensajeExito.style.display = 'none';

let campoEmail = false;



const validarFormulario = (e) => {
    switch (e.target.name) {
        case "email":
            validarCampoCorreo(emailRegex, e.target, 'email');
            break;
    }
};


const validarCampoCorreo = (expresion, input, campo) => {
    const grupo = document.getElementById(`${campo}-group`);
    console.log(grupo);
    const iconoCheck = grupo.querySelector('.icono-check');
    console.log(iconoCheck);
    const iconoError = grupo.querySelector('.icono-correoNoValido');
    console.log(iconoError);

    if (expresion.test(input.value)) {
        grupo.classList.remove('formulario-grupo-incorrecto');
        grupo.classList.add('formulario-grupo-correcto');
        iconoCheck.style.display = 'block';
        iconoError.style.display = 'none'
        console.log(`correcto`)
        campoEmail = true;
    } else {
        grupo.classList.add('formulario-grupo-incorrecto');
        grupo.classList.remove('formulario-grupo-correcto');
        iconoCheck.style.display = 'none';
        iconoError.style.display = 'block';
        console.log(`INCORRECTO`)
        campoEmail = false;
    }
};

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campoEmail) {
        console.log(`correo valido`)
        mensajeError.style.display = 'none';
        mensajeExito.style.display = 'block';
        formulario.reset();
    } else {
        console.log(`INVALIDO`)
        mensajeError.style.display = 'block';
        mensajeExito.style.display = 'none';
    }
});


// tecla presionada para verificar
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});