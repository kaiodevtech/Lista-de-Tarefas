let botao = document.getElementById('btn')
let tarefa = document.getElementById('input-tarefa')
let listas = document.getElementById('list')

botao.addEventListener('click', function(){
    let paragrafo = document.createElement('p')
    paragrafo.innerHTML = tarefa.value
    paragrafo.classList.add('estilo-paragrafo')
    listas.appendChild(paragrafo)

    paragrafo.addEventListener('click', function(){
        paragrafo.style.textDecoration = 'line-through'
    })

     paragrafo.addEventListener('dbclick', function() {
        listas.removeChild(paragrafo)})
})