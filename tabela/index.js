var flamengo = { nome: "Flamengo", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var palmeiras = { nome: "Palmeiras", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
var atletico = { nome: "Atlético-MG", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };

function calculaPontos(time) {
  let pontos = time.vitorias * 3 + jogador.empates;
  return pontos;
}

flamengo.pontos = calculaPontos(flamengo);
palmeiras.pontos = calculaPontos(palmeiras);
atletico.pontos = calculaPontos(atletico);

let times = [flamengo, palmeiras, atletico];

function exibeTimesNaTela(times) {
  let elemento = "";
  for (let i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + times[i].nome + "</td>";
    elemento += "<td>" + times[i].vitorias + "</td>";
    elemento += "<td>" + times[i].empates + "</td>";
    elemento += "<td>" + times[i].derrotas + "</td>";
    elemento += "<td>" + times[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  let tabelaTimes = document.getElementById("tabelaTimes");
  tabelaTimes.innerHTML = elemento;
}

exibeTimesNaTela(times);

function adicionarVitoria(i) {
  let time = times[i];
  time.vitorias++;
  time.pontos = calculaPontos(time);
  exibeTimesNaTela(times);
}

function adicionarEmpate(i) {
  let time = times[i];
  time.empates++;
  time.pontos = calculaPontos(time);
  exibeTimesNaTela(times);
}

function adicionarDerrota(i) {
  let time = times[i];
  time.derrotas++;
  exibeTimesNaTela(times);
}
