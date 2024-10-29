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
    minhaLista.innerHTML += "<li>Novo Item</li>";
}

// 4ª
function adicionarItem () {
    let criar = document.createElement('li');
    criar.innerHTML = "Item Criado Dinamicamente";
    minhaLista.appendChild(criar);
}

// 5ª
let senha = document.querySelector('input');

function verSenha() {
    if (senha.getAttribute('type') === 'password') {
        senha.setAttribute('type', 'text');
    } else {
        senha.setAttribute('type', 'password');
    }
}

// 6ª
let alterarCor = () => {
    minhaLista.children[2].style.color = "blue";
    minhaLista.children[3].style.fontWeight = "bold";
}

// 7ª
let antes = () => {
    minhaLista.before("<< Antes da lista >>");
    minhaLista.after("<< Depois da Lista >>");
}
