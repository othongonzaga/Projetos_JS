function calcular(){
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);

    let media = (nota1 + nota2)/2 ;

    if(media >= 7)
      alert("Parabens, aprovado! Media "+media);
    else
     alert("Reprovado!")
   }