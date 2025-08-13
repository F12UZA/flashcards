function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
        <div class="cartao_conteudo">
            <h3>${categoria}</h3>
            <div class="pergunta">
                ${pergunta}
            </div>
            <div class="resposta">
                ${resposta}
            </div>
        </div>
    `

let respostavisivel = false

function viracartao(){
respostavisivel = !respostavisivel
cartao.classList.toggle('active', respostavisivel)
}

cartao.addEventListener('click', viracartao)



    container.appendChild(cartao)
}