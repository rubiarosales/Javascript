// //EJERCICIO 3 -PARTE1

// class Celular {
//     constructor (color,peso,rdp, rdc, ram){
//     this.color=color;
//     this.peso=peso;
//     this.resolucionPantalla=rdp;
//     this.resolucionCamara=rdc;
//     this.memoriaRam=ram;
//     this.encendido=false;
//     }

//     pesionarBotonEncendido(){
//         if (this.encendido==false){
//             alert("Prendiendo Celular");
//             this.encendido=true;
//         } else{ alert("Apagando Celular");
//             this.encendido=false;
//     }}

    
//     Reinciar(){
//         if (this.encendido==true){
//             alert("Reiniciando Celular");
//         } else{ alert("El celular está apagado")}
//     }

//     tomarFotos(){
//         alert(`Foto tomada en una resolución de ${this.resolucionCamara}`)
//     }

//     grabarVideos(){
//         alert(`Video grabado en una resolución de ${this.resolucionPantalla}`)
//     }

//     mostrarInfo(){
//         return `
//         Color: ${this.color}</br>
//         Peso:${this.peso}</br>
//         Tamaño:${this.resolucionPantalla}</br>
//         Cámara: ${this.resolucionCamara}</br>
//         Ram: ${this.memoriaRam}</br>
//         `;
//         }
//     }


// // nokia= new Celular ("negro", "230gr","full hd","28px","4gb");
// // motorola= new Celular ("rojo", "250gr","full hd","32px","8gb");
// // sony= new Celular ("blanco", "200gr","hd","12px","2gb");

// // // nokia.pesionarBotonEncendido();
// // // nokia.grabarVideos();
// // // nokia.tomarFotos();
// // // nokia.Reinciar();
// // // nokia.pesionarBotonEncendido();

// // document.write(`
// //     ${nokia.mostrarInfo()}<br>
// //     ${motorola.mostrarInfo()}<br>
// //     ${sony.mostrarInfo()}<br>
// // `);

// //EJERCICIO 3 -PARTE2

// class CelularAltaGama extends Celular{
//     constructor (color,peso,rdp, rdc, ram, cExt){
//         super(color,peso,rdp, rdc, ram);
//         this.resolucionCamaraExtra=cExt;
//         }

//     grabarCamaraLenta(){
//         alert("Empieza grabración en cámara lenta");
//     }

//     reconocimientoFacial(){
//         alert("Empieza reconocimiento facial");
//     }
//     mostrarInfoAltaGama(){
//         return this.mostrarInfo() + `Resolucion de Camara extra:${this.resolucionCamaraExtra}</br>`;
//         }
// }

// nokia= new CelularAltaGama ("negro", "230gr","full hd","28px","4gb","10px");
// motorola= new CelularAltaGama ("rojo", "250gr","full hd","32px","8gb","5px");
// sony= new CelularAltaGama ("blanco", "200gr","hd","12px","2gb","2px");

// document.write(`
//     ${nokia.mostrarInfoAltaGama()}<br><br>
//     ${motorola.mostrarInfoAltaGama()}<br><br>
//     ${sony.mostrarInfoAltaGama()}<br><br>
// `);

//EJERCICIO 3 -PARTE3

class App {
    constructor (descargas, puntuacion, peso){
        this.descargas=descargas;
        this.puntuacion=puntuacion;
        this.peso=peso;
        this.instalada=false;
        this.iniciada=false;
    }

    abrir (){
        if (this.instalada==true){
            if (this.iniciada==false){
            this.iniciada=true;
            alert("App encendida");
        }else {alert("La app ya está abierta")}
    }else {alert("La app no está instalada")}
    }

    cerrar (){
        if (this.instalada==true){
            if (this.iniciada==true){
            this.iniciada=false;
            alert("App cerrada");
        }else {alert("La app ya está cerrada")}
    }else {alert("La app no está instalada")}
    }

    instalar (){
        if (this.instalada==false){
            this.instalada=true;
            alert("App instalada correctamente");
        } else {alert("La app ya está instalada")}
    }

    desinstalar (){
        if (this.instalada==true){
            this.instalada=false;
            alert("App desinstalada correctamente");
        } else {alert("La app aun no está instalada")}
    }

    mostrarApp(){
        return `
        Descargas: ${this.descargas}</br>
        Puntuación: ${this.puntuacion}</br>
        Peso: ${this.peso}</br>
        `
    }

}

app1= new App("1500", "5","20Mb");
app2= new App("500", "3.5","17Mb");
app3= new App("15000", "4","40Mb");

document.write(`
${app1.mostrarApp()}<br><br>
${app2.mostrarApp()}<br><br>
${app3.mostrarApp()}<br><br>
`);

app1.abrir();
app1.instalar();
app1.cerrar();
