function cargarNavbar() {
  const paginas = [
    { titulo: "Home", url: "index.html" },
    { titulo: "Electrónica", url: "electronica.html" },
    { titulo: "Ropa", url: "ropa.html" },
    { titulo: "Hogar", url: "hogar.html" }
  ];

  const menuNav = document.getElementById("menuNav");

  // Generar el menú dinámico
  menuNav.innerHTML = `
    <span class="logo">🛒 Tienda Nova</span>
    ${paginas.map(p => `<a href="${p.url}">${p.titulo}</a>`).join("")}
    <a href="#" onclick="logout()" class="logout">Logout</a>
  `;
}

// Función para cerrar sesión
function logout() {
  localStorage.removeItem("usuarioLogueado");
  window.location.href = "login.html";
}
