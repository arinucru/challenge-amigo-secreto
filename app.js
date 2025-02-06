//Lista para almacenar los nombres de los amigos
let amigos = [ ]

//Función para agregar un amigo a la lista
function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.ariaValueMax.trim();

    //Validar que el campo no esté vacío
    if(nombreAmigo === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Validar que el amigo no esté en la lista
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya está en la lista.`);
        return;
    }

    //Agregar el nombre a la lista de amigos
    amigos.push(nombreAmigo);

    //Limpiar el campo de texto
    inputAmigo.value = "";

    //Actualizar la lista en la interfaz
    actualizarLista();

}

//Función para actualizar la lista de amigos en la interfaz


