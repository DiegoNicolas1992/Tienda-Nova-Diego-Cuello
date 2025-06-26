function cargarNavbar() {
  fetch("data/menu.json")
    .then(res => res.json())
    .then(menu => {
      const nav = document.getElementById("menuNav");
      nav.innerHTML = `
        <span class="logo">🛒 Tienda Nova</span>
        ${menu.map(item => `<a href="${item.url}">${item.titulo}</a>`).join("")}
      `;
    });
}
