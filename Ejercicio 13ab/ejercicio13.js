// const btnNombre = document.querySelector(".getName");
// const btnEdad = document.querySelector(".getAge");

// const getName = async ()=>{
//     let peticion= await fetch ("informacion.txt");
//     let response= await peticion.json();
//     let div = document.createElement("DIV");
//     div.classList.add("nombre");
//     div.innerHTML=response.nombre;
//     document.body.appendChild(div);
// }

// const getAge = async ()=>{
//     let peticion= await fetch ("informacion.txt");
//     let response= await peticion.json();
//     let div = document.createElement("DIV");
//     div.classList.add("edad");
//     div.innerHTML=response.edad;
//     document.body.appendChild(div);
// }

// btnNombre.addEventListener("click", getName);
// btnEdad.addEventListener("click", getAge);

//EJERCICIO NUMERO 13 DE COFLA

const btnDatos = document.querySelector(".getData");

const getData = async () => {
    let ctdAprobados = document.querySelector(".aprobados");
    let ctdDesaprobados = document.querySelector(".desaprobados");
    ctdAprobados.style.display = "flex";
    ctdDesaprobados.style.display = "flex";
    btnDatos.disabled=true;

    try {
        let peticion = await axios("info.txt");
        let response = await peticion.data;
        ctdAprobados.innerHTML += `${response.aprobados}`;
        ctdDesaprobados.innerHTML += `${response.desaprobados}`;
    } catch (e) {
        ctdAprobados.innerHTML += "La API falló";
        ctdDesaprobados.innerHTML += "La API falló";
    }
}

btnDatos.addEventListener("click", getData);
