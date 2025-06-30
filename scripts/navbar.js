function cargarNavbar() {
  fetch("data/menu.json")
    .then(res => res.json())
    .then(menuItems => {
      const nav = document.getElementById("menuNav");
      const ul = document.createElement("ul");
      ul.classList.add("navbar");

      menuItems.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.url}">${item.titulo}</a>`;
        ul.appendChild(li);
      });

      nav.appendChild(ul);
    })
    .catch(error => {
      console.error("Error al cargar el menú de navegación:", error);
    });
}
