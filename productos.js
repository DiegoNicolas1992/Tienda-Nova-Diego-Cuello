function cargarProductos(categoria) {
  fetch("data/productos.json")
    .then(response => response.json())
    .then(data => {
      const productos = data[categoria] || [];
      const grid = document.querySelector(".product-grid");
      if (!grid) return;

      grid.innerHTML = productos.map(prod => `
        <div class="product-card">
          <img src="${prod.imagen}" alt="${prod.titulo}">
          <h2>${prod.titulo}</h2>
          <p>${prod.descripcion}</p>
          <p><strong>$${prod.precio}</strong></p>
          <div class="cantidad-control">
            <button onclick="disminuir(this)">-</button>
            <span class="cantidad">0</span>
            <button onclick="aumentar(this)">+</button>
          </div>
        </div>
      `).join('');
    })
    .catch(error => console.error("Error al cargar productos:", error));
}

function aumentar(btn) {
  const cantidad = btn.parentElement.querySelector(".cantidad");
  cantidad.textContent = parseInt(cantidad.textContent) + 1;
}

function disminuir(btn) {
  const cantidad = btn.parentElement.querySelector(".cantidad");
  const actual = parseInt(cantidad.textContent);
  if (actual > 0) cantidad.textContent = actual - 1;
}
