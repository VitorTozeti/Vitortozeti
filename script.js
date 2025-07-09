const item1 = document.getElementById('item1');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeSidebar');

item1.addEventListener('click', (e) => {
  e.stopPropagation(); // evita que o clique continue subindo
  setTimeout(() => {
    sidebar.classList.add('open');
  }, 0); // garante que o clique fora não seja interpretado antes
});


closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
});

// Fecha a sidebar ao clicar fora dela
document.addEventListener('click', (event) => {
  // Verifica se a sidebar está aberta
  const isOpen = sidebar.classList.contains('open');
  
  // Verifica se o clique foi fora da sidebar e fora do botão que abre
  if (
    isOpen &&
    !sidebar.contains(event.target) &&
    event.target !== item1
  ) {
    sidebar.classList.remove('open');
  }
});

// Função para carregar e exibir as habilidades
async function carregarHabilidades() {
  const response = await fetch('habilidades.json');
  const habilidades = await response.json();

  const container = document.getElementById('cards-container');

  habilidades.forEach(habilidade => {
    const card = document.createElement('div');
    card.className = 'card-habilidade';

    card.innerHTML = `
                <div class="icone-habilidade">${habilidade.icone}</div>
                <h2>${habilidade.nome}</h2>
                <p>Nível: ${habilidade.nivel}</p>
            `;

    container.appendChild(card);
  });
}

window.onload = carregarHabilidades;

// Curriculo download
document.getElementById("CurrV").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "Vitor_curriculo.pdf";
  link.download = "Vitor_curriculo.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
)
