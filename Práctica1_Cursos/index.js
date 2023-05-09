/**
 * Archivo que contiene las funciones que implementan la funcionalidad
 * de la aplicación en consola en Javascript para un menú de Cursos
 */
   
// Función flecha que muestra el contenido del Array cursos declarado en el archivo cursos.js
const mostrarCursos = () =>{
    console.log ("Listado de cursos");  
    console.log ("CLAVE       CURSO             PRECIO"); 
    // Recorrido del Array de objetos con forEach
    cursos.forEach(curso => {
      console.log (`${curso.clave} - ${curso.nombre} duración ${curso.duracion} --> $ ${curso.precio}.00`);
    });
    console.log(" ");
  
    // Recorrido del Array de objetos con for, sintaxis para Array
    for(let curso of cursos){
      console.log (`${curso.clave} - ${curso.nombre} duración ${curso.duracion} --> $ ${curso.precio}.00`);
    }
  }
  
  
  // declaración de un objeto que representa al usuario que seleciona cursos del listado ofertado.
  const usuario = {
      nombre: "Usuario 1",
      correo:"usuario1@gmail.com",
      deuda: 0
  }
  
  // declaración del array que contiene los cursos seleccionados del listado de cursos ofertados.
  let cursosSeleccionados = [];
  
  // declaración de variable para el total a pagar de los cursos seleccionados
  let precioTotal = 0;
  /* 
     Función flecha que permite seleccionar un curso del listado ofertado. 
     Parámetro de entrada: Clave de un curso del listado. 
     Si no se proporciona la clave del curso indica mensaje de error
     Si se encuentra el curso se añade al array de cursos seleccionados
  */
  const selCurso = claveCurso => {
      const curso = cursos.find(curso => curso.clave === claveCurso);
      if (!curso) return "Curso no encontrado en el listado ..."
      cursosSeleccionados.push(curso);
      console.log("El curso se añadio a su listado de cursos seleccionados");
  
      return mostrarCursosSeleccionados();
  }
  
  // Función que muestra en consola en formato de Array los cursos seleccioandos
  const mostrarCursosSeleccionados = () => cursosSeleccionados;
  
  const calcularTotal = () => {
      let precio = 0;
      for (curso of cursosSeleccionados){
         precio += curso.precio;
      }
      precioTotal = precio;
      return precioTotal;
  }
  
  const finalizarCompra = () =>{
      calcularTotal();
      usuario.deuda = precioTotal;
      cursosSeleccionados = [];
      precioTotal = 0;
  
      return `${usuario.nombre} tu toal a pagar es: $ ${usuario.deuda}.00`
  }
  