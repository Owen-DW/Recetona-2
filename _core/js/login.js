// Obtener elementos del DOM
const formulario = document.querySelector('.formularios');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('contraseña');
const inputs = document.getElementsByTagName('input');
const botonEnviar = document.getElementsByTagName('button')[0];

const iconoOjo = document.getElementById('icono-ojo');

// Expresiones regulares para validación
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.(com|org|net)$/;
const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[#?!%$])[A-Za-z\d#?!%$]{8,12}$/;

//Validamos que el campo de los inputs no esten vacios
function validarCampoVacioEnFormulario() {
    let validado = false;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === "") {
            alert(`El campo ${inputs[i].placeholder} es obligatorio`);
            break;
        }
    }
    return validado;
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
