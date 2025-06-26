function cargarProductos(categoria) {
  fetch("data/productos.json")
    .then(res => res.json())
    .then(data => {
      const productos = data[categoria];
      mostrarProductos(productos);
    });
}

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
      <button class="btn-carrito" onclick="agregarAlCarrito('${p.titulo}', ${p.precio}, this)">Agregar al carrito</button>
    </div>
  `).join("");
}

function aumentar(btn) {
  const cantidad = btn.parentElement.querySelector(".cantidad");
  cantidad.textContent = parseInt(cantidad.textContent) + 1;
}

function disminuir(btn) {
  const cantidad = btn.parentElement.querySelector(".cantidad");
  if (parseInt(cantidad.textContent) > 0) {
    cantidad.textContent = parseInt(cantidad.textContent) - 1;
  }
}

function agregarAlCarrito(titulo, precio, btn) {
  const cantidad = parseInt(btn.parentElement.querySelector(".cantidad").textContent);
  if (cantidad > 0) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push({ titulo, precio, cantidad });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito");
  } else {
    alert("Seleccioná una cantidad mayor a 0");
  }
}
