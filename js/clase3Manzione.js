let salir = "NO";
let finalizado = "NO";
let nombre = "";
let direccion = "";
let vivienda = "";
let cantidadPersonas = 0;
let edad = 0;
let totalEdad = 0;


console.log("Bienvenido al Censo virtual 2022");
console.log("Si no desea realizar el Censo virtual 2022 escriba en cualquier momento SALIR");

while (salir == "NO" && finalizado == "NO"){

    nombre = prompt("Ingrese su nombre");
    if(nombre == "SALIR"){
        salir =  "SI";
        break;
    }
    
    direccion = prompt("Ingrese la dirección de la vivienda");
    if(direccion == "SALIR"){
        salir =  "SI";
        break;
    }

    while (vivienda.toString().toLowerCase() != "casa" && vivienda.toString().toLowerCase() != "departamento"){
        
        vivienda = prompt("¿Vive en una casa o un departamento?");
        if(vivienda == "SALIR"){
            salir =  "SI";
            break;
        }else if (vivienda.toString().toLowerCase() != "casa" && vivienda.toString().toLowerCase() != "departamento"){
            alert("El dato ingresado es invalido");
        }

    }
    
    if(salir ==  "SI"){
        break;
    }

    while (cantidadPersonas < 1 || isNaN(parseInt(cantidadPersonas))){
        cantidadPersonas = prompt("¿Cuantas personas viven en el vivienda?");
        if(cantidadPersonas == "SALIR"){
            salir =  "SI";
            break;
        }else if (cantidadPersonas < 1 || isNaN(parseInt(cantidadPersonas))){
            alert("Se debe informar un número mayor a 0");
        }
    }
    
    if(salir ==  "SI"){
        break;
    }

    for ( let i = 0 ; i < cantidadPersonas ; i++){
        edad = 0;

        while(edad <= 0 || isNaN(parseInt(edad))){
          
            edad = prompt("¿Cuantos años tiene el integrante "+ (i+1)+ "?");
            
            
            if(edad == "SALIR"){
                salir =  "SI";
                break;
            }else if (edad <= 0 || isNaN(parseInt(edad))){
                alert("La edad debe ser un número positivo");
            }else {
                totalEdad = totalEdad + parseInt(edad);
            }
          
        }
    }

    finalizado = "SI";
}

if (salir ==  "SI"){
    console.log("Ha ingresado SALIR, por lo tanto se da por finalizado el Censo sin registrar información.");
}else if (finalizado == "SI" ){

    console.log("Gracias " + nombre +" Por finalizar el Censo virtual 2022");
    console.log("Han quedado registrados los siguientes datos");
    console.log("Dirección de la vivienda: ", direccion);
    console.log("Tipo de vivienda: ", vivienda);
    if (cantidadPersonas == 1) {
        console.log("En el hogar vive: " + cantidadPersonas + " persona");
    } else {
        console.log("En el hogar viven: " + cantidadPersonas + " personas");
    }
    console.log("esdad: ", totalEdad);
    console.log("El promedio de edad de la vivienda es de: "+ (totalEdad / cantidadPersonas));
}
