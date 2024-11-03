
let formulario = document.querySelector('.formularios');
let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#contraseña');
let botonEnviar = document.getElementsByTagName('button')[0];
let mensaje=document.querySelector("#mensaje");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!%$])[A-Za-z\d#?!%$]{8,12}$/;

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

//llamamos a la funcion a traves de addEvnet d
formulario.addEventListener
('submit', (e) => {
    if (!validarCampoVacioEnFormulario()) {
        e.preventDefault();
    }
});

//CHAT
// 2) Función para verificar si los campos están completos
function estanCompletosLosCampos() {
    // Verificamos que ambos campos no estén vacíos
    if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
        botonEnviar.enable  = false; // Habilitamos el botón
        botonEnviar.style.backgroundColor= "#fff5f5";
    } else {
        botonEnviar.disabled = true; // Deshabilitamos el botón
        alert("COMPLETA BOLUDON");
        botonEnviar.style.backgroundColor="green";
        
    }
}

// Añadimos eventos para detectar cambios en los campos
emailInput.addEventListener('click', estanCompletosLosCampos);
passwordInput.addEventListener('click', estanCompletosLosCampos);

// Inicialmente deshabilitamos el botón al cargar la página
botonEnviar.disabled = true;
