import recetas from "../../data/recetas.json"
with { type: 'json' };
import configuracion from "../../config/configuracion.json"
with { type: 'json' };

const tabCategoria1 = document.querySelector("#tab-categoria-1");

var linksCategorias = document.querySelectorAll("a.tab-categoria");
var articulos;

linksCategorias.forEach(function(linkCategoria) {
    linkCategoria.addEventListener("click", function() {
        articulos = ""
        Object.entries(recetas).forEach((entry) => {
            const [key, value] = entry;

            if (linkCategoria.innerText === value.Categoria) {
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
    });
});

if (configuracion["modo-test-prod"] === "prod") {
    tabCategoria1.click();
};

if (linkCategoria.innerText === value.Categoria || linkCategoria.innerText === "Todos") {
    const articulo = document.querySelector(`article#${value.Id}`);

    // Mostrar información de la receta
    articulo.querySelector('.item-valor-nombre').innerText = value.Nombre;
    articulo.querySelector('.item-valor-autor').innerText = value.Autor;
    articulo.querySelector('.item-valor-descripcion').innerText = value.Descripcion;
    articulo.querySelector('.item-valor-portada').src = value.Portada;
    articulo.querySelector('.item-valor-rating').innerText = value.Rating;

    // Mostrar campos personalizados
    articulo.querySelector('.item-campo-personalizado_1').innerText = value['personalizado_1.Tiempo'];
    articulo.querySelector('.item-valor-personalizado_1').innerText = 'Tiempo';
    articulo.querySelector('.item-campo-personalizado_2').innerText = value['personalizado_2.Dificultad'];
    articulo.querySelector('.item-valor-personalizado_2').innerText = 'Dificultad';
    articulo.querySelector('.item-campo-personalizado_3').innerText = value['personalizado_3.Comensales'];
    articulo.querySelector('.item-valor-personalizado_3').innerText = 'Comensales';
    articulo.querySelector('.item-campo-personalizado_4').innerText = 'Ingredientes';
    articulo.querySelector('.item-valor-personalizado_4').innerText = value['personalizado_4.Ingredientes'];
    articulo.querySelector('.item-campo-personalizado_5').innerText = 'Preparación';
    articulo.querySelector('.item-valor-personalizado_5').innerText = value['personalizado_5.Preparación'];

    // Mostrar artículo
    articulo.style.display = 'block';
} else {
    // Ocultar artículo
    const articulo = document.querySelector(`article#${value.Id}`);
    articulo.style.display = 'none';
}