// ## Exercício 3

// Analise a função a seguir escrita em JS, e responda as perguntas:


// function obterEstatisticas(numeros) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// ### Parte 1

// Quais são as entradas e saídas dessa função? 
// Copie a função para um arquivo typescript e faça a
//  tipagem desses parâmetros. Utilize o type para tipar
//   a saída da função.

// Dica: Lembre-se da variável de tipo do typescript, 
// que é uma descrição estrutural do comportamento de um objeto.
//  Ou seja, o type define as propriedades e tipos que o objeto
//   deve ter.

//Parte 1
//RESPOSTA:
//a entrada é um parametro de um array de numeros e 
//a saida é um objeto contendo as propriedades maior,menor e media

// type Estatisticas = {
//     maior:number,
//     menor:number,
//     media:number
// }

// function obterEstatisticas(numeros:any):Estatisticas {

//     const numerosOrdenados = numeros.sort(
//         (a:number, b:number) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// console.log(obterEstatisticas([2,3]))

//Parte 2
// Quais outras variáveis compõem a implementação dessa função? 
// Tipe todas elas.

// Dica: Procure por todas as declarações, normalmente tipamos 
// as variáveis criadas!

//RESPOSTA:
//const numerosOrdenados,let soma,const estatisticas

type Estatisticas = {
    maior:number,
    menor:number,
    media:number
}

function obterEstatisticas(numeros:number[]):Estatisticas {

    const numerosOrdenados:number[] = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([2,3,8,16,34,42]))