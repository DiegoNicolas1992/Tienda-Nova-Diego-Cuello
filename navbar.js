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
document.addEventListener("click", function (e) {
  if (e.target.tagName === "A" && e.target.textContent === "Logout") {
    e.preventDefault();
    localStorage.removeItem("usuarioLogueado");
    window.location.href = "login.html";
  }
});
