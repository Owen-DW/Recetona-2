// CONSIGNA 1
document.addEventListener("DOMContentLoaded", function() {

    let imagenAnimacion = document.getElementsByClassName('articulo-categoria');
    for (let i = 0; i <= imagenAnimacion.length; i++) {
        imagenAnimacion[i].addEventListener("click", function() {
            alert("¡CLICKASTE SOBRE LA IMAGEN!");
        });
        imagenAnimacion[i].addEventListener("mouseover", function() {
            imagenAnimacion[i].style.backgroundColor = "#5e030f";
        });
        imagenAnimacion[i].addEventListener("mouseout", function() {
            this.style.backgroundColor = "#5e030f9f"; // Restablece el color original
        });
    }
});





//CONSIGNA 2