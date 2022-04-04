// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

retornaTamanhoArray()
// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}
retornaArrayInvertido()

// EXERCÍCIO 03

function retornaArrayOrdenado(array= [36,12,56,7,3]) {
    
array.sort((a,b)=> a - b);
return array
}

retornaArrayOrdenado()




// EXERCÍCIO 04

function retornaNumerosPares(array = [1,2,3,4,5,6,7,8]) {
   let arrayVazio = []
    for (let numero of array){
        if (array[numero] % 2 === 0){
            arrayVazio.push(array[numero])
        }   
    }
    return arrayVazio
}  
//  for 
// let numerosPares = []
// for( let i = 0; i < array.length; i++){
//      if(array[i] % 2 === 0){
    // retornaNumerosPares.push(array[i])
// }
// }
// return numeroPares

// filter
// let numerosPares = array.filter((numero)=>{
// return numero % 2 === 0
// })
retornaNumerosPares()
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
     let numerosPares = array.filter((numero)=> {
    return numero % 2 === 0
     })
    const numerosParesElevadosAoQuadrado = numerosPares.map((numero)=>{
        return numero * numero
    })
    return numerosParesElevadosAoQuadrado
}
retornaNumerosParesElevadosADois()

// EXERCÍCIO 06

function retornaMaiorNumero(array) {
    let maiorNumero = -Infinity
    
    for(let i = 0; i < array.length; i++){
        if(array[i] > maiorNumero){
            maiorNumero = array[i]
        }
    }

    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
    let numbers = {}

    if (num1 > num2){
        numbers = {
            maiorNumero: num1,
            maiorDivisivelPorMenos: num1 % num2 === 0,
            diferenca: num1 - num2
        }
    }else if(num2 > num1){
        number = {
            maiorNumero: num2,
            maiorDivisivelPorMenos: num2 % num1 === 0,
            diferenca:num2 - num1
        }
    }else if(num1 === num2){
        numbers = {
            maiorNumero: num1,
            maiorDivisivelPorMenos: num1 % num2 === 0,
            diferenca:num1 - num2
        }
    }return numbers
}
retornaObjetoEntreDoisNumeros(30,15)

// EXERCÍCIO 08



function retornaNPrimeirosPares(n) {

    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i)
        }
    }
    return numerosPares;
}
retornaNPrimeirosPares(3,0,2)

// EXERCÍCIO 09

function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA ===ladoB && ladoA === ladoC && ladoA === ladoC){
        return "Equilátero"
    } else if (ladoA === ladoB || ladoA=== ladoC || ladoC=== ladoB){
        return "Isósceles"
    }else if(ladoA !== ladoB || ladoA !== ladoC || ladoB !== ladoC){
        return "Escaleno"
    }
}
classificaTriangulo(3,4,5)

// EXERCÍCIO 10

function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por${filme.atores}`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    // let pessoa1 = {
    //     nome: "Astrodev",
    //     idade: 27,
    //     email: "chijo@labenu.com.br",
    //     endereco: "Rua dos Bobos, 0"
    // }
    let nome1 = {
        ...pessoa,
        nome:"ANÔNIMO",
       
    }
    return nome1 
}
// retornaPessoaAnonimizada()

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    if(altura>= 1.5 && idade > 14 && idade <60){
        return pessoas
    }
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort((a,b)=>a-b);
    return array
}


    
// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}