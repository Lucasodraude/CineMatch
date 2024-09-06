// Perguntas do teste
const perguntas = [
    {
        pergunta: "Qual gênero de filme você prefere?",
        respostas: ["Ação", "Comédia", "Drama", "Ficção Científica"]
    },
    {
        pergunta: "Qual dessas atividades você mais gosta?",
        respostas: ["Viajar", "Assistir filmes", "Praticar esportes", "Ler livros"]
    },
    {
        pergunta: "Qual é o seu ambiente ideal?",
        respostas: ["Cidade movimentada", "Praia ensolarada", "Montanhas tranquilas", "Espaço sideral"]
    },
    {
        pergunta: "O que você valoriza em um filme?",
        respostas: ["Cenas de ação", "Momentos engraçados", "Histórias emocionantes", "Efeitos visuais"]
    },
    {
        pergunta: "Que tipo de herói você prefere?",
        respostas: ["O destemido", "O engraçado", "O resiliente", "O inteligente"]
    },
    {
        pergunta: "Você gosta de finais felizes?",
        respostas: ["Sim, adoro!", "Depende do filme", "Não, gosto de algo inesperado", "Prefiro algo mais realista"]
    },
    {
        pergunta: "Se pudesse viajar no tempo, para onde iria?",
        respostas: ["Futuro distante", "Anos 80", "Idade Média", "Nunca viajaria"]
    },
    {
        pergunta: "Qual é sua maior qualidade?",
        respostas: ["Coragem", "Criatividade", "Empatia", "Raciocínio lógico"]
    }
];

// Variáveis globais para controlar o estado do quiz
let perguntaAtual = 0;
let respostasUsuario = [];

// Função para iniciar o quiz
function startQuiz() {
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = `
        <div id="quiz">
            <p id="pergunta"></p>
            <div id="respostas"></div>
            <button onclick="enviarResposta()">Enviar</button>
        </div>
    `;
    mostrarPergunta(); // Chama a função para mostrar a primeira pergunta
}

// Função para exibir a pergunta atual
function mostrarPergunta() {
    const perguntaElement = document.getElementById("pergunta");
    const respostasElement = document.getElementById("respostas");

    // Exibe a pergunta atual
    perguntaElement.textContent = perguntas[perguntaAtual].pergunta;

    // Exibe as opções de resposta
    respostasElement.innerHTML = "";
    perguntas[perguntaAtual].respostas.forEach((resposta, index) => {
        respostasElement.innerHTML += `
            <input type="radio" name="resposta" id="resposta${index}" value="${resposta}">
            <label for="resposta${index}">${resposta}</label><br>
        `;
    });
}

// Função para enviar a resposta e passar para a próxima pergunta
function enviarResposta() {
    const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');

    if (respostaSelecionada) {
        // Salva a resposta do usuário
        respostasUsuario.push(respostaSelecionada.value);

        // Avança para a próxima pergunta ou finaliza o quiz
        perguntaAtual++;
        if (perguntaAtual < perguntas.length) {
            mostrarPergunta(); // Mostra a próxima pergunta
        } else {
            calcularResultado(); // Finaliza e mostra o resultado
        }
    } else {
        alert("Por favor, selecione uma resposta!");
    }
}

// Função para calcular o resultado e redirecionar para a página de resultados
function calcularResultado() {
    const resultadoFilme = determinarFilme(respostasUsuario);
    localStorage.setItem('resultadoFilme', resultadoFilme);
    window.location.href = "result.html";
}

// Função para determinar o filme com base nas respostas
function determinarFilme(respostas) {
    const filmes = [
        "Mad Max: Estrada da Fúria",
        "As Branquelas",
        "O Regresso",
        "Interestelar",
        "Gladiador",
        "Se Beber, Não Case!",
        "À Procura da Felicidade",
        "Blade Runner 2049",
        "Pulp Fiction",
        "O Poderoso Chefão"
    ];

    // Exemplo de lógica simples para determinar o filme
    const index = respostasUsuario.length % filmes.length;
    return filmes[index];
}
