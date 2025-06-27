function cargarNavbar() {
  document.getElementById("menuNav").innerHTML = `
    <ul class="navbar">
      <li><a href="index.html">Inicio</a></li>
      <li><a href="ropa.html">Ropa</a></li>
      <li><a href="electronica.html">Electrónica</a></li>
      <li><a href="hogar.html">Hogar</a></li>
      <li><a href="carrito.html">Carrito</a></li>
      <li><a href="#" onclick="cerrarSesion()">Cerrar sesión</a></li>
    </ul>
  `;
}

function cerrarSesion() {
  localStorage.removeItem("usuarioLogueado");
  localStorage.removeItem("carrito");
  window.location.href = "login.html";
}
