let categorias = {
    lacteos: [],
    ferreteria: [],
    cereales: [],
    dulces: [],
    frutas: [],
    medicinas: []
};

function agregarItem(categoria, item) {
    if (categorias[categoria]) {
        categorias[categoria].push(item);
        mostrarListas();
    } else {
        alert(`La categoría ${categoria} no existe.`);
    }
}

function mostrarListas() {
    let listasDiv = document.getElementById("listas");
    listasDiv.innerHTML = "";

    for (let categoria in categorias) {
        let listaDiv = document.createElement("div");
        listaDiv.classList.add("lista");

        let titulo = document.createElement("h2");
        titulo.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
        listaDiv.appendChild(titulo);

        let listaUl = document.createElement("ul");

        categorias[categoria].forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            listaUl.appendChild(li);
        });

        listaDiv.appendChild(listaUl);
        listasDiv.appendChild(listaDiv);
    }
}

function agregarItemDesdeFormulario() {
    let categoriaSelect = document.getElementById("categoria");
    let categoria = categoriaSelect.value;

    let itemInput = document.getElementById("item");
    let item = itemInput.value;

    if (item.trim() !== "") {
        agregarItem(categoria, item);
        itemInput.value = "";  // Limpiar el campo de entrada
    } else {
        alert("Por favor, escribe un ítem.");
    }
}

// Mostrar listas vacías al cargar la página
mostrarListas();
