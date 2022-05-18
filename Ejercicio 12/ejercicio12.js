materiasHTML= document.querySelector(".materias");

let materias=[
    {
    materia: "Fisica 1",
    nota: 7
    },{
    materia: "Matemática 3",
    nota: 8
    },{
    materia: "Programación 2",
    nota: 10
    },{
    materia: "Lógica",
    nota: 9
    },{
    materia: "Estadística",
    nota: 6
    }];

const obtenerMateria =(id)=>{
    return new Promise((resolve,reject) =>{
        let materia = materias[id];
        if (materia == undefined) reject ("La materia no existe");
        else setTimeout(()=>{resolve(materia)}, Math.random()*500);
    }
    )
}

const mostrarMateria = async ()=>{
    let materia=[];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        let newMateriasCode= `
        <div class="materia">
            <div class="nombre">${materia[i].materia}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newMateriasCode;
        // console.log(materia[i]);
        // obtenerMateria(i).then(resolve => console.log (resolve));
    }
}
mostrarMateria();


