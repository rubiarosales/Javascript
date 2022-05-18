const sendButton = document.getElementById('send-btn');
sendButton.addEventListener("click", ()=>{
    let nota,mensaje;
    try {
        nota = parseInt(document.getElementById('nota').value);
        if (isNaN(nota)){
            throw "Error"
        }
        mensaje= validarNota (nota);
    } catch(e){
        nota = "La nota no es válida";
        mensaje = "Has intentado hackear el sitio";
    }
    abrirModal(nota,mensaje);
})

const abrirModal = (nota,mensaje) =>{
    let n1,n2;
    let modal = document.querySelector('.modal');
    modal.classList.add('open-modal');
    modal.style.animation="aparecer 1s forwards"
    let resultadoMateria= document.querySelector('.res-materia');
    let resultadoPrueba= document.querySelector('.res-prueba');
    resultadoMateria.innerHTML="MATERIA:" + verificarAprobacion(nota,n1,n2);
    resultadoPrueba.innerHTML= `Tu prueba: ${nota} - ${mensaje}`;
}

const validarNota =(nota)=>{
    let mensaje;
switch (nota) {
    case 0: mensaje= "Una vergüenza";
        break;
    case 1: mensaje= "Terrible";
        break;
    case 2: mensaje= "Demasiado mal";
        break;
    case 3: mensaje= "Muy mal";
        break;
    case 4: mensaje= "Regular";
        break;
    case 5: mensaje= "Puede mejorar";
        break;
    case 6: mensaje= "Por poco";
        break;
    case 7: mensaje= "Bien";
        break;
    case 8: mensaje= "Muy bien";
        break;
    case 9: mensaje= "Felicitaciones";
        break;
    case 10: mensaje= "Bravo! Calificación perfecta";
        break;
    default: mensaje= null;
    }
    return mensaje;
}

const verificarAprobacion = (nota)=>{
    let n1= 3;
    let n2= 10;
    let promedio= (nota+n1+n2)/3;
if (promedio>=7){
   return `<span class="green"> APROBADO</span>`;
}else{
    return `<span class="red"> DESAPROBADO</span>`;
}
}


