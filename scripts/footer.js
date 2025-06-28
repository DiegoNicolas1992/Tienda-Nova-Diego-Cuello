function cargarFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="footer-content">
      <p>&copy; 2025 Tienda Nova - Todos los derechos reservados</p>
      <p>Desarrollado por Diego Cuello</p>
    </div>
  `;
  document.body.appendChild(footer);
}
