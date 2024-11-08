let estrellas = document.querySelectorAll(".estrella-disenio");
let numeroRating = document.getElementById("valor-rating");
let contador = 0;
numeroRating.innerHTML = contador;

for (let i = 0; i < estrellas.length; i++) {
    
    estrellas[i].addEventListener("click", function() {
        let estrellaClickeada = i;
        
        for (let j = 0; j < estrellas.length; j++) {
            if (j <= estrellaClickeada) {
                estrellas[j].src = "/assets/img/estrella-llena.png";
                contador = j + 1; 
            } else {
                estrellas[j].src = "/assets/img/estrella-vacia.png";
            }
        } 
        numeroRating.innerHTML = contador;
    });
}