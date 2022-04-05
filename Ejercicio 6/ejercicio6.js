const contenedor= document.querySelector(".flex-container");

function crearLlave (nombre, modelo, precio){
    img=`<img src="llave.png">`;
    nombre=`<h2>${nombre}</h2>`;
    modelo= `<h3 id=${modelo}>Modelo ${modelo}</h3>`;
    precio= `<p>Precio: $${precio}</p>`;
    return [img, nombre, modelo, precio];
}

let fragmento =document.createDocumentFragment();

for (i=1;i<=20;i++){
let modeloRandom= Math.round(Math.random()*10000);
let precioRandom= Math.round(Math.random()*10+30);
let llave= crearLlave (`Llave ${i}`, `${modeloRandom}`,`${precioRandom}`)
    let div= document.createElement("DIV");
    div.tabIndex=i;
    div.classList.add(`item${i}`,"flex-item");
    div.innerHTML= llave[0] + llave[1] + llave[2] + llave[3] ;
    fragmento.appendChild(div);
}

contenedor.appendChild(fragmento);
