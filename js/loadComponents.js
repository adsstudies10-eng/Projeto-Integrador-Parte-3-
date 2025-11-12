document.addEventListener("DOMContentLoaded", () => {
  async function loadComponent(id, file) {
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Erro ao carregar ${file}`);
      const html = await response.text();
      document.getElementById(id).innerHTML = html;
    } catch (error) {
      console.error("Erro ao carregar componente:", error);
    }
  }

loadComponent("header", "componentes/header.html");
loadComponent("nav", "componentes/nav.html");
loadComponent("footer", "componentes/footer.html");
});
