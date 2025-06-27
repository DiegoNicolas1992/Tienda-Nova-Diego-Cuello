function cargarNavbar() {
  const nav = document.getElementById("menuNav");
  nav.innerHTML = `
    <ul class="navbar">
      <li><a href="index.html">Inicio</a></li>
      <li><a href="ropa.html">Ropa</a></li>
      <li><a href="hogar.html">Hogar</a></li>
      <li><a href="electronica.html">Electrónica</a></li>
      <li><a href="carrito.html">Carrito</a></li>
    </ul>
  `;
}
