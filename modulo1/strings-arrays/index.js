/* Exercicio 1

a)
ira aparecer nada pois não foi definido nenhuma variavel,undefined

b)
aparecera null,pois a array esta declarada como null

c)
irá imprimir no console o numero de elementos dentro da lista array,de acordo com
o comando length

d)
ira mostrar o elemento 0 da array,que seria o 3



e)subistutui o 4 situado como segundo na lista do array por 19

f)ira imprimir na tela 9,pois[i] que seria o primeiro elemento +6 iria para a posição 7
onde se encontra o elemento 9

*/

/* Exercicio 2
 
Neste exercicio irá aparecer todas as palavras em mauiscula devido al comando toUpperCase
tambem irá substituir todas as letras A por I e no final ira contar a quantidade de letras na frase

*/

/* Exercicio escrita de codigo 1

const nome = prompt("Digite o nome do usuário: ")
const email = prompt("Digite o e-mail do usuario: ")

console.log(" O e-mail " + email + " foi cadastrado com sucesso." + "Seja bem-vinda(o) " + nome )

*/

/* Exercicio escrita de codigo 2

let comidasFavoritas = [ "pizza","salada","yakisoba","chocolate","tofu"]
console.log(`${comidasFavoritas[0]}
${comidasFavoritas[1]}
${comidasFavoritas[2]}
${comidasFavoritas[3]}
${comidasFavoritas[4]}`)
comidasFavoritas[1] = prompt("Qual é seu prato favorito?")
console.log(comidasFavoritas)
const comidasPreferidas = ["pizza","salada","yakisoba","seitan","tofu"]
console.log(comidasPreferidas)

*/

 /*Exercicio escrita de codigo 3

const listaDeTarefas = []
const tarefa1 = prompt("Diga primeira tarefa para ser realizada no dia")
const tarefa2 = prompt("Diga segunda tarefa para ser realizada no dia")
const tarefa3 = prompt("Diga terceira tarefa para ser realizada no dia")
const adicinandoPrimeiraTarefa = listaDeTarefas.push(tarefa1)
const adicionandoSegundaTarefa = listaDeTarefas.push(tarefa2)
const adicionandoTerceiraTarefa = listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)
const indice = Number(prompt("0,1,2"))
listaDeTarefas.splice(indice,1)
console.log(listaDeTarefas)

// Desafio 1

const frase = prompt("frase")
const arrayDaFrase = ["f","r","a","s","e"]
console.log(arrayDaFrase)


/* Desafio 2

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const indice = Number(prompt("0,1,2,3,4"))
console.log(frutas.indexOf("Abacaxi"))
console.log("Abacaxi".length)
console.log(frutas.length)
*/