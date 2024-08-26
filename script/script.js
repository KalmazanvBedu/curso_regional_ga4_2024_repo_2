const boton = document.getElementById("boton");

boton.addEventListener('click', () => {
    
    
    var textoBoton = boton.innerText;

    if(textoBoton.includes("Contacto")) {
        alert("Clic en botón contacto");
    } else {
        alert("Clic en otro botón");
    }
})

