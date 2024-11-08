    let listaDeCategorias = document.getElementsByClassName("#seccion-categoria");
    let categoria = listaDeCategorias[0].getElementById("categoria01-item01");
    let ratingDeLaCategoria = categoria.querySelector(".item-valor-rating");

    alert(ratingDeLaCategoria.textContent);

    
    // let estrellas = document.querySelectorAll(".estrella-disenio");
    // let numeroRating = document.getElementById("valor-rating");
    // let contador = 0;
    // numeroRating.innerHTML = contador;
    
    // for (let i = 0; i < estrellas.length; i++) {
        
    //     estrellas[i].addEventListener("click", function() {
    //         let estrellaClickeada = i;
            
    //         for (let j = 0; j < estrellas.length; j++) {
    //             if (j <= estrellaClickeada) {
    //                 estrellas[j].src = "/assets/img/estrella-llena.png";
    //                 contador = j + 1; 
    //             } else {
    //                 estrellas[j].src = "/assets/img/estrella-vacia.png";
    //             }
    //         } 
    //         numeroRating.innerHTML = contador;
    //     });
    // }

// let valorRating = document.querySelectorAll(".item-valor-rating ");

// function valorDelRating(valor){
//     for(let i = 0; i < valor; i++){
//         estrellas[i].src = "/assets/img/estrella-llena.png";
//     }
// }

// valorDelRating(4);

// function obtenerRating(contenedorId) {
//     let contenedor = document.getElementById(contenedorId);
//     let estrellas = contenedor.querySelector("#item-valor-rating");
        
//     if(estrellas > 0){
//         let valorRating = estrellas;
//         alert(valorRating);
//         return valorRating;
//     } else {
//         console.log(valorRating)
//         return null;
//     }
//     // for(let i = 0; i < rating; i++){
//     //         if(i <= rating){
//     //             estrellas[i].src = "/assets/img/estrella-llena.png";
//     //         } else {
//     //             estrellas[i].src = "/assets/img/estrella-vacia.png";
//     //     }
//     // }
// }

// obtenerRating("categoria00-item01");
// obtenerRating("categoria01-item02");
let contenedor = document.getElementById("categoria01-item01");
let estrellas = contenedor.querySelector(".item-valor-rating").textContent;

console.log(estrellas);

// function obtenerRating() {
//     let contenedor = document.getElementById("categoria01-item01");
//     let estrellas = contenedor.querySelector(".item-valor-rating").textContent;
        
//         alert(estrellas);
//         console.log(estrellas);
//     }

// obtenerRating();