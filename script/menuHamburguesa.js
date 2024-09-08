//  seleccionamos los dos elementos que serán clickables

const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");

/* x
  cada ves que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

/* 
  Cuándo se haga click fuera del contenedor de enlaces 
  el menú debe esconderse.
*/

navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});

const opcion_menu_1 = document.getElementById("opcion-menu-1");
const opcion_menu_2 = document.getElementById("opcion-menu-2");
const opcion_menu_3 = document.getElementById("opcion-menu-3");
const opcion_menu_4 = document.getElementById("opcion-menu-4");

opcion_menu_1.addEventListener("click", () => {
    let clasesNavWrapper = navWrapper.classList;
    let cantidadClasesNavWrapper = clasesNavWrapper.length;

    for(let i = 0; i < cantidadClasesNavWrapper; i++) {
        if(clasesNavWrapper[i] === "show") {
            navWrapper.classList.remove("show");
            toggleButton.classList.remove("close");
        } 
    }

});

opcion_menu_2.addEventListener("click", () => {
    let clasesNavWrapper = navWrapper.classList;
    let cantidadClasesNavWrapper = clasesNavWrapper.length;

    for(let i = 0; i < cantidadClasesNavWrapper; i++) {
        if(clasesNavWrapper[i] === "show") {
            navWrapper.classList.remove("show");
            toggleButton.classList.remove("close");
        } 
    }

});

opcion_menu_3.addEventListener("click", () => {
    let clasesNavWrapper = navWrapper.classList;
    let cantidadClasesNavWrapper = clasesNavWrapper.length;

    for(let i = 0; i < cantidadClasesNavWrapper; i++) {
        if(clasesNavWrapper[i] === "show") {
            navWrapper.classList.remove("show");
            toggleButton.classList.remove("close");
        } 
    }

});

opcion_menu_4.addEventListener("click", () => {
    let clasesNavWrapper = navWrapper.classList;
    let cantidadClasesNavWrapper = clasesNavWrapper.length;

    for(let i = 0; i < cantidadClasesNavWrapper; i++) {
        if(clasesNavWrapper[i] === "show") {
            navWrapper.classList.remove("show");
            toggleButton.classList.remove("close");
        } 
    }

});


