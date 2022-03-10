//console.log("ola mundo")
let nome="amanda"
//console.log(nome)
const idade = 10

//Numeros
let numero1 = "30"
let numero2 = "10"
//let resultado = numero1 + numero2
//console.log(resultado)

//TIPOS DE DADOS

//STRINGS
let primeiroNome  = "Amanda" + " "
let segundoNome   = "Moura"

//INTEIROS
let primeiroNumero  = 10
let segundoNumero   = 30

//BOLEANOS
let verdadeiro = true
let falso = false

//TIPOS DE DADOS - OBJETOS

//ARRAY
let listaNomes = []
listaNomes.push("Amanda")

let listaNumeros = [1,2,34,5,6,45,6]

//OBJETO
const amanda = {
  nome:"Amanda",
  telefone: "999999999",
  cpf: 78945612300,
  cidade: "Serra"
}

const david = {
  nome:"David",
  telefone: "999999999",
  cpf: 78945612300,
  cidade: "Vitoria"
}
//OPERADORES BÁSICOS
//SOMA            => +
//SUBTRAÇÃO       => -
//DIVISÃO         => /
//MULTIPLICAÇÃO   => *
//MAIS IGUAL      => +=
//MENOS IGUAL     => -=

let numero = 1
numero += 1
numero += 1
numero += 1
numero += 1

//BOLEANOS E COMPARAÇÕES
//MAIOR 10>10             => FALSE
//MENOR 1<10              => TRUE
//IGUALDADE 10 == 10      => TRUE
//DIFERENTE 10!== 12      => TRUE
//VERIFICA IGUALDADE E TAMBÉM O TIPO DE DADO (===) "10" === 10    => FALSE

//CONDICIONAIS (IF/ELSE)
const amanda2={
  nome: "Amanda",
  idade: 18,
  Cidade: "Serra"
}

// && (E)    AS DUAS VERIFICAÇÕES PRECISAM SER VERDADEIRAS
// || (OU)    QUALQUER UMA PRECISA SER VERDADEIRA
    if(amanda2.idade>=18){
    console.log("Essa pessoa atingiu a maioridade")
    if(amanda2.cidade == "Serra"){
      console.log("Cidade Verificada")
    }else{
      console.log("Cidade não Verificada")
    }
  }else{
    console.log("Essa pessoa não atingiu a maioridade")
  }

//FUNÇÕES JAVASCRIPT
//DECLARANDO
function soma(numero1, numero2){
  console.log(numero1 + numero2)
}

//CHAMANDO FUNÇÃO
soma(30,30)

function multiplicacao(numero1,numero2){
  console.log(numero1 * numero2)
}
multiplicacao(4,2)

function verificacaoMaioridade(idade){
  if(idade >= 18){
    console.log("Maioridade")
  }else{
    console.log("Menoridade")
  }
}
verificacaoMaioridade(15)

function divisao(num1,num2){
  return num1/num2
}
let resultado = divisao(2,4)

//ESTRUTURA DE REPETIÇÃO

let filaAtendimento = ["Amanda", "David", "Gisa", "Davidson"]
console.log("Tamanho do vetor: "+ filaAtendimento.length)

//PARA
for(let i = 0; i < filaAtendimento.length; i++){
  console.log(filaAtendimento[i])
}

//***********************************/
//DOM - MODELO DE OBJETO DO DOCUMENTO
//**********************************/

//document      => DOCUMENTO HTML
//querySeletor  => Seletor de Elemento
//let divpessoa = document.querySelector(".pessoa")

let divPessoa = document.querySelector(".pessoa")

let filaAtendimento1 = ["Amanda", "David", "Gisa", "Davidson"]
for(let i = 0; i < filaAtendimento1.length; i++){
  let div = document.createElement("div")
  div.innerText = filaAtendimento1[i]
  divPessoa.appendChild(div)
}
