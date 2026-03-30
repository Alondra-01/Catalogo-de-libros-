const formulario = document.getElementById("formulario");

formulario.addEventListener(
    "submit",function(event){
        event.preventDefault();

        const titulo = document.getElementById("titulo").value.trim();
        const nombre = document.getElementById("nombre").value.trim();
        const fecha = document.getElementById("fecha").value.trim();

        // Elementos de error
        const errorTitulo = document.getElementById("errorTitulo");
        const errorNombre = document.getElementById("errorNombre");
        const errorFecha = document.getElementById("errorFecha");

    
         //Tecnica del Centinela
        let valido = true;
        if(titulo === ""){
            errorTitulo.textContent = "El Titulo es obligatorio";
            valido = false;
        } else{
            errorTitulo.textContent = "";
        }

        
        if(nombre === ""){
            errorNombre.textContent = "El Autor es obligatorio";
            valido = false;
        }else{
            errorNombre.textContent = "";
        }

        if(fecha !== "" || (fecha<1000 || fecha>2026)){
            errorFecha.textContent = "El Año de publicacion es obligatorio";
            valido = false;
        }else{
            errorFecha.textContent = "";
        }
    }
);