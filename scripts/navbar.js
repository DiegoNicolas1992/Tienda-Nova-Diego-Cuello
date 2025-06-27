function cargarNavbar(){
  const paginas=[
    {titulo:"Home",url:"index.html"},
    {titulo:"Electrónica",url:"pages/electronica.html"},
    {titulo:"Ropa",url:"pages/ropa.html"},
    {titulo:"Hogar",url:"pages/hogar.html"},
    {titulo:"Carrito",url:"pages/carrito.html"}
  ];
  document.getElementById("menuNav").innerHTML=`
    <span class="logo">🛒 Tienda Nova</span>
    ${paginas.map(p=>`<a href="${p.url}">${p.titulo}</a>`).join("")}
    <a href="pages/login.html" onclick="logout()">Logout</a>`;
}
function logout(){
  localStorage.removeItem("usuarioLogueado");window.location.href="pages/login.html";
}


