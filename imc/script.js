var peso;
var altura;
var imc;
var resultado;

function calcular(){
	peso = document.getElementById('peso').value;
	altura = document.getElementById('altura').value;
	imc = peso/(altura*altura);

	if (imc < 17){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<h3><br/> Muito cuidado, voce esta muito abaixo do peso </h3><br/>';
		return false;
	}else if (imc > 17 && imc < 18.49){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<h3><br/> Cuidado, voce esta abaixo do peso </h3><br/>';
		return false;	
	}else if (imc > 18.5 && imc < 24.99){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<h3><br/> Voce esta no peso ideal, que bom </h3><br/>';
		return false;
	}else if (imc > 25 && imc < 29.99){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<h3><br/> Cuidado, voce esta acima do peso </h3><br/>';
		return false;
	}else{
		return false;
	}
}