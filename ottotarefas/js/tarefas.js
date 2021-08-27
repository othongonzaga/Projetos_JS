let inputNovaTarefa = document.querySelector('#inputNovaTarefa')
let btnAddTarefa = document.querySelector('#btnAddTarefa')
let listaTarefas = document.querySelector('#listaTarefas')

inputNovaTarefa.addEventListener('keypress', (e) => {
    if(e.keyCode == 13){
        let tarefa = {
            nome: inputNovaTarefa.value,
            id:gerarId(),
        }

        adicionarTarefa(tarefa)
    }
})

btnAddTarefa.addEventListener('click', (e) => {
    let tarefa = {
        nome: inputNovaTarefa.value,
        id:gerarId(),
    }

    adicionarTarefa(tarefa)
})

function gerarId(){
    return Math.floor(Math.random() * 3000)
}

function adicionarTarefa(tarefa){
    let li = criarTagLI(tarefa)
    listaTarefas.appendChild(li)
    inputNovaTarefa.value = ''
}

function criarTagLI(tarefa){
    let li = document.createElement('li')
    let span = document.createElement('span')
    span.classList.add('textoTarefa')

    let div = document.createElement('div')
    let btnEditar = document.createElement('button')
    btnEditar.classList.add('btnAcao')
    btnEditar.innerHTML= '<i class="fa fa-pencil"></i>'

    let btnExcluir = document.createElement('button')
    btnExcluir.classList.add('btnAcao')
    btnExcluir.innerHTML= '<i class="fa fa-trash"></i>'

    div.appendChild(btnEditar)
    div.appendChild(btnExcluir)

    li.appendChild(span)
    li.appendChild(div)
    return li


}