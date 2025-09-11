// variables
let amigos = []
let nombreAmigoSecreto = ''

//permite restablecer el campo de texto a una cadena vacía
function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}

//agregar un nombre a la lista
function agregarAmigo() {
    let nombreAmigoSecreto = document.getElementById('amigo').value;
    if (nombreAmigoSecreto === '') {
        alert('Por favor, inserte un nombre.'); //envía una alerta en caso que el campo de texto esté vacío
        return;
    }
    else if (amigos.includes(nombreAmigoSecreto)){
        alert('El nombre ya fue ingresado, por favor ingrese otro nombre.'); //Verifica que no hayan nombres repetidos
        limpiarCampo();
        return;
    }
    amigos.push(nombreAmigoSecreto); //muestra la lista de nombres agregados
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(function(amigo){
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
    console.log(amigos);
    limpiarCampo();
}

//función para sortear un amigo entre el listado de amigos
function sortearAmigo (){
    if (amigos.length === 0) {
        amigoSorteado = null;
        alert('Por favor, ingrese al menos 2 nombres para sortear.');
        return;
    }
    else if (amigos.length === 1){
        alert('Por favor, ingrese al menos 2 nombres para sortear.');
    return; 
    }
    amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let lista = document.getElementById('resultado');
    lista.innerHTML = '';
    let li = document.createElement('li');
    li.textContent = amigoSorteado;
    lista.appendChild(li);
}
