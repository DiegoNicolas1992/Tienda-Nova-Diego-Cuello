function cargarNavbar() {
  fetch("data/menu.json")
    .then(response => response.json())
    .then(menu => {
      const nav = document.getElementById("menuNav");
      const ul = document.createElement("ul");
      ul.className = "navbar";

      menu.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.url;
        a.textContent = item.titulo;

        // Si es Logout, agregamos el cierre de sesión
        if (item.titulo.toLowerCase() === "logout") {
          a.addEventListener("click", (e) => {
            e.preventDefault();
            sessionStorage.removeItem("usuarioLogueado");
            window.location.href = "login.html";
          });
        }

        li.appendChild(a);
        ul.appendChild(li);
      });

      nav.appendChild(ul);
    })
    .catch(error => console.error("Error al cargar el menú:", error));
}
