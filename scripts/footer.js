function cargarFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="footer-content">
      <p>&copy; 2025 Tienda Nova - Todos los derechos reservados</p>
      <p>Desarrollado por Diego Cuello</p>
    </div>
  `;
  
  // Agrega el footer ANTES del primer <script> del body (buena práctica)
  const scripts = document.querySelectorAll("script");
  if (scripts.length > 0) {
    document.body.insertBefore(footer, scripts[0]);
  } else {
    document.body.appendChild(footer);
  }
}
