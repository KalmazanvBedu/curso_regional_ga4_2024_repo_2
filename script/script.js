// var edad = prompt("Dame tu edad");
// var nombre = prompt("Dame tu nombre");
// var apellido = prompt("Dame tu apellido");
// var pasatiempo = prompt("Dame tu pasatiempo");
// var soltero = prompt("¿Eres soltero (a)?");

// var datos = "Mi nombre es: " + nombre + " " + apellido + "; Mi edad es: " + edad + " años; Mi pasatiempo es: " + pasatiempo + "; ¿Estoy casado? " + soltero

// alert(datos);


/*Se reasignan valores a las variables*/

// edad = 34;

// nombre = "Keny";
// apellido = "Almazán";
// pasatiempo = "Aprender programación";
// soltero = false

// datos = "Mi nombre es: " + nombre + " " + apellido + "; Mi edad es: " + edad + " años; Mi pasatiempo es: " + pasatiempo + "; ¿Estoy casado? " + soltero

// console.log(datos)

//Ciclo for se usa cuando conoces el número de iteraciones que llevarás a cabo

for(var i = 10; i > 0; i--) {
    console.log("El valor de i con for es: " + i);
}

var i = 0;

while(i <= 10) {
    console.log("El valor de i con while es: " + i);
    i++;
}

//If permite decidir qué bloque se sentencias se ejecuta en función de si se cumple o no una condición

var numero = 8;
var numeroTexto = "8";

if(numero === numeroTexto) {
    console.log("Los números son iguales en valor");
}else {
    console.log("Los números son iguales en valor pero no en tipo");
}

var soltero = false;

if(soltero === true) {
    console.log("Es soltero");
}else {
    console.log("No es soltero");
}

var edad = 18;
var genero = "elle";

if(edad >= 18) {
    console.log("Puedes pasar el primer filtro");
    if(genero == "femenino") {
        console.log("Puedes pasar porque es un bar para muejeres");
    }else {
        console.log("Busca un bar para hombres");
    }
}else {
    console.log("No puedes pasar el primer filtro");
}

const boton = document.getElementById{"boton"}




