/*funcion*/

const printCarrito = () =>{

    //Para que no se repita la accion;limpia el contenido 
    modalContainer.innerHTML="";
    modalContainer.style.display="flex";

    //creando el header
    const modalHeader=document.createElement("div");
    modalHeader.className="modal-header";
    modalHeader.innerHTML = `
    <h1> Carrito </h1>`;

    //añadiendo el contenido
    modalContainer.append(modalHeader);

    //creando el boton
    const modalbutton= document.createElement("h1");
    modalbutton.innerHTML = "skip";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () =>{
        modalContainer.style.display="none";
    });
    
    modalHeader.append(modalbutton);

    //recorriendo el carrito para ver la seleccion 

    cursosSeleccionados.forEach((curso)=>{
        let seleccion=document.createElement("div")
        seleccion.className ="modal-content"
        seleccion.innerHTML = `
        <img src="${curso.img}">
        <h3> ${curso.nombre}</h3>
        <p>${curso.clave} </p>
        <p>${curso.duracion} </p>
        <p>${curso.precio} $</p>`;

        modalContainer.append(seleccion)

        //creando el boton de eliminar 

        let eliminar=document.createElement("span");
        eliminar.innerHTML="Delete";
        eliminar.className="delete-curso";
        seleccion.append(eliminar);

        eliminar.addEventListener("click",eliminarCurso);

    });



    //calculando el total 
    const total = cursosSeleccionados.reduce((acomulador,elemento) => acomulador+ elemento.precio,0);
    
    const totalCompra=document.createElement("div")
    totalCompra.className="total-content"
    totalCompra.innerHTML= `total a pagar: $ ${total}  ` 

    modalContainer.append(totalCompra);
};

//Invocando la funcion en el evento click
verCarrito.addEventListener("click",printCarrito);

//dandole funcionalidad al carrito

const eliminarCurso = () => {
    /*Buscar la clave para eliminar el curso*/ 
    const foundClave = cursosSeleccionados.find((Element)=> Element.clave);
    cursosSeleccionados=cursosSeleccionados.filter((cursoClave)=>{
        return cursoClave!== foundClave; //devuelve todo menos el curso que seleccione 
});

printCarrito();

};