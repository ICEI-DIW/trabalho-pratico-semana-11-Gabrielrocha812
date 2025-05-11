window.addEventListener("DOMContentLoaded", () => {
  const carrossel = document.getElementById("carrossel");

  // Requisição para buscar os dados do servidor
  fetch('http://localhost:3000/filmes') // Altere para a URL correta do seu servidor
    .then((response) => response.json()) // Converte a resposta para JSON
    .then((dados) => {
      // Para cada filme recebido da API
      dados.forEach((filme) => {
        const card = document.createElement("div");
        card.className = "filme position-relative";
        card.style.cssText = "flex: 0 0 200px; height: 300px; border-radius: 10px; overflow: hidden;";

        card.innerHTML = `
          <a href="detalhes.html?id=${filme.id}" class="d-block position-relative w-100 h-100 text-decoration-none">
            <img src="${filme.imagem}" class="w-100 h-100 object-fit-cover rounded" alt="${filme.titulo}">
            <div class="position-absolute bottom-0 end-0 p-2 d-flex gap-2">
              <span class="icone coracao" onclick="event.preventDefault(); event.stopPropagation(); toggleCoracao(this)">&#10084;</span>
              <span class="icone estrela" onclick="event.preventDefault(); event.stopPropagation(); toggleEstrela(this)">&#9733;</span>
            </div>
          </a>
        `;

        carrossel.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Erro ao carregar os filmes:", error);
    });
});
