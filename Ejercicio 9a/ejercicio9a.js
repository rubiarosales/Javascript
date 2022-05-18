const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("boton");
const resultado= document.querySelector(".resultado");

boton.addEventListener("click", (e)=>{
    e.preventDefault();
    let error=validarCampos();
    if (error[0]){
        resultado.innerHTML=error[1];
        resultado.classList.add("red");
    } else{
        resultado.innerHTML= "Solicitud enviada correctamente";
        resultado.classList.remove("red");
        resultado.classList.add("green");
    }
});

const validarCampos= ()=>{
    let error=[];
 if (nombre.value.length<5 || nombre.value.length>40){
    error[0]=true;
    error[1]="El nombre ingresado es inválido";
    return error;
 } else if (email.value.length<8 ||
    email.value.indexOf("@") == -1 ||
    email.value.indexOf(".") == -1){
    error[0]=true;
    error[1]="El email ingresado es inválido";
    return error;
 } else if (materia.value.length<4 || materia.value.length>40){
    error[0]=true;
    error[1]="La materia ingresada no existe";
    return error;
 }
 error[0]=false;
 return error;
}