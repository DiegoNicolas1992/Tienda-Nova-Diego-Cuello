document.addEventListener("DOMContentLoaded", () => {
  mostrarCarrito();
});

function mostrarCarrito() {
  const contenedor = document.getElementById("contenedor-carrito");
  const totalElement = document.getElementById("total-carrito");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>El carrito está vacío.</p>";
    totalElement.textContent = "$0";
    return;
  }

  let total = 0;

  carrito.forEach((producto, index) => {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;

    const item = document.createElement("div");
    item.classList.add("carrito-item");
    item.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.titulo}">
      <div class="carrito-detalles">
        <h3>${producto.titulo}</h3>
        <p>${producto.descripcion}</p>
        <p><strong>Precio:</strong> $${producto.precio}</p>
        <div class="cantidad-control">
          <button onclick="disminuirCantidad(${index})">-</button>
          <span class="cantidad">${producto.cantidad}</span>
          <button onclick="aumentarCantidad(${index})">+</button>
        </div>
        <p><strong>Subtotal:</strong> $${subtotal}</p>
        <button class="eliminar" onclick="eliminarProducto(${index})">Eliminar</button>
      </div>
    `;
    contenedor.appendChild(item);
  });

  totalElement.textContent = `$${total}`;
}

function aumentarCantidad(index) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito[index].cantidad++;
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function disminuirCantidad(index) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  if (carrito[index].cantidad > 1) {
    carrito[index].cantidad--;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }
}

function eliminarProducto(index) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}
