/*
--------------Exercicio de interpretação 1 ----------------------
a)Será impresso no console a muitiplicação da variavel x5,sendo primeiro console 10
e o segundo 50
b)Irá aparecer a multiplicação apenas da ultima minhaFuncao

function minhaFuncao(variavel) {
	return variavel * 5
}

minhaFuncao(2)
minhaFuncao(10)
*/


/* --------------Exercicio de interpretação 2----------------------

a)neste codigo ira imprimir se o texto impreso na variavel textoDoUsuario
 seria cenoura,caso positivo true,caso negativo false,
  e traria a resposta em letras minusculas.

b)1 = True
2 = True
3 = True

*/
/* ------------exercicio de escrita de código 1 -------------------
a)
const frase = "Eu sou Willian, tenho 32 anos,moro em Limeira e sou estudante."
function imprimeMensagem() {
   return frase
}
imprimeMensagem(frase)

b)
function imprimirFrase(nome, idade, cidade, profissao){
return `Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}`  
}

imprimirFrase("Willian",32,"Limeira","Desenvolvedor")
*/

// -------------------------Exercicio de escrita 2 ------------------------

/* a)
function soma(num1,num2){
const  resultado = num1 + num2
    return resultado
}

soma(5,10)
*/
/*
b)
function somarNumero(a,b){
const comparacao = a >= b
return comparacao
}

somarNumero(10,5)
*/
/*c)
function verificarNumeroPar(i) {
    const calculoDiv = i % 2
    return calculoDiv == 0
}

verificarNumeroPar(5)
*/


/*d)
function alterarMensagem(mensagem){
 mensagem.toUpperCase()
 return mensagem
}

alterarMensagem("Meu nome é Willian")

*/

//-----------------------Exercicio 3--------------------------
/*const primeiroNum = Number(prompt("Digite um numero"))
const segundoNum = Number(prompt("Digite proximo numero"))

function somar(primeiroNum,segundoNum){
    const calculoSoma = primeiroNum + segundoNum
    console.log(calculoSoma)
    return calculoSoma
}

function subtrair(primeiroNum,segundoNum){
    const calculoSubtracao = primeiroNum - segundoNum
    console.log(calculoSubtracao)
    return calculoSubtracao
}
function multiplicacao(primeiroNum,segundoNum){
    const calculoMultiplicacao = primeiroNum * segundoNum
    console.log(calculoMultiplicacao)
    return calculoMultiplicacao
}
function divisao(primeiroNum,segundoNum){
    const calculoDivisao = primeiroNum / segundoNum
    console.log(calculoDivisao)
    return calculoDivisao

}

somar(primeiroNum,segundoNum)
subtrair(primeiroNum,segundoNum)
multiplicacao(primeiroNum,segundoNum)
divisao(primeiroNum,segundoNum)
*/

// --------------------------------------------Desafio 1 ------------------------------------------
/*a)
 const somarNumeros = (a,b)=>{
    const comparacao = a >= b
    return comparacao
    }
    
    somarNumero(10,5)
*/
/*
 b)const somarNumeros = (a,b)=>{
    const comparacao = a >= b
    console.log(comparacao)
    }
    
    somarNumero(10,5)

*/
/* ---------------------------------------Desafio 2 -------------------------------------------------
function pitagoras(c1,c2){
const h = (c1 * c1) + (c2 * c2); 
console.log(h)
   return pitagoras
}

pitagoras(9,12)
*/