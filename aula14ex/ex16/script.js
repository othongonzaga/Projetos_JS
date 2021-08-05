function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERROR] Falha nos dados')
    }else{
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert('[ERROR] Impossivel com passo igual a 0')
        }
        if(i > f){ //contagem progressiva
            for(c = i; c <= f; c += p){
                res.innerHTML += `${c}\u{1f449}`
            }
        }else{ //contagem regressiva
            for(c = f; c >= i; c -= p){
                res.innerHTML += `${c}\u{1f449}`
            }
        }
            res.innerHTML += `\u{1f3c1}`
    }
    
}