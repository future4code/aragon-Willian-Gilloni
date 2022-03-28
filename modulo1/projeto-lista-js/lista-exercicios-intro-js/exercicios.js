// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo() {
    const altura = prompt("Digite a altura.")
    const largura = prompt("Digite a largura.")
    const area = altura * largura
    console.log(area)
}
calculaAreaRetangulo()
// EXERCÍCIO 02

function imprimeIdade(anoDeNascimento,anoAtual) {
  // foi declarado 2 variaveis para determinar a idade
anoDeNascimento = prompt("Digite seu ano de nascimento:")
anoAtual = prompt("Digite o ano atual")
const idade = anoAtual - anoDeNascimento
return idade
}
imprimeIdade(1990,2020)

// EXERCÍCIO 03

function calculaIMC(peso, altura) {
  // foi declarado uma variavel fazendo a conta do imc que seria o peso dividido por altura ao quadrado
  const imc = peso / (altura * altura)
 return imc
}
calculaIMC(85,1.80)

// EXERCÍCIO 04

function imprimeInformacoesUsuario(nome,idade,email) {
  // foi criado variaveis para ser pedido as informações pelo prompt para retornar pela função os nomes em template string
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome1 = prompt("Digite seu nome")
  const idade1 = prompt("Digite sua idade")
  const email1 = prompt("Digite seu email")
  return `Meu nome é ${nome1}, tenho ${idade1} anos, e meu email é ${email1}.`
}
imprimeInformacoesUsuario()

// EXERCÍCIO 05



function imprimeTresCoresFavoritas() {
  // foi criado 3 variaveis pedindo as cores favotiras para entao ser selecionado e impresso de uma array
const primeiraCorFavorita = prompt("Digite cor favorita")
const segundaCorFavorita = prompt("Digite segunda cor favorita")
const terceiraCorFavorita = prompt("Digite terceira cor favorita")
const tresCoresFavoritas = [primeiraCorFavorita,segundaCorFavorita,terceiraCorFavorita]
console.log(tresCoresFavoritas)
}
imprimeTresCoresFavoritas()

// EXERCÍCIO 06

function retornaStringEmMaiuscula(string) {
  // Criado uma Variavel para ser impresso em nome maiusculo
const oi = "oi"
console.log(oi.toUpperCase())
}
retornaStringEmMaiuscula()

// EXERCÍCIO 07


function calculaIngressosEspetaculo(custo, valorIngresso) {
  // declarado variaveis de valor e preço do  teatro para então mostrar quantos tickets foram vendidos
  const valor = prompt("Digite o valor do custo teatral:")
  const preco = prompt("Digite o preço do valor do ingresso:")
  const saida = valor / preco
  return saida
}
calculaIngressosEspetaculo()
// EXERCÍCIO 08

function checaStringsMesmoTamanho(string1, string2) {
  // função demonstrando a comparação de 2 strings com seus respectivos tamanhos
 const comparacao = string1.length == string2.length
 return comparacao
}
checaStringsMesmoTamanho("abc", "abcd")

// EXERCÍCIO 09
i = 0
function retornaPrimeiroElemento(array) {
  // criado 2 variaveis para retornar o primeiro elemento da array
const primeiroNumero = [1,2,3]
const primeiroItem = primeiroNumero[0]
return primeiroItem
}
retornaPrimeiroElemento([1,2,3])

// EXERCÍCIO 10
i = 0
function retornaUltimoElemento(array) {
  // criado 2 variaveis para mostrar o ultimo elemento da array
const ultimoNumero = [1,2,3]
const ultimoItem = ultimoNumero[i+2]
return ultimoItem
}
retornaUltimoElemento([1,2,3])

// EXERCÍCIO 11
i = 0
function trocaPrimeiroEUltimo(array) {
  // Usei os comandos shift e pop para remover da array e imprimir no console
  let array1 = [1,2,3,4,5]
  const firstElement = array1.shift()
  const lastElement = array1.pop()
  
  console.log(array1)
  console.log(firstElement)
  console.log(lastElement)

}
trocaPrimeiroEUltimo()


// EXERCÍCIO 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // checando igualdade das strings sem comparar  as Cases
  const comparacao = string1 == string2
  return comparacao
}
checaIgualdadeDesconsiderandoCase("Mamao","pera")


// EXERCÍCIO 13

function checaRenovacaoRG() {
  // implemente sua lógica aqui
   const anoAtual1 = prompt("Digite o ano atual:")
   const anoDeNascimento1 = prompt("Digite o ano de nascimento:")
   const RG = prompt("Digite o ano emitida do RG:")
   const vinteAnos = RG <= 20
   const cinquentaAnos = RG <= 50 > 21
   const idoso = RG > 50
   const renovacao = vinteAnos <= cinquentaAnos <= idoso
   console.log(renovacao)
  

}
checaRenovacaoRG()

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}