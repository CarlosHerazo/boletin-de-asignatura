// logica de Boletin
let boton = document.getElementById("buttonGenerate");
boton.addEventListener("click", () => {
  
    // resibir datos de los intputs
    let names = document.getElementById("inputTextName").value;
    let lastName = document.getElementById("inputTextLastName").value;
    let identification = document.getElementById("inputNumberIdentication").value;

    if((names === "") || (lastName === "") || (identification === "")){
        alert("Porfavor Ingrese Todos los datos propuestos")
    }else{
    //encabezado boletin
        let contenedorBlock = document.getElementById("main-none");
        let contenedorNone = document.getElementById("encabezado");
        contenedorBlock.style.display = "block";
        contenedorNone.style.display = "none";

        document.getElementById("guardarName").textContent = names;
        document.getElementById("guardarLastName").textContent = lastName;
        document.getElementById("guardarIdentification").textContent = identification;
    
    
        // filas y columnas para el boletin
        function generarNotaAleatoria() {
            return (Math.random() * 5).toFixed(2);
        }
        const fecha = new Date();
        // objeto para la fecha
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const año = fecha.getFullYear();
        document.getElementById("fecha").textContent = `${dia}/${mes}/${año}`;
    
    
    
        let promedio = 0;
        document.getElementById("puesto").textContent = Math.floor(Math.random() * 51);
        let contenedorNotas = document.querySelectorAll("#nota");
    
        contenedorNotas.forEach((agregarNota) => {
            let nota = parseFloat(generarNotaAleatoria());
            agregarNota.textContent = nota.toFixed(2);
            promedio += nota;
    
            let observacion = agregarNota.nextElementSibling; // agrega la etiqueta que le sigue, osea seria la columna de observacion. 
            if (nota < 3) {
                observacion.textContent = "Debe reforzar esta materia. Lo cual sería apto antes de pasar a los siguientes temas.";
            } else if (nota >= 3 && nota < 4.5) {
                observacion.textContent = "Tiene un básico manejo del tema.";
            } else {
                observacion.textContent = "Tiene un excelente manejo del tema, lo cual nos da a entender que estaría apto para pasar a los siguientes temas.";
            }
        });
    
        promedio /= contenedorNotas.length; // Calcular promedio
        document.getElementById("promedioNotas").textContent = promedio.toFixed(2);
    }


});

//boton para regresar a agregar otro usuario 
let boton2 = document.getElementById("regresar");

boton2.addEventListener("click", () => {
    let contenedorBlock = document.getElementById("main-none");
    let contenedorNone = document.getElementById("encabezado");
    contenedorBlock.style.display = "none";
    contenedorNone.style.display = "block";
})

