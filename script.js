const minhaLista = document.querySelector('ul');

// 1ª
let quantidade = () => {
    console.log(minhaLista.children);
}

// 2ª
let alteraTexto = () => {
    let modificar = "Item Modificado";
    minhaLista.children[1].innerText = modificar;
}

// 3ª
let novoItem = () => {
    const adicionarItem = document.createElement('li');
    adicionarItem.innerHTML += "Novo Item";
    minhaLista.appendChild(adicionarItem);
}

