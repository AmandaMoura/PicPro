//AULA DOM
//SELETORES
//const button = document.querySelector ()
//const button = document.querySelectorAll ()
//const button = document.getElementById ()

//CRIANDO ELEMENTOS NO JAVASCRIPT
const body          = document.querySelector("body")
const tagButton     = document.createElement("button")
tagButton.innerText = "Extrato"
body.appendChild(tagButton)


//CRIANDO LISTA DE NOMES
let filaAtendimento = ["Amanda", "David", "Gisa", "Davidson"]

const lista = document.querySelector(".listaNomes")

//PARA         //CONDIÇÃO                 //INCREMENTO
for(let i = 0; i < filaAtendimento.length; i++){

    //CRIANDO UM LI
    const liNome = document.createElement("li")

    //ALIMENTO ESSE LI COM CADA NOME
    liNome.innerText = filaAtendimento[i]
    
    //lista.appendChild(liNome)

}



//EVENTOS

// 1. SELECIONAR O INPUT
    // 1.1 PEGAR O VALOR DO CAMPO

// 2. ADICONAR UM EVENTO NO BOTÃO/CLIQUE
// 3. GUARDAR O VALOR EM ALGUM LUGAR
// 4. SELECIONAR A LISTA
// 5. CRIAR UM LI (ITEM DA LISTA)
// 6. ALIMENTAR COM O VALOR DO INPUT
// 7. JOGAR ELE PARA DENTRO DA LISTA

//SELECIONANDO BOTÃO DO HTML
const btnAdicionar = document.querySelector(".btnAdicionar")
console.log(btnAdicionar)

// SELECIONANDO A LISTA DE NOMES
    const ol = document.querySelector("ol")

//INTERCEPTANDO EVENTO NO BOTÃO
btnAdicionar.addEventListener("click", pegarValores)

//FUNÇÃO QUE VAI EXECUTAR
function pegarValores(event){
    //console.log(event)
    
    //SELECIONANDO IMPUT
    const inputTexto = document.querySelector(".inputTexto")
    
    // PEGANDO O VALOR DO INPUT
    const valorInput = inputTexto.value
    
    // CRIANDO LI PARA ALIMENTAR A LISTA
    const li = document.createElement("li")

    //ALIMENTAR LI COM O VALOR DO CAMPO
    li.innerText = valorInput
    
    //ADICIONANDO LI COM AS INFORMAÇÕES DA LISTA
    ol.appendChild(li)
}

//ELEMENTO QUE VOCÊ QUER ESCUTAR
// TIPO DE EVENTO CLIQUE
// O QUE VOCÊ QUER QUE ELE FAÇA