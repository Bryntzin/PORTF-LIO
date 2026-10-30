const etapasKanban = [
    {
        todo: ["Definir tema do projeto", "Reunião com cliente", "Definir MVP do projeto"],
        progress: [], review: [], done: []
    },
    {
        todo: [ "Definir tema do projeto", "Definir MVP do projeto"],
        progress: ["Reunião com cliente"], review: [], done: []
    },
    {
        todo: [],
        progress: ["Reunião com cliente","Definir MVP do projeto"], review: [], 
        done: ["Definir tema do projeto",]
    },
    {
        todo: [],
        progress: [], review: [], 
        done: ["Definir tema do projeto", "Reunião com cliente", "Definir MVP do projeto"]
    },
    {
        todo: ["Código do Html", "Código do Css", "Código do JavaScript", "TCC escrito"],
        progress: [], review: [], done: []
    },
    {
        todo: ["Código do JavaScript", ],
        progress: ["Código do Css", "Código do Html", "TCC escrito"], review: [], done: []
    },
    {
        todo: [],
        progress: ["Código do JavaScript", "TCC escrito"], review: [], 
        done: ["Código do Html", "Código do Css",]
    },
    {
        todo: [],
        progress: [], review: [], 
        done: ["Código do Html", "Código do Css", "TCC escrito", "Código do JavaScript"]
    },
];

let etapaAtual = 0;

function renderizarQuadro() {
    const dados = etapasKanban[etapaAtual];
    
    // Atualiza o indicador numérico
    document.getElementById("currentStep").innerText = etapaAtual + 1;
    
    // Atualiza os botões desativados nos limites
    document.getElementById("prevBtn").disabled = etapaAtual === 0;
    document.getElementById("nextBtn").disabled = etapaAtual === etapasKanban.length - 1;

    // Renderiza os cards nas respectivas colunas
    renderizarColuna("todo-cards", dados.todo);
    renderizarColuna("progress-cards", dados.progress);
    renderizarColuna("review-cards", dados.review);
    renderizarColuna("done-cards", dados.done);
}

function renderizarColuna(elementId, listaCards) {
    const container = document.getElementById(elementId);
    container.innerHTML = ""; // Limpa elementos antigos
    
    listaCards.forEach(texto => {
        const card = document.createElement("div");
        card.className = "kanban-card";
        card.innerText = texto;
        container.appendChild(card);
    });
}

function mudarEtapa(direcao) {
    etapaAtual += direcao;
    // Garante que fique dentro dos limites de 0 a 9
    if (etapaAtual < 0) etapaAtual = 0;
    if (etapaAtual >= etapasKanban.length) etapaAtual = etapasKanban.length - 1;
    
    renderizarQuadro();
}

// Inicializa o quadro na primeira etapa ao carregar a página
window.onload = renderizarQuadro;