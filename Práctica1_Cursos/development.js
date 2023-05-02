//obtener el ID del div padre de html
const tienda=document.getElementById("tiendaContent");
const verCarrito= document.getElementById("verCursos")
const modalContainer=document.getElementById("modal-container")

let cursosSeleccionados = [];

//recorriendo el array
cursos.forEach(curso => {
    
    let content = document.createElement("div") //creando un elemento dentro del docuemnto que sea un div
    content.className="card"
    //Asignarlo a html
    content.innerHTML= ` 
     <img clas="img" src="${curso.img}">
     <h3> ${curso.nombre}</h3>
     <p>${curso.clave} </p>
     <p>${curso.duracion} </p>
     <p>${curso.precio} $</p> 
     `;
     
        tienda.append(content); //esta funcion agrega la lista completa 
        
        //Agregar el texto que estara dentro de la etiquetas        
        let btncomprar = document.createElement("button");
        btncomprar.innerText ="comprar";
        btncomprar.className="comprar";
        content.append(btncomprar);
        
        //agregadno el evento
        btncomprar.addEventListener("click", () => {
            cursosSeleccionados.push({
                nombre : curso.nombre,
                clave : curso.clave,
                duracion : curso.duracion,
                precio : curso.precio,
                img:curso.img,
            });
            console.log(cursosSeleccionados);
        });
  });
