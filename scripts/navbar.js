function cargarNavbar() {
  const paginas = [
    { titulo: "Home", url: "index.html" },
    { titulo: "Electrónica", url: "electronica.html" },
    { titulo: "Ropa", url: "ropa.html" },
    { titulo: "Hogar", url: "hogar.html" },
    { titulo: "Carrito", url: "carrito.html" }
  ];

  document.getElementById("menuNav").innerHTML = `
    <span class="logo">🛒 Tienda Nova</span>
    ${paginas.map(p => `<a href="${p.url}">${p.titulo}</a>`).join("")}
    <a href="login.html" onclick="logout()" class="logout">Logout</a>
  `;
}

function logout() {
  localStorage.removeItem("usuarioLogueado");
  window.location.href = "login.html";
}
