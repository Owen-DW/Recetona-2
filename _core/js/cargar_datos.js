import recetas from "../../data/recetas.json"with { type: 'json' };
import configuracion from "../../config/configuracion.json"with { type: 'json' };

const tabCategoriaInicial = document.querySelector("#btnTodos");
const tab1 = document.querySelector("#tab-categoria-1");
const tab2 = document.querySelector("#tab-categoria-2");
const tab3 = document.querySelector("#tab-categoria-3");
const tab4 = document.querySelector("#tab-categoria-4");
const tab5 = document.querySelector("#tab-categoria-5");

let linksCategorias = document.querySelectorAll("a.tab-categoria");
var articulos;
var cantidadRecetas = 0;

console.log(linksCategorias[0].innerText);
console.log(linksCategorias[1].textContent);



linksCategorias.forEach(function(linkCategoria) {


    console.log("recorriendoLosTab: ");
    console.log(linkCategoria);

    linkCategoria.addEventListener("click", function() {
        console.log("Agregando evento: ");
        articulos = ""

        console.log("creando 10 articulos: ");

        if (linkCategoria.innerText == "Todos") {
            tabCategoriaInicial.removeEventListener;
            mostrartodo();
        } else {

            crearArticulos(10)


            Object.entries(recetas).forEach((entry) => {

                console.log("recorriendo el recetas: ");

                const [key, value] = entry;

                console.log(entry);
                console.log(key + value);


                if (linkCategoria.innerText === value.Categoria) {

                    console.log("Verificando si es igual: " + linkCategoria.innerText + " " + value.Categoria);


                    document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > p.item-valor-nombre").innerText = value["Nombre"];
                    document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > p.item-valor-autor").innerText = value["Autor"];
                    document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > img.item-valor-portada").src = value["Portada"];
                    document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > img.item-valor-portada").alt = value["Nombre"];
                    document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > p.item-valor-descripcion").innerText = value["Descripcion"];
                    document.querySelector("article." + value["Id"].split("-")[1] + " > header.header-articulo > p.item-valor-rating").innerText = value["Rating"];




                    for (const property in value) {


                        switch (property.split(".")[0]) {
                            case "personalizado_1":
                                document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > h4.item-campo-personalizado_1").innerText = property.split(".")[1];
                                document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > p.item-valor-personalizado_1").innerText = value[property];
                                break;
                            case "personalizado_2":
                                document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > h4.item-campo-personalizado_2").innerText = property.split(".")[1];
                                document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > p.item-valor-personalizado_2").innerText = value[property];
                                break;
                            case "personalizado_3":
                                document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > h4.item-campo-personalizado_3").innerText = property.split(".")[1];
                                document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > p.item-valor-personalizado_3").innerText = value[property];
                                break;
                            case "personalizado_4":
                                document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > h4.item-campo-personalizado_4").innerText = property.split(".")[1];
                                document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > p.item-valor-personalizado_4").innerText = value[property];
                                break;
                            case "personalizado_5":
                                document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > h4.item-campo-personalizado_5").innerText = property.split(".")[1];
                                document.querySelector("article." + value["Id"].split("-")[1] + " > div.detalle-articulo > p.item-valor-personalizado_5").innerText = value[property];
                                break;
                        }

                    };



                    document.querySelector("article." + value["Id"].split("-")[1]).id = value["Id"];

                };



            });
        }
    });


});


if (configuracion["modo-test-prod"] === "prod") {
    tabCategoriaInicial.click();
};




function crearArticulos(cuantos) {


    let cuerpo = document.getElementById("seccion-categoria")
    let nroCategoria = 1;
    let contador = 0;
    let nro = 1;

    cuerpo.innerHTML = "";

    for (let index = 0; index < cuantos; index++) {


        // Crear el elemento <article> con sus atributos
        const article = document.createElement("article");

        if (nro == 10) {
            article.id = "categoria0" + nroCategoria + "-item" + nro;
            article.classList.add("articulo-categoria", "item" + nro);
        } else {
            article.id = "categoria0" + nroCategoria + "-item0" + nro;
            article.classList.add("articulo-categoria", "item0" + nro);
        }



        // Crear el <header> y agregarle los elementos hijos
        const header = document.createElement("header");
        header.classList.add("header-articulo");

        const pNombre = document.createElement("p");
        pNombre.classList.add("item-valor-nombre");

        const pAutor = document.createElement("p");
        pAutor.classList.add("item-valor-autor");

        const imgPortada = document.createElement("img");
        imgPortada.classList.add("item-valor-portada");
        imgPortada.src = "";
        imgPortada.alt = "img_receta";

        const pDescripcion = document.createElement("p");
        pDescripcion.classList.add("item-valor-descripcion");

        const pRating = document.createElement("p");
        pRating.classList.add("item-valor-rating");
        // Agregar los elementos <p> y <img> al <header>
        header.append(pNombre, pAutor, imgPortada, pDescripcion, pRating);
        // Crear el <div> detalle-articulo y sus elementos personalizados
        const detalleArticulo = document.createElement("div");
        detalleArticulo.classList.add("detalle-articulo");

        for (let i = 1; i <= 5; i++) {
            const h4Personalizado = document.createElement("h4");
            h4Personalizado.classList.add(`item-campo-personalizado_${i}`);
            const pPersonalizado = document.createElement("p");
            pPersonalizado.classList.add(`item-valor-personalizado_${i}`);
            // Agregar cada par de <h4> y <p> al <div> detalle-articulo
            detalleArticulo.append(h4Personalizado, pPersonalizado);
        }
        // Agregar <header> y <div> al <article>
        article.append(header, detalleArticulo);
        // Agregar el <article> al DOM, por ejemplo, al <body> o a otro contenedor
        cuerpo.appendChild(article);
        nro++;
        contador++;
        if (contador == 10) {
            contador = 0;
            nro = 1;
            nroCategoria++;
        }
    }
}





function mostrartodo() {

    crearArticulos(recetas.length)


    recetas.forEach((receta) => {

        const article = document.querySelector(`article#${receta.Id}`);

        if (article) {



            article.querySelector("header.header-articulo > p.item-valor-nombre").innerText = receta.Nombre;
            article.querySelector("header.header-articulo > p.item-valor-autor").innerText = receta.Autor;
            const portadaImg = article.querySelector("header.header-articulo > img.item-valor-portada");
            portadaImg.src = receta.Portada;
            portadaImg.alt = receta.Nombre;
            article.querySelector("header.header-articulo > p.item-valor-descripcion").innerText = receta.Descripcion;
            article.querySelector("header.header-articulo > p.item-valor-rating").innerText = receta.Rating;


            for (const property in receta) {

                if (property.startsWith("personalizado_")) {
                    const campo = property.split(".")[1];
                    const valor = receta[property];


                    const campoElemento = article.querySelector(`div.detalle-articulo > h4.item-campo-${property}`);
                    const valorElemento = article.querySelector(`div.detalle-articulo > p.item-valor-${property}`);

                    if (campoElemento && valorElemento) {
                        campoElemento.innerText = campo;
                        valorElemento.innerText = valor;
                    }
                }
            }
        }
    });
}

//Lógica de buscador
let resultado = document.querySelector(`#seccion-categoria`);
recetas.forEach((receta)=> {
    resultado.innerHTML+= `
                  <article id="${receta.Id}" class="articulo-categoria item01">
      <header class="header-articulo">
        <p class="item-valor-nombre">${receta.Nombre}</p>
        <p class="item-valor-autor">${receta.Autor}</p>
        <img class="item-valor-portada" src="${receta.Portada}" alt="${receta.Nombre}" id="imagen-${receta.Id}">
        <p class="item-valor-descripcion">${receta.Descripcion}</p>
        <p class="item-valor-rating">${receta.Rating}</p>
      </header>
      <div class="detalle-articulo">
<h4 class="item-campo-personalizado_1">Tiempo: ${receta["personalizado_1.Tiempo"]}</h4>
<p class="item-valor-personalizado_1">${receta["personalizado_1.Tiempo"]}</p>

<h4 class="item-campo-personalizado_2">Dificultad: ${receta["personalizado_2.Dificultad"]}</h4>
<p class="item-valor-personalizado_2">${receta["personalizado_2.Dificultad"]}</p>

<h4 class="item-campo-personalizado_3">Comensales: ${receta["personalizado_3.Comensales"]}</h4>
<p class="item-valor-personalizado_3">${receta["personalizado_3.Comensales"]}</p>

<h4 class="item-campo-personalizado_4">Ingredientes: ${receta["personalizado_4.Ingredientes"]}</h4>
<p class="item-valor-personalizado_4">${receta["personalizado_4.Ingredientes"]}</p>

<h4 class="item-campo-personalizado_5">Preparación: ${receta["personalizado_5.Preparación"]}</h4>
<p class="item-valor-personalizado_5">${receta["personalizado_5.Preparación"]}</p>
      </div>
    </article>
    `
});
let buscador = document.querySelector(`.input-buscador`);
buscador.addEventListener("keyup",()=>{
    let valor = buscador.value.toLowerCase().trim();
    let recetasFiltradas= recetas.filter(receta=> receta.Nombre.toLowerCase().trim().indexOf(valor)>-1);
    resultado.innerHTML = "";

    recetasFiltradas.forEach((receta)=>{
        resultado.innerHTML+=`
          <article id="${receta.Id}" class="articulo-categoria item01">
      <header class="header-articulo">
        <p class="item-valor-nombre">${receta.Nombre}</p>
        <p class="item-valor-autor">${receta.Autor}</p>
        <img class="item-valor-portada" src="${receta.Portada}" alt="${receta.Nombre}" id="imagen-${receta.Id}">
        <p class="item-valor-descripcion">${receta.Descripcion}</p>
        <p class="item-valor-rating">${receta.Rating}</p>
      </header>
      <div class="detalle-articulo">
      <h4 class="item-campo-personalizado_1">Tiempo: ${receta["personalizado_1.Tiempo"]}</h4>
<p class="item-valor-personalizado_1">${receta["personalizado_1.Tiempo"]}</p>

<h4 class="item-campo-personalizado_2">Dificultad: ${receta["personalizado_2.Dificultad"]}</h4>
<p class="item-valor-personalizado_2">${receta["personalizado_2.Dificultad"]}</p>

<h4 class="item-campo-personalizado_3">Comensales: ${receta["personalizado_3.Comensales"]}</h4>
<p class="item-valor-personalizado_3">${receta["personalizado_3.Comensales"]}</p>

<h4 class="item-campo-personalizado_4">Ingredientes: ${receta["personalizado_4.Ingredientes"]}</h4>
<p class="item-valor-personalizado_4">${receta["personalizado_4.Ingredientes"]}</p>

<h4 class="item-campo-personalizado_5">Preparación: ${receta["personalizado_5.Preparación"]}</h4>
<p class="item-valor-personalizado_5">${receta["personalizado_5.Preparación"]}</p>
      </div>
    </article>
        `;
    });


});


