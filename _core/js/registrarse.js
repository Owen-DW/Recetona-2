const formulario = document.querySelector('.formulario-inicio'); // Seleccionar formulario por clase
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('contrasenia');
const inputs = document.querySelectorAll('input');
const botonEnviar = document.getElementById('boton');
const mensajeError = document.querySelector('.error');
const mensajeExito = document.querySelector('.exito');

const iconoOjo = document.querySelector('.bx-show-alt');

mensajeError.style.display = 'none';
mensajeExito.style.display = 'none';

// Expresiones regulares para validación
const expresiones = {

    emailRegex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/,
    passwordRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d#?!@$%^&*-]{8,12}$/
}

const campos = {
    emailInput: false,
    passwordInput: false
}


const validarFormulario = (e) => {
    switch (e.target.name) {
        case "email":
            validarCampo(expresiones.emailRegex, e.target, 'email');
            break;
        case "contrasenia":
            validarCampo(expresiones.passwordRegex, e.target, 'password');
            break;
    }
};



formulario.addEventListener('submit', (e) => {
    console.log(`campos:`, campos);
    e.preventDefault();
    if (campos.email && campos.password) {
        console.log(`enviado`);
        mensajeError.style.display = 'none';
        mensajeExito.style.display = 'block';
        formulario.reset();
    } else {
        console.log(`mensaje esperado error`);
        mensajeError.style.display = 'block';
        mensajeExito.style.display = 'none';
    }
});

const validarCampo = (expresion, input, campo) => {
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
        campos[campo] = true;
    } else {
        grupo.classList.add('formulario-grupo-incorrecto');
        grupo.classList.remove('formulario-grupo-correcto');
        iconoCheck.style.display = 'none';
        iconoError.style.display = 'block';
        console.log(`INCORRECTO`)
        campos[campo] = false;
    }
};



// Funcionalidad del icono del ojo
iconoOjo.addEventListener('click', () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
    iconoOjo.classList.toggle('bx-show-alt');
    iconoOjo.classList.toggle('bx-hide');
});
// tecla presionada para verificar antes de enviar
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});