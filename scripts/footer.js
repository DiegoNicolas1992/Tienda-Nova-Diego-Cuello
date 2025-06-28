function cargarFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="footer-content">
      <p>&copy; 2025 Tienda Nova - Desarrollado por Diego Cuello</p>
      <p>Seguinos en:
        <a href="#">Instagram</a> |
        <a href="#">Facebook</a> |
        <a href="#">X</a>
      </p>
    </div>
  `;
  document.body.appendChild(footer);
}
