// Genera el menú de navegación dinámicamente
function cargarNavbar() {
  const paginas = [
    { titulo: "Home", url: "index.html" },
    { titulo: "Electrónica", url: "electronica.html" },
    { titulo: "Ropa", url: "ropa.html" },
    { titulo: "Hogar", url: "hogar.html" }
  ];

  const menuNav = document.getElementById("menuNav");

  menuNav.innerHTML = `
    <span class="logo">🛒 Tienda Nova</span>
    ${paginas.map(p => `<a href="${p.url}">${p.titulo}</a>`).join("")}
    <a href="#" onclick="logout()" class="logout">Logout</a>
  `;
}
