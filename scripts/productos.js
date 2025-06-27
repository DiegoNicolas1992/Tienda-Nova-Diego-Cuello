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
      <img src="${p.imagen}" alt="${p.titulo}" loading="lazy">
      <h2>${p.titulo}</h2>
      <p>${p.descripcion}</p>
      <p><strong>$${p.precio}</strong></p>
      <div class="cantidad-control">
        <button onclick="disminuir(this)">-</button>
        <span class="cantidad">1</span>
        <button onclick="aumentar(this)">+</button>
      </div>
      <button class="agregar-carrito" onclick='agregarAlCarrito(${JSON.stringify(p)})'>Añadir al carrito</button>
    </div>
  `).join("");
}

function aumentar(btn) {
  const cantidad = btn.parentElement.querySelector(".cantidad");
  cantidad.textContent = parseInt(cantidad.textContent) + 1;
}

function disminuir(btn) {
  const cantidad = btn.parentElement.querySelector(".cantidad");
  const valor = parseInt(cantidad.textContent);
  if (valor > 1) {
    cantidad.textContent = valor - 1;
  }
}

function agregarAlCarrito(producto) {
  const cantidad = event.target.parentElement.querySelector(".cantidad").textContent;
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const existente = carrito.find(p => p.titulo === producto.titulo);

  if (existente) {
    existente.cantidad += parseInt(cantidad);
  } else {
    carrito.push({ ...producto, cantidad: parseInt(cantidad) });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto añadido al carrito.");
}
