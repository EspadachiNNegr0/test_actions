const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        const botaoSelecionado = document.querySelector(".botao.selecionado");

        if (botaoSelecionado) {
            botaoSelecionado.classList.remove("selecionado");
        }

        botao.classList.add("selecionado");
        

        const personagemSelecionado = document.querySelector(".personagem.selecionado");

        if (personagemSelecionado) {
            personagemSelecionado.classList.remove("selecionado");
        }

        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarBotao(){
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}



