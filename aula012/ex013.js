var agora = new Date()
var diaSem = agora.getDay()
/*
    0-domingo
    1-segunda
    2-t
    3-q
    4-quinta
    5-sexta
    6-s
*/
switch(diaSem){
    case 0:
        console.log('Hoje é domingo')
        break
    case 1:
        console.log('Hoje é segunda')    
}    