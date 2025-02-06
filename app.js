//Lista para almacenar los nombres de los amigos
let amigos = [ ]

//Función para agregar un amigo a la lista
function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value; 

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
function actualizarLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    
    //Limpiar la lista actual
    listaAmigos.innerHTML = ""; //Borra cualquier contenido previo de la lista

    //recorrer la lista con un ciclo for
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//Función para seleccionar un amigo al azar
function sortearAmigo(){
    //Validar que haya al menos un amigo en la lista
    if(amigos.length === 0){ //Comprueba si la lista "amigos" está vacía
        alert("No hay amigos en la lista, agrega al al menos uno.");
        return;
    }

    //Genera un indice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); //Genera un número aleatorio entre 0 y la cantidad de amigos en la lista

    //Obtener el nombre del amigo sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    //Mostrar el resultado en la interfaz
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
