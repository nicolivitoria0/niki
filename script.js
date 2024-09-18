const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [ //abre lista de perguntas
    { //abre objeto de pergunta
        enunciado: "Você acorda em uma sala vazia, com uma única tela acesa dizendo que existe uma tecnologia que poderia ser usada para o bem. Qual seria sua primeira impressão?",
        alternativas: [
            {
                texto:  "Acho isso uma ótima ideia",
                afirmacao: "afirmacao"
            },
            {
                texto: "Acho isso uma ideia perigosa",
                afirmacao:  "afirmacao"
            }
          
           
        ]
    },//fecha objeto de pergunta
    {
        enunciado: "Você descobre que  a tecnologia é na verdade uma inteligência artificial extremamente perigosa se for usada de maneira errada. O que você faz?",
        alternativas: [
            {
                texto: "Vai atrás de mais informações sobre o assunto.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Fica com medo e espera que tudo seja um sonho.",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Você acorda em seu quarto e percebe que tudo foi um sonho, mas na dúvida decide pesquisar para ver se essa inteligência artificial é mesmo real. O que você pesquisaria?",
        alternativas: [
            {
                texto: '"Existe uma IA que ajuda na ética?"',
                afirmacao:"afirmacao"
            },
            {
                texto:"Decido não pesquisar e tento esquecer disso.",
                afirmacao:"afirmacao"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";  

function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        
        function respostaSelecionada(opcaoSelecionada){
            const afirmacoes = opcaoSelecionada.afirmacao;
            historiaFinal += afirmacoes + " ";
            atual++
            mostraPergunta();
        }
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta()
