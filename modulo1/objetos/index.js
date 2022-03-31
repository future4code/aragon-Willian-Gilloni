// Exercicio de interpretação 1
// a)será impresso o primeiro item da lista de elenco
// será impresso o ultimo item da lista de elenco
// sera impresso a ultima propriedade da lista de transmissoesHoje,que seria {canal: "Globo", horario: "14h"}

// Exercicio de interpretação 2
// a)Será impresso as propriedades do objeto cachorro,sendo nome idade e raça
// Será impresso a copia do objeto cachorro com a mudança do nome para Juba
// Será impresso a copia do objeto gato ,porem subistituindo a letra A pelo O do nome
// b)Copia a array ou objeto selecionado

//  Exercicio de interpretação 3
// a) Irá imprimir apenas a propriedade backender do objeto pessoa que no caso seria falso
// b) Dentro da função,foi declarado um objeto com propriedades,no console seria impresso backender
// e altura,porem a unica propriedade que existe seria backender imprimindo falso.Seria nescessario
// adicionar a propriedade altura para assim poder ser impresso

// Exercicio de escrita 1
// a)

// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }
//  function imprimirFrase(banana){
// const frase = `Eu sou ${banana.nome}, mas pode me chamar de: ${banana.apelidos[0]}, ${banana.apelidos[1]} ou ${banana.apelidos[2]}.`
// console.log(frase)
// }
//  imprimirFrase(pessoa)
// b)

// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }
//  function imprimirFrase(banana){
// const frase = `Eu sou ${banana.nome}, mas pode me chamar de: ${banana.apelidos[0]}, ${banana.apelidos[1]} ou ${banana.apelidos[2]}.`
// console.log(frase)
// }

// const novaLista = {
//     ...pessoa,
//     apelidos: ["Bananao","bananinha","Embananado"] 

// }
// console.log(novaLista)
// imprimirFrase(novaLista)


 // Exercicio de escrita 2

// a)

// const professor = {
// 	nome: "Bruno", 
//   idade: 23, 
// 	profissao: "Instrutor"
// }

// const amigo = {
//         nome: "thiago", 
//       idade: 37, 
//         profissao: "Dev"
// }

//  b)

// const professor = {
// 	nome: "Bruno", 
//   idade: 23, 
// 	profissao: "Instrutor"
// }

// const amigo = {
//         nome: "thiago", 
//       idade: 37, 
//         profissao: "Dev"
// }
// function criaArray(labenu){

//     let dadosConsulta = [labenu.nome,labenu.nome.length,labenu.idade,labenu.profissao,labenu.profissao.length] 
    
//     return dadosConsulta
// }  
//  console.log(criaArray(professor))
//     console.log(criaArray(amigo))


// }


// Exercicio de escrita de codigo 3 a) b) c) D)

// const carrinho = []

// const fruta1 = {
//     nome: "Morango",
//     disponibilidade: true
// }
// const fruta2 = {
//     nome: "Uva",
//     disponibilidade:true

// }
// const fruta3 = {
//     nome: "Mamão",
//     disponibilidade:true
// }

// function insereFrutaCarrinho(compra){
//     carrinho.push(fruta1.nome)
//     carrinho.push(fruta2.nome)
//     carrinho.push(fruta3.nome)
//     return console.log(compra)

// }

// insereFrutaCarrinho(carrinho)

//------------------------------Desafio1------------------------------

// function imprimeObjeto(){
//     const formulario = { 
// nome: prompt("Qual é seu nome?"),
// idade: prompt("Qual a sua idade?"),
// profissao: prompt("Qual a sua profissão"),

//     }
//     console.log(formulario)
// }
// (imprimeObjeto())

// -------------------------------Desafio 2 ---------------------

// const filme1 = {
//     nome:"Batman",
//     anoDeLancamento:2000
// }

// const filme2 = {
//     nome:"Rei Leão",
//     anoDeLancamento:2000
// }

// function comparacaoAnoLancamento(){
//     const comparacao1 = filme1.anoDeLancamento < filme2.anoDeLancamento
//     const comparacao2 = filme1.anoDeLancamento == filme2.anoDeLancamento
//     console.log("O primeiro filme foi lançado antes do segundo",comparacao1)
//     console.log("O primeiro filme foi lançado no mesmo ano do segundo",comparacao2)
// }
// comparacaoAnoLancamento()

// ----------------------------------Desafio3--------------------------

const carrinho = []

const fruta1 = {
    nome: "Morango",
    disponibilidade: true
}
const fruta2 = {
    nome: "Uva",
    disponibilidade:true
}
const fruta3 = {
    nome: "Mamão",
    disponibilidade:true
}
function insereFrutaCarrinho(compra){
    carrinho.push(fruta1.nome)
    carrinho.push(fruta2.nome)
    carrinho.push(fruta3.nome)
    return console.log(compra)
}
insereFrutaCarrinho(carrinho)

function controleEstoque(estoqueZero) {
    return !estoqueZero.disponibilidade}

controleEstoque(fruta1)
