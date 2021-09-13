var notaDoPrimeiroBimestre = 5
var notaDoSegundoBimestre = 5
var notaDoTerceiroBimestre = 5
var notaDoQuartoBimetre = 5
var notaMedia = 6.0;

var notaFinal = ((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimetre) / 4).toFixed(1);

var containerNoHtml = document.querySelector('.container')

var inputCelsius= document.querySelector('input')

if(notaFinal >= notaMedia) {
  console.log('Aluno foi aprovado')
} else {
  console.log('Aluno foi reprovado')
}

console.log(notaFinal)

/*function converterParaFahrenheit() {
  var celsius = inputCelsius.value;
  var temperaturaEmFahrenheit = ( celsius * 1.8 ) + 32
  
  containerNoHtml.innerHTML += '<p class="hello-world">A temperatura convertida para fahrenheit é ' + temperaturaEmFahrenheit + 'F</p>'
}*/