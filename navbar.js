function cargarNavbar() {
  fetch("data/menu.json")
    .then(response => response.json())
    .then(paginas => {
      const menuNav = document.getElementById("menuNav");
      if (!menuNav) return;

      menuNav.innerHTML = `
        <span class="logo">🛒 Tienda Nova</span>
        ${paginas.map(p => `<a href="${p.url}">${p.titulo}</a>`).join('')}
      `;
    })
    .catch(error => console.error("Error al cargar el menú:", error));
}
