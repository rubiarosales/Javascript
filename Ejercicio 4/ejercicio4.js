let materias={
    fisica:["Prof.Rodriguez","pedro","pepito","cofla","maria"],
    programacion:["Prof.Dalto","pedro","juan","pepito"],
    logica:["Prof.Perez","pedro","juan","pepito","cofla","maria"],
    quimica:["Prof.Rodriguez","pedro","juan","pepito","cofla","maria"]
}

function obtenerInformacion(materia){
    if (materias[materia] !== undefined){
        return [materias[materia],materia];
    } else {
        return "Error";
    }
}

function mostrarInformacion(materia){

let informacion = obtenerInformacion(materia);
if (informacion=="Error"){
    document.write(`Verifique la informacion ingresada: <b>${materia}</b> no existe en nuestra base de datos.<br><br>`);
} else{
    let profesor= informacion[0].shift();
    let alumnos= informacion[0];
    document.write(`Alumnos presentes en ${informacion[1]}:<br>
    ${alumnos} <br> El profesor es: ${profesor}<br><br>`);
}}

mostrarInformacion("fsica");
mostrarInformacion("progrmacion");
mostrarInformacion("quimica");

function cantidadDeMaterias (alumno){
let informacion = materias;
let cantidadTotal=0;
let clasesPresente=[];
for (info in informacion){
 if(informacion[info].includes(alumno)){
    cantidadTotal++;
    clasesPresente.push(" " +info);
 }
}
return document.write(`${alumno} está inscrito/a en ${cantidadTotal} materias: ${clasesPresente}.<br><br>`);
}

cantidadDeMaterias ("cofla");
cantidadDeMaterias ("maria");
cantidadDeMaterias ("pedro");


function inscribir(alumno, materia){
    if (materias[materia] !== undefined){
        // personas.shift(); Ya en la parte anterior habia eliminado al profesor
        let alumnos= materias[materia];
            if (materias[materia].includes(alumno)){
                document.write(`Ya estás inscrito en ${materia}.<br><br>`)
            } else {
            if (alumnos.lenght >=20){
                document.write(`Lo siento, la materia ${materia} ya no tiene cupos disponibles`)
            } else{
                alumnos.push(alumno);
                document.write(`Felicidades!! Te has inscrito correctamente en ${materia}.<br><br>`)
            }
            }
    } else {
        document.write(`Verifique la informacion ingresada: <b>${materia}</b> no existe en nuestra base de datos.<br><br>`);
    }
}

inscribir("cofla","fisica");
inscribir("cofla","programacion");
inscribir("cofla","quimica");
inscribir("cofla","logica");
mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("quimica");
mostrarInformacion("logica");
cantidadDeMaterias ("cofla");
inscribir("cofla","fisca");