//EJERCICIO 2: PARTE 1 - FIESTA

let entraGratis = false;

function validarCliente(hora) {
    let edad = prompt("Hola, cuantos años tienes?");
    if (edad >= 18) {
    if (entraGratis==false && hora >= 2 && hora<=7) {
            alert("Sos mayor, puedes pasar y por ser el primero despues de las 2am pasas gratis");
            entraGratis=true;
        } else if (edad >= 18) {
            alert(`Sos mayor, puedes pasar pero tienes que pagar porque son las ${hora}`);
        }} else {
            alert("Lo siento, solo pueden pasar mayores de edad");
        }
}
//A CONTINUACIÓN SE MUESTRA COMO RESOLVERLO CON FUNCIÓN FLECHA
// const validarCliente=(hora) =>{
// let edad = prompt("Hola, cuantos años tienes?");
// if (edad >= 18) {
// if (entraGratis==false && hora >= 2 && hora<=7) {
//         alert("Sos mayor, puedes pasar y por ser el primero despues de las 2am pasas gratis");
//         entraGratis=true;
//     } else if (edad >= 18) {
//         alert(`Sos mayor, puedes pasar pero tienes que pagar porque son las ${hora}`);
//     }} else {
//         alert("Lo siento, solo pueden pasar mayores de edad");
//     }}
//PRUEBAS:
    // validarCliente(2);
    // validarCliente(1);
    // validarCliente(5);
    // validarCliente(6);
    // validarCliente(2);

    //EJERCICIO 2: PARTE 2 - SALON DE CLASES

    // let alumnos=[];
    // numeroAlumnos=prompt("Cuántos alumnos tiene el curso");
    // for (i=0; i<numeroAlumnos; i++) {
    // alumnos[i]=[prompt(`Ingrese el nombre del alumno ${i+1}`),0];
    //     }


    // function tomarAsistencia (nombre, posicion) {
    // let presencia=prompt(nombre);
    // if (presencia=="p"|| presencia=="P"){
    //     alumnos[posicion][1]++;
    // }}

    // for (i=0;i<3;i++){ //En realidad es 30 y no 3 (es por todo el mes)
    //     for (alumno in alumnos){
    //         tomarAsistencia(alumnos[alumno][0], alumno);
    //     }
    // }

    // for (alumno in alumnos){
    //     let resultado= `${alumnos[alumno][0]}: <br>
    //     _____Asistencias: ${alumnos[alumno][1]}<br>
    //     _____Ausencias: ${3-alumnos[alumno][1]}<br>`;
    //     if ((3-alumnos[alumno][1])>1){//En realidad es el 10% de 180 días pero lo acoté
    //         resultado+="Reprobado por inasistencias <br><br>";
    //     } else {resultado+="Felicidades!! Está aprobado <br><br>"}

    //     document.write (resultado);
    // }
    

//EJERCICIO 2: PARTE 3 - CALCULADORA

let n1= parseInt(prompt("Introduce el primer número para operar"));
let n2= parseInt(prompt("Introduce el segundo número para operar"));
let res;
let op=prompt(`¿Qué operación desea realizar?
1:Sumar
2:Restar
3:Multiplicar
4:Dividir`);

switch (op){
    case "1":
        res=n1+n2;
        document.write(`Suma=> ${n1}+${n2} es ` +res);
        break;
    
    case "2":
        res=n1-n2;
        document.write(`Resta=>${n1}-${n2} es `+res);
        break;

    case "3":
        res=n1*n2;
        document.write(`Multiplicación=>${n1}x${n2} es `+res);
        break;
    case "4":
        res=n1/n2;
        document.write(`División=> ${n1}/${n2} es `+res);
        break;
    default:
            document.write("Opción invalida");
}





