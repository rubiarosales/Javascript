
const resultBtn= document.querySelector(".result-btn");
const enterBtn= document.querySelector(".enter-btn");
var numeros=[];
var quiereResultado=false;
let suma=0;
const div=document.createElement("DIV");
const reiniciarBtn=document.createElement("BUTTON");
let valorInput=document.querySelector(".numeros");
let numero=parseInt(valorInput.value);

const leerNumeros =()=>{
    let valorInput=document.querySelector(".numeros");
    let numero=parseInt(valorInput.value);
    try{
    if (isNaN(numero)){
        throw "Error"
    }
    do {
        numeros.push(numero);
        valorInput.value='';
        valorInput.focus();
        
    } while (quiereResultado=false);
} catch(e){
    div.classList.add("respuesta");
    document.body.appendChild(div);
    div.innerHTML=`${valorInput.value} no es un número válido, dale a "Resultado" o ingresa otro número`;
    valorInput.value='';
}}



enterBtn.addEventListener("click",leerNumeros);

resultBtn.addEventListener("click", ()=>{
    leerNumeros();
        for (let i = 0; i < numeros.length; i++) {
            suma = suma + numeros[i];
        }
        let promedio=suma/(numeros.length);
        div.classList.add("respuesta");
        document.body.appendChild(div);
        div.innerHTML=`El promedio de ${numeros} es ${promedio}`;
        quiereResultado=true;
        resultBtn.disabled=true;
        enterBtn.disabled=true;
        reiniciarBtn.classList.add("reinicio-btn");
        reiniciarBtn.textContent="Reiniciar";
        document.body.appendChild(reiniciarBtn);

    });

    reiniciarBtn.addEventListener("click",()=>{
        resultBtn.disabled=false;
        enterBtn.disabled=false;
        quiereResultado=false;
        suma=0;
        numeros=[];
        document.body.removeChild(div);
        document.body.removeChild(reiniciarBtn);
        valorInput.value='';
    });


