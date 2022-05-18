alumnos=[{
    nombre: "Lucas Dalto",
    email:"soydalto@gmail.com",
    materia:"Fisica"
},{
    nombre: "Rubia Rosales",
    email:"soyrubia@gmail.com",
    materia:"Quimica"
    },{
    nombre: "Aura Rosales",
    email:"arosales@gmail.com",
    materia:"Fisica 2"
    },{
    nombre: "Rubia Rosales",
    email:"soyrubia@gmail.com",
    materia:"Recreo"
    },{
    nombre: "Aura Rosales",
    email:"arosales@gmail.com",
    materia:"Fisica 3"
    }];

    for (alumno in alumnos){
        let datos= alumnos[alumno];
        let nombre= datos["nombre"];
        let email= datos["email"];
        let materia= datos["materia"];
        let htmlCode=`
        <div class=" grid-item nombre"> ${nombre}</div>
        <div class=" grid-item email"> ${email}</div>
        <div class=" grid-item materia"> ${materia}</div>
        <div class=" grid-item semana">
            <select class="semana-elegida"> 
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
        </div> `;
        let div=document.querySelector(".grid-container");
        div.innerHTML+=htmlCode;
    }

    const boton = document.querySelector(".boton-confirmar");
    boton.addEventListener("click", ()=>{
    let confirmar= confirm("¿Está seguro de confirmar las mesas?");
    if (confirmar){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        for (elemento in elementos){
        let semana= elementos[elemento];
        semana.innerHTML=document.querySelector(".semana-elegida").value;
    }
}
     } )