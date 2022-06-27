// Crie uma aplicação Node que recebe uma string representando uma operação
// matemática e dois valores numéricos.O retorno deverá ser o resultado da 
//  operação selecionada utilizando os 2 valores 
//  fornecidos.

// - Exemplo 1:

//     Comando → npm run start add 2 2
//     Resposta esperada → 4

// - Exemplo 2:

//     Comando → npm run start sub 10 2
//     Resposta esperada → 8

// - Exemplo 3:

//     Comando → npm run start mult 50 2
//     Resposta esperada → 100

// - Exemplo 4:

//     Comando → npm run start div 100 2
//     Resposta esperada → 50

// import {numeros} from "./numeros.js"

const numeros = (operador, x, y) => {

    operador = process.argv[2]
    x = Number(process.argv[3])
    y = Number(process.argv[4])

    if (operador === "add") {
        return x + y
    } else if (operador === "sub") {
        return x - y
    } else if (operador === "mult") {
        return x * y
    } else if (operador === "div") {
        return x / y
    }
}

console.log(numeros())
