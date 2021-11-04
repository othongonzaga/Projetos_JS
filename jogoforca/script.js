let categoria = document.querySelector("#category");
let letrasErradas = document.querySelector(".wrongLetters");
let traços = document.querySelector(".dashes");
let olhos = Array.from(document.querySelectorAll(".eyes"));
let partesBoneco = Array.from(document.querySelectorAll("#person div"));
partesBoneco = partesBoneco.slice(2, partesBoneco.length);

let palavraAtual;
let letrasErradasArray = [];
let indiceBoneco;

const numTentativas = 7;
const opacidadeOlhos = 0.3;

/*
Cria as categorias em objetos
*/

const categorias = {
    frutas: ["banana", "maça", "laranja", "mamao", "uva", "melancia", "melao"],
    profissoes: ["engenheiro", "advogado", "medico", "professor", "pescador"],
    animais: ["papagaio", "galo", "cachorro", "gato", "galinha", "cavalo", "porco"],
    cores: ["amarelo", "azul", "laranja", "roxo", "vermelho", "marrom"]
}

/*
Gera um numero aleatorio de acordo com o valor máximo passado no argumento
*/

function retornaNumeroAleatorio(max) {
    return Math.floor(Math.random() * max);
}

/*
Transforma as chaves do objeto em array
*/

function retornaArrayCategorias() {
    return Object.keys(categorias);
}

/*
Seleciona uma categoria aleatoriamente
*/

function retornaCategoriaAleatoria() {
    const arrayCategorias = retornaArrayCategorias();
    let indiceCategoria = retornaNumeroAleatorio(arrayCategorias.length);
    let categoriaAleatoria = arrayCategorias[indiceCategoria];

    return categoriaAleatoria;
}

/*
Exibe a categoria na UI
*/

function defineCategoria() {
    categoria.innerHTML = retornaCategoriaAleatoria();
}

/*
Define aleatoriamente a palavra que será adivinhada
*/

function definePalavraAtual() {
    const arrayPalavras = categorias[categoria.innerHTML];

    let indicePalavra = retornaNumeroAleatorio(arrayPalavras.length);

    palavraAtual = arrayPalavras[indicePalavra];

    ocultaPalavra();
}

/*
Oculta a palavra para ser exibida na UI
*/

function ocultaPalavra() {
    let palavraOcutada = "";

    for (const iterator of palavraAtual){ //Ajustar isso aqui

    palavraOcutada += "-";
}

    defineMensagem(palavraOcutada);
}

/*
Recebe o evento do teclado e passa apenas o valor da letra para a função tentativa
*/

function getCharCode(e){
    tentativa(e.key);
}

/*
Recebe uma String
Substitui os traços da palavra oculta pela letra passada como parâmetro
*/

function atualizaTraços(letra){
    let palavraAux = "";

    for (let i = 0; i < palavraAtual.length; i++) {
        if(palavraAtual[i] === letra){
            palavraAux += letra;

        } else if(traços.innerHTML[i] != "-"){
            palavraAux += traços.innerHTML[i];

        } else{
            palavraAux += "-";

}

}

    defineMensagem(palavraAux);
}

/*
Desenha a parte do corpo corrente
*/

function desenhaBoneco(){
    partesBoneco[indiceBoneco].classList.remove("hide");
    indiceBoneco++;
}

/*
Recebe uma String
Verifica se a String contem na palavra
*/

function tentativa(letra){
    if(palavraAtual.includes(letra)){

    atualizaTraços(letra);
    }else {
        letrasErradasArray.push(letra);
        letrasErradas.innerHTML = "Letras erradas: " + letrasErradasArray;

        if(partesBoneco.length > indiceBoneco){
        desenhaBoneco();

        }

    }

    verificaFimDeJogo();
}

/*
Verifica a condição para encerramento (jogador ganhou ou perdeu)
Se ganhou, exiba uma mensagem. Ex: Você venceu
Se perdeu, exiba uma mensagem. Ex: Você perdeu
Se não, não faça nada
*/

function verificaFimDeJogo(){
    if(!traços.innerHTML.includes('-')) {
        defineMensagem("Você venceu!");
        window.removeEventListener("keypress", getCharCode);

    }else if(letrasErradasArray.length >= numTentativas){
        desenhaOlhos();
        defineMensagem("Você perdeu!");
        window.removeEventListener("keypress", getCharCode);

    }   

}

/*
Atualiza a mensagem exibida na UI
Recebe como argumento uma String e a define como a mensagem na UI.
*/

function defineMensagem(message){
    traços.innerHTML = message;
}

/*
Desenha os olhos do personagem
*/

function desenhaOlhos(){
    olhos.forEach((olho => {
    olho.style.opacity = 1;
    olho.style.zIndex = 10;

}));

}

/*
Oculta as partes do corpo do personagem
*/

function ocultaBoneco(){
    olhos.forEach((olho => {
    olho.style.opacity = opacidadeOlhos;

}));

partesBoneco.forEach(parteBoneco => {
    parteBoneco.classList.add("hide");
});

}

/*
Inicia as configurações do jogo
*/

function iniciaJogo(){
    indiceBoneco = 0;
    letrasErradasArray = [];
    letrasErradas.innerHTML = "Letras erradas: ";
    ocultaBoneco();
    defineCategoria();
    definePalavraAtual();
    window.addEventListener("keypress", getCharCode);
}

window.addEventListener("load", iniciaJogo);