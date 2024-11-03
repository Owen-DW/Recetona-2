
let formulario = document.querySelector('.formularios');
let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#contraseña');
let botonEnviar = document.getElementsByTagName('button')[0];
let mensaje=document.querySelector("#mensaje");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!%$])[A-Za-z\d#?!%$]{8,12}$/;

botonEnviar.disabled = true;
botonEnviar.style.backgroundColor = "red";

function validarEmail() {
    if (!emailRegex.test(emailInput.value)) { 
        mostrarMensajeError("El email no tiene un formato válido. Debe contener un @ en el medio y terminar en .com, .org o .net");
        return false;
        // se dcidio poner un mensaje de en vez de un alert, llamando a la funcion mostrarMensajeError
    }
    mensaje.innerHTML = ""; // una vez se valida que es correcto el mail, se limpia la funcion
    return true;
}

function validarContrasena() {
    if (!passwordRegex.test(passwordInput.value)) {
        mostrarMensajeError("La contraseña debe tener entre 8 y 12 caracteres, incluir una mayuscula, una minuscula, un número y uno de los siguientes caracteres especiales: # ? ! % $");
        return false;
    }
     mensaje.innerHTML = ""
    return true;
}

// se obliga al usuario llenar ambos formularios
function validarCampoVacioEnFormulario() {
    for (let input of [emailInput, passwordInput]) {
        if (input.value.trim() === "") {
            alert(`El campo ${input.placeholder} es obligatorio`);
            return false;
        }
    }
    return true;
}

// verifica cada campo sea distinto de vacio y cumpla con las validaciones de caraceteres (en el segundo if)
function estanCompletosYValidos() {

    if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
        if (validarEmail() && validarContrasena()) {
            botonEnviar.disabled = false;
            botonEnviar.style.backgroundColor = "green";
            return true;
        }
    }
    botonEnviar.disabled = true;
    botonEnviar.style.backgroundColor = "red";
    return false;
}

formulario.addEventListener('submit', (e) => {
    if (!validarCampoVacioEnFormulario() || !validarEmail() || !validarContrasena()) {
        e.preventDefault(); // aca se previene el envio del form si algun campo no es válido
    }
});


emailInput.addEventListener('keyup', estanCompletosYValidos);
passwordInput.addEventListener('keyup', estanCompletosYValidos);

function mostrarMensajeError(mensajeError) {
    mensaje.innerHTML = `<p>${mensajeError}</p>`;
    mensaje.style.color = "red"; 
}
