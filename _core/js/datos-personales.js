let inputEmail = document.querySelector("#correo");
let inputContrasenia = document.querySelector("#contraseña");
let inputNombre = document.querySelector("#nombre");
let inputApellido = document.querySelector("#apellido");
let inputTipo = document.querySelector("#tipo-docu");
let inputNumeroDocumento = document.querySelector("#numero-doc");
let inputFechaNacimiento = document.querySelector("#fecha-nac");
let inputTelefono = document.querySelector("#telefo-cel");
let inputemailSecundario = document.querySelector("#email-secundary");
let formulario = document.getElementById("formulario");
let formulario2 = document.getElementById("formulario2");
let warningDeDatos = document.getElementById("warning-datos");
let warningDeMiUsuario = document.getElementById("warning-miUsuario");
let botonGuardarCambios2 = document.getElementById("boton-guardar-datos");
let botonGuardarCambios1 = document.getElementById("boton-guardar-usuario");
botonGuardarCambios1.disabled = true;
inputNumeroDocumento.disabled = true;
let regexCorreo = /^[\w-_.]+@[\w]+\.(com|net|or)$/;
let regexContrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!%$])[\w#?!%$]{8,12}$/;
let regexNombreApellido = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ'-\s]+$/;
let regexNumeroDocumento = /^([\d]){6,8}$/;
let regexNumeroDeTelefono = /^(\()?(\+)?([\d]{2,3})?(\))?[-]?([\d]){2,3}[-]?([\d]){4}[-]?(([\d]){4})$/;

// funcion verifica que el campo del email este vacio --> deshabilita el boton
inputEmail.addEventListener("keyup", function(event){
    let valor = event.target.value.trim();
    let boton = document.getElementById("boton-guardar");
    
    if(valor.length > 0){
        boton.classList.remove("desactivado");
        botonGuardarCambios1.disabled = false;
    } else {
        boton.classList.add("desactivado");
        botonGuardarCambios1.disabled = true;
    }
})

// funcion verifica que el input de tipo documento tenga una opción seleccionada
inputTipo.addEventListener("click", function(){
    if(inputTipo.value !== ""){
        inputNumeroDocumento.disabled = false;
    } else {inputNumeroDocumento.disabled = true}
})

// validaciones del primer formulario "Mi Usuario"
formulario.addEventListener("submit", (e)=> {
    e.preventDefault();
    let error = false;
    let mensajesDeError = "";

    if(inputEmail.value.trim() !== ""){
        if(!regexCorreo.test(inputEmail.value)){             
            mensajesDeError += "<p>*Ingrese un correo válido</p>";
            error = true;
        } else {
            botonGuardarCambios1.disabled = false;
        } 
    } else {
        mensajesDeError += "<p>*El campo de email está vacío</p>";
        error = true;
    }  
    
    if(!regexContrasenia.test(inputContrasenia.value)){
        mensajesDeError += "<p>*Debe ingresar una contraseña válida</p>";
        error = true;
    }

    if(error){
        warningDeMiUsuario.innerHTML = mensajesDeError;
    } else {
        formulario.submit();
    }
});

// validaciones del segundo formulario "Datos Personales"
formulario2.addEventListener("submit", (e)=> {
    e.preventDefault();
    let error = false;
    let mensajesDeError = "";
    let fechaDeHoy = new Date();
    let fechaNac = new Date(document.querySelector("#fecha-nac").value);  
    
    if(!regexNombreApellido.test(inputNombre.value)){
        error = true;
        mensajesDeError += "<p>*Ingrese un nombre válido</p>";
    } 
    
    if(!regexNombreApellido.test(inputApellido.value)){
        error = true;
        mensajesDeError += "<p>*Ingrese un apellido válido</p>";
    } 

    if(inputTipo.value == ""){
        error = true;
        mensajesDeError += "<p>*Elija una opcion de tipo documento</p>";
    } 

    if(!regexNumeroDocumento.test(inputNumeroDocumento.value) && !inputNumeroDocumento.disabled){
        error= true;
        mensajesDeError += "<p>*Ingrese un número de documento válido</p>"
    } 

    if((fechaDeHoy.getFullYear() - fechaNac.getFullYear()) < 16){
        error = true;
        mensajesDeError += "<p>*Debes ser mayor de 16 años</p>"
    } 

    if(!regexNumeroDeTelefono.test(inputTelefono.value)){
        error = true;
        mensajesDeError += "<p>*Introduce un número de teléfono válido</p>"
    } 

    if(!regexCorreo.test(inputemailSecundario.value)){
        error = true;
        mensajesDeError += "<p>*Ingrese un correo secundario válido</p>"
    }

    if(error){
        warningDeDatos.innerHTML = mensajesDeError;
    } else {
        formulario2.submit();
    }
});
