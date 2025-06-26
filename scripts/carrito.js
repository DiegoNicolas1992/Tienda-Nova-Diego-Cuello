document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("carrito-lista");
  const total = document.getElementById("total");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  let suma = 0;

  lista.innerHTML = carrito.map(item => {
    const subtotal = item.precio * item.cantidad;
    suma += subtotal;
    return `<li>${item.titulo} x ${item.cantidad} = $${subtotal}</li>`;
  }).join("");

  total.textContent = `Total: $${suma}`;
});
