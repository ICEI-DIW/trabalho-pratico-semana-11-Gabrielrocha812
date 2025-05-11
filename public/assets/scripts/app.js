function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

window.addEventListener("DOMContentLoaded", () => {
  const id = getQueryParam("id");
  const container = document.getElementById("detalhesContainer");

  fetch('http://localhost:3000/filmes') 
    .then(response => response.json())
    .then(dados => {
      const filme = dados.find(f => f.id == id);

      if (!filme) {
        container.innerHTML = "<p>Filme não encontrado.</p>";
        return;
      }

      container.innerHTML = `
        <div class="container my-5">
          <div class="card bg-secondary text-white shadow-lg mx-auto" style="max-width: 700px;">
            <div class="text-center p-3">
              <img 
                src="${filme.imagem}" 
                class="img-fluid rounded-top"
                alt="${filme.titulo}" 
                style="max-width: 100%; height: auto;"
              >
            </div>
            <div class="card-body px-4 py-4">
              <h2 class="card-title mb-3 text-center">${filme.titulo}</h2>
              <p class="card-text"><strong>Descrição:</strong> ${filme.descricao}</p>
              <p class="card-text"><strong>Conteúdo:</strong> ${filme.conteudo}</p>
              <p class="card-text"><strong>Categoria:</strong> ${filme.categoria}</p>
              <p class="card-text"><strong>Autor:</strong> ${filme.autor}</p>
              <p class="card-text"><strong>Data:</strong> ${filme.data}</p>
              <div class="text-center">
                <a href="index.html" class="btn btn-light mt-3">← Voltar</a>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .catch((error) => {
      console.error("Erro ao carregar o filme:", error);
      container.innerHTML = "<p>Erro ao carregar os detalhes do filme. Tente novamente mais tarde.</p>";
    });
});
