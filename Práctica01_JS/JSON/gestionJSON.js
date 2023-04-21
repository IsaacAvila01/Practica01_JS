
const opJson = document.querySelector("#opJson");
const opAjax = document.querySelector("#opAjax");
const opFetch = document.querySelector("#opFetch");
const opEjemplo = document.querySelector("#opEjemplo");

const jsonContainer = document.querySelector("#json");
const ajaxContainer = document.querySelector("#ajax");
const fetchContainer = document.querySelector("#fetch");
const ejemploContainer = document.querySelector("#ejemplo");

let lectura = false;

opJson.addEventListener("click", function (evento) {
  jsonContainer.style.display="block";
  ajaxContainer.style.display="none";
  fetchContainer.style.display="none";
  ejemploContainer.style.display="none";
});

opAjax.addEventListener("click", function (evento) {
  jsonContainer.style.display="none";
  ajaxContainer.style.display="block";
  fetchContainer.style.display="none";
  ejemploContainer.style.display="none";
});

opFetch.addEventListener("click", function (evento) {
  jsonContainer.style.display="none";
  ajaxContainer.style.display="none";
  fetchContainer.style.display="block";
  ejemploContainer.style.display="none";
});

  opEjemplo.addEventListener("click", function (evento) {
    jsonContainer.style.display="none";
    ajaxContainer.style.display="none";
    fetchContainer.style.display="none";
    ejemploContainer.style.display="block";
     
    /* Código del ejemplo */
    if (!lectura) {
        fetch('alumnos.json')
          .then(res => res.json()) // el método .json() analiza la respuesta JSON en un objeto literal JS
          .then(data => {
              let bloque = document.querySelector('#datosAlumnos');
              let fila, colBoleta, colNombre, colSemestre, colPromedio, contBoleta, contNombre, contSemestre, contPromedio;
      
              bloque.style.display = "block";
      
              data.forEach(alumno => {
                  fila = document.createElement("tr");
                  colBoleta = document.createElement("td");
                  colNombre = document.createElement("td");
                  colSemestre = document.createElement("td");
                  colPromedio = document.createElement("td");

                  contBoleta = document.createTextNode(`${alumno.boleta}`);
                  contNombre = document.createTextNode(`${alumno.nombre}`);
                  contSemestre = document.createTextNode(`${alumno.semestre}`);
                  contPromedio = document.createTextNode(`${alumno.promedio}`);
                  colBoleta.appendChild(contBoleta);
                  colNombre.appendChild(contNombre);
                  colSemestre.appendChild(contSemestre);
                  colPromedio.appendChild(contPromedio);
          
                  fila.appendChild(colBoleta);
                  fila.appendChild(colNombre);
                  fila.appendChild(colSemestre);
                  fila.appendChild(colPromedio);

                  bloque.appendChild(fila);
              });
        });
        lectura = true;
    }  
  });



