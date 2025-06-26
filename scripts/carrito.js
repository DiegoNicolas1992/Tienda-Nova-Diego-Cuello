// Mostrar productos del carrito
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector(".carrito-grid");
  const totalSpan = document.querySelector("#total");

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  function renderCarrito() {
    contenedor.innerHTML = "";

    if (carrito.length === 0) {
      contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
      totalSpan.textContent = "$0";
      return;
    }

    let total = 0;

    carrito.forEach((producto, index) => {
      total += producto.precio * producto.cantidad;

      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.titulo}">
        <h2>${producto.titulo}</h2>
        <p>${producto.descripcion}</p>
        <p><strong>$${producto.precio}</strong></p>
        <div class="cantidad-control">
          <button onclick="actualizarCantidad(${index}, -1)">-</button>
          <span class="cantidad">${producto.cantidad}</span>
          <button onclick="actualizarCantidad(${index}, 1)">+</button>
        </div>
      `;

      contenedor.appendChild(card);
    });

    totalSpan.textContent = `$${total.toLocaleString()}`;
  }

  window.actualizarCantidad = function (index, cambio) {
    carrito[index].cantidad += cambio;

    if (carrito[index].cantidad <= 0) {
      carrito.splice(index, 1); // eliminar si llega a 0
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderCarrito();
  };

  document.getElementById("vaciarCarrito").addEventListener("click", () => {
    carrito = [];
    localStorage.removeItem("carrito");
    renderCarrito();
  });

  renderCarrito();
});

