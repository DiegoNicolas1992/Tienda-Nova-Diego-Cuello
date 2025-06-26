function cargarNavbar() {
  const paginas = [
    { titulo: "Home", url: "index.html" },
    { titulo: "Electrónica", url: "electronica.html" },
    { titulo: "Ropa", url: "ropa.html" },
    { titulo: "Hogar", url: "hogar.html" },
    { titulo: "Logout", url: "login.html" }
  ];

  const nav = document.getElementById("menuNav");
  nav.innerHTML = `
    <span class="logo">🛒 Tienda Nova</span>
    ${paginas.map(p => `<a href="${p.url}">${p.titulo}</a>`).join('')}
  `;
}
