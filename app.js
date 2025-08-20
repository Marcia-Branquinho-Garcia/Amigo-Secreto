//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;

    if (nomeAmigo == '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nomeAmigo);
    console.log(amigos);

    document.getElementById('amigo').value = '';

    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML = lista.innerHTML + '<li>' + amigos[i] + '</li>';
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('Adicione pelo menos um amigo para realizar o sorteio!');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '<p>O amigo secreto sorteado é: ' + amigoSorteado + '</p>';
}