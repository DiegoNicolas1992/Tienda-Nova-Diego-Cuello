function mostrarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const contenedor = document.querySelector(".product-grid");

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
    return;
  }

  contenedor.innerHTML = carrito.map((p, i) => `
    <div class="product-card">
      <img src="${p.imagen}" alt="${p.titulo}">
      <h2>${p.titulo}</h2>
      <p>${p.descripcion}</p>
      <p><strong>$${p.precio}</strong></p>
      <div class="cantidad-control">
        <button onclick="cambiarCantidad(${i}, -1)">-</button>
        <span class="cantidad">${p.cantidad}</span>
        <button onclick="cambiarCantidad(${i}, 1)">+</button>
      </div>
      <p>Subtotal: $${p.precio * p.cantidad}</p>
      <button onclick="eliminarProducto(${i})">Eliminar</button>
    </div>
  `).join("");
}

function cambiarCantidad(index, cambio) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito[index].cantidad += cambio;
  if (carrito[index].cantidad < 1) carrito[index].cantidad = 1;
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function eliminarProducto(index) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

document.addEventListener("DOMContentLoaded", mostrarCarrito)
