//EJERCICIO 5 PARTE 1 - SABER SI APRUEBA O NO

//Este fue el primer formato que me corrió correctamente

// let materias = new Array ();
// let n= prompt("Ingrese el número de materias que está cursando");
// let materia;

// for (i=0; i<n;i++){
//     materia=prompt(`Ingrese el nombre de la materia `+(i+1));
//     materias.push(materia);
// }
// for (materia of materias){
//     materias[materia]=recolectarDatos(materia);
//     document.write(`${materia}:${materias[materia]}<br><br>`);
// }

// function recolectarDatos (materia){
//     let asistencia= prompt(`Asistencia de ${materia}:`);
//     let promedio= prompt(`Promedio de ${materia}:`);
//     let tp= prompt(`Entregas de ${materia}:`);
//     return [asistencia,promedio,tp];
 
// }


// Aca comienza la verdadera solucion de la parte 1
// let materias = new Array ();
// let n= prompt("Ingrese el número de materias que está cursando");
// let materia;
// let asistencia;
// let promedio;
// let tp;

// for (i=0; i<n;i++){
//     materia=prompt(`Ingrese el nombre de la materia `+(i+1));
//     materias[materia]=recolectarDatos(materia);
//     materias.push(materia);
//     document.write(`${materia}:<br>Asistencias: ${materias[materia][0]}, Promedio: ${materias[materia][1]}, Entregas: ${materias[materia][2]}<br>`);
//     document.write(verificacion (asistencia,promedio,tp)+`<br><br>`);
// }
// function verificacion (asistencia,promedio,tp){
//     if (asistencia>=90){
//         document.write(`_____Asistencias en orden<br>`);
//     } else{document.write(`_____Reprobado por asistencias<br>`);
//     }
//     if (promedio>=7){
//         document.write(`_____Promedio en orden<br>`);
//     } else{document.write(`_____Reprobado por Promedio<br>`);
//     }
//     if (tp>=75){
//         document.write(`_____Entregas en orden<br>`);
//     } else{document.write(`_____Reprobado por falta de entregas<br>`);
//     }
//     return "";
// }

// function recolectarDatos (materia){
//     asistencia= prompt(`Asistencia de ${materia}:`);
//     promedio= prompt(`Promedio de ${materia}:`);
//     tp= prompt(`Entregas de ${materia}:`);
//     return [asistencia,promedio,tp];
// }


//EJERCICIO 5 PARTE 2 - ORGANIZAR AGENDA
let trabajo="240 minutos de trabajo";
let estudio="100 minutos de estudio";
let tarea="100 minutos para hacer trabajos prácticos";
let homework ="30 minutos para las tareas del hogar";
let descanso= "10 minutos de descanso";

console.group ("Tareas");
for (var i=0;i<14;i++){
    if (i==0){
        console.groupCollapsed("Semana 1");}
    if (i==7){
        console.groupEnd();
        console.groupCollapsed("Semana 2");
}
console.groupCollapsed("Dia " +(i+1));
console.log(trabajo);
console.log(tarea);
console.log(descanso);
console.log(estudio);
console.log(homework);
console.groupEnd();
}
    console.groupEnd();
    console.groupEnd();
