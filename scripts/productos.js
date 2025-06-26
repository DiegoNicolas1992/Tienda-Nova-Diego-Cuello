// Cargar productos según la categoría
function cargarProductos(categoria) {
  fetch("data/productos.json")
    .then(res => res.json())
    .then(data => {
      const productos = data[categoria];
      mostrarProductos(productos);
    })
    .catch(err => console.error("Error al cargar productos:", err));
}

// Mostrar productos en el grid
function mostrarProductos(productos) {
  const grid = document.querySelector(".product-grid");
  grid.innerHTML = productos.map(p => `
    <div class="product-card">
      <img src="${p.imagen}" alt="${p.titulo}">
      <h2>${p.titulo}</h2>
      <p>${p.descripcion}</p>
      <p><strong>$${p.precio}</strong></p>
      <div class="cantidad-control">
        <button onclick="disminuir(this)">-</button>
        <span class="cantidad">0</span>
        <button onclick="aumentar(this)">+</button>
      </div>
    </div>
  `).join("");
}

// Aumentar cantidad
function aumentar(btn) {
  const cantidad = btn.parentElement.querySelector(".cantidad");
  cantidad.textContent = parseInt(cantidad.textContent) + 1;
}

// Disminuir cantidad
function disminuir(btn) {
  const cantidad = btn.parentElement.querySelector(".cantidad");
  if (parseInt(cantidad.textContent) > 0) {
    cantidad.textContent = parseInt(cantidad.textContent) - 1;
  }
}

