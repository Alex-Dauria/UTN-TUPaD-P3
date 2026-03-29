const cargarCategorias = () => {
  const lista = document.getElementById("lista-categorias");

  categorias.forEach(categoria => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = categoria;
    li.appendChild(a);
    lista.appendChild(li);
  });
};

const cargarProductos = () => {
  const contenedor = document.getElementById("contenedor-productos");

  productos.forEach(producto => {
    const article = document.createElement("article");
    article.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <div class="info-producto">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <strong>$${producto.precio.toLocaleString("es-AR")}</strong>
        <button type="button" onclick="alert('Agregaste: ${producto.nombre}')">Agregar al Carrito</button>
      </div>
    `;
    contenedor.appendChild(article);
  });
};

cargarCategorias();
cargarProductos();
