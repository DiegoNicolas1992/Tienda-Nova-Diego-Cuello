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

      <button class="btn-carrito" onclick="agregarAlCarrito(this, '${p.titulo}', ${p.precio})">
        Añadir al carrito
      </button>
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

function agregarAlCarrito(boton, titulo, precio) {
  const cantidad = parseInt(
    boton.parentElement.querySelector(".cantidad").textContent
  );

  if (cantidad > 0) {
    const producto = {
      titulo,
      precio,
      cantidad
    };

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const existente = carrito.find(p => p.titulo === titulo);

    if (existente) {
      existente.cantidad += cantidad;
    } else {
      carrito.push(producto);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert(`✅ Añadido ${cantidad} x ${titulo} al carrito.`);
  } else {
    alert("⚠️ Seleccioná al menos una unidad.");
  }
}
