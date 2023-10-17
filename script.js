var datos = [
    // Arreglo de datos con información de alumnos
    {nombre: "Ricardo", calificaciones: [8,9,5,8,10], matricula: "1234"},
    {nombre: "Alex", calificaciones: [8,9,7,8,9], matricula: "4321"},
    {nombre: "Angel", calificaciones: [8,9,5,5,10], matricula: "3241"},
    {nombre: "Jorge", calificaciones: [8,9,6,8,10], matricula: "1423"},
    {nombre: "Hector", calificaciones: [8,9,5,8,5], matricula: "3214"},
  ];
  
  function mostrarAlumnos() {
    // Obtener el elemento de la lista de alumnos
    var listaAlumnos = document.getElementById("alumnos-lista");
    listaAlumnos.innerHTML = ''; // Limpiar lista
  
    var totalCalificaciones = [];  // Inicializar un arreglo para almacenar las calificaciones
  
    // Iterar sobre los datos de cada alumno
    datos.forEach(function(alumno) {
      // Crear una nueva fila (elemento tr) para cada alumno
      var listItem = document.createElement("tr");
  
      // Crear una celda (elemento td) para mostrar el nombre del alumno
      var nombreCell = document.createElement("td");
      nombreCell.innerText = alumno.nombre;
      listItem.appendChild(nombreCell);
  
      // Crear una celda para mostrar las calificaciones del alumno
      var calificacionesCell = document.createElement("td");
      calificacionesCell.innerText = alumno.calificaciones.join(', ');
      listItem.appendChild(calificacionesCell);
  
      // Calcular el promedio de calificaciones individual de cada alumno
      var promedioIndividual = alumno.calificaciones.reduce((acc, calif) => acc + calif, 0) / alumno.calificaciones.length;
      var promedioIndividualCell = document.createElement("td");
      promedioIndividualCell.innerText = promedioIndividual.toFixed(2);
      listItem.appendChild(promedioIndividualCell);
  
      listaAlumnos.appendChild(listItem);  // Agregar la fila a la lista de alumnos
  
      totalCalificaciones = totalCalificaciones.concat(alumno.calificaciones);  // Concatenar calificaciones para calcular promedio total
    });
  
    // Calcular el promedio total de calificaciones
    var promedioTotal = totalCalificaciones.reduce((acc, calif) => acc + calif, 0) / totalCalificaciones.length;
  
    // Crear una fila para mostrar el promedio total
    var totalRow = document.createElement("tr");
    totalRow.classList.add("list-group-item", "list-group-item-secondary");
  
    // Crear una celda para mostrar el texto "Promedio Total de Calificaciones"
    var totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.innerText = "Promedio Total de Calificaciones";
    totalRow.appendChild(totalCell);
  
    // Crear una celda para mostrar el promedio total de calificaciones
    var promedioTotalCell = document.createElement("td");
    promedioTotalCell.innerText = promedioTotal.toFixed(2);
    totalRow.appendChild(promedioTotalCell);
  
    listaAlumnos.appendChild(totalRow);  // Agregar la fila con el promedio total
  
    // Mostrar SweetAlert con el promedio total
    swal({
      title: "Promedio Total de Calificaciones",
      text: `El promedio total de calificaciones es: ${promedioTotal.toFixed(2)}`,
      icon: "info"
    });
  }

  function agregarAlumno() {
    // Solicitar al usuario ingresar nombre
    var nombre = prompt("Ingrese el nombre del alumno:");
  
    // Validar que se haya ingresado un nombre
    if (nombre) {
      // Solicitar al usuario ingresar calificaciones
      var calificaciones = prompt("Ingrese las calificaciones separadas por comas (ej. 8,9,7):").split(",").map(Number);
  
      // Validar que se haya ingresado al menos una calificación
      if (calificaciones.length > 0) {
        // Solicitar al usuario ingresar la matrícula
        var matricula = prompt("Ingrese la matrícula del alumno:");
  
        // Validar que se haya ingresado la matrícula
        if (matricula) {
          // Crear un nuevo objeto alumno con la información ingresada
          var nuevoAlumno = {
            nombre: nombre,
            calificaciones: calificaciones,
            matricula: matricula
          };
          datos.push(nuevoAlumno);  // Agregar el nuevo alumno a la lista de datos
          swal("Alumno agregado con éxito.", "", "success");  // Mostrar SweetAlert
        } else {
          swal("La matrícula es obligatoria.", "", "error");
        }
      } else {
        swal("Se requiere al menos una calificación.", "", "error");
      }
    } else {
      swal("El nombre es obligatorio.", "", "error");
    }
  }
  
  