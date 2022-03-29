//---------- Exercicio de interpretação de codigo 1--------------
// a)o codigo pede ao usuario para digitar um numero
// e mostrar se o numero seria par ou impar,declarando
// verdadeiro ou falso
//b)par
//c)impar

//------------------Exercicio de interpretação de codigo 2-----------------
// a)Determinar o preço e o valor de uma das frutas escolhidas pelo usuario
//b)O preço da fruta Maça é R$ 2.25
//c)sera impresso "O preço da fruta Pêra é R$ 5 pois sem o break
//ele iria imprimir uma fruta que não esta na tabela

//-----------------Exercicio de interpretação de codigo 3 -----------------

//a)Declarando uma variavel onde socilita um numero para o usuario,sempre 
// bom lembrar que é nescessario usar number para transformar string em numero
//b) para numero 10 a mensagem seria Esse numero passou no teste,para o numero -10
// daria undefined pois não foi declarado numero < 0
//c)sim havera um erro,pois variavel mensagem teria que ser declarada
//fora do escopo do if,para assim ser impresso Essa mensagem é secreta

//-------------------Exercicio de escrita de codigo 1------------------------------

// function adquirirCNH(){
  
//     if(idade >= 18) {
//         return "Você pode dirigir"
//     } else {
//         return "Você não pode dirigir"
//     }
// }
// const idade = Number(prompt("Informe sua idade:"))

// adquirirCNH(idade)


// ---------------------------------Exercicio de escrita de codigo 2-------------------------------------
//a)
// function periodoAluno(aluno){
//     const matutino = "matutino"
//     const vespertino = "vespertino"
//     if (aluno === matutino) {
//         return "Bom dia!"
//     }else if (aluno === vespertino){
//             return "Boa tarde!"
//         }
//     else {
//         return "Boa noite!"
//     }
  
// }

// const periodo = prompt("Qual periodo voce estuda?")
// const resultado = periodoAluno(periodo)
// console.log(resultado)

//-------------------------------Exercicio de escrita de codigo  3----------------------------------------

// function periodoAluno(aluno){
//     const matutino = "m"
//     const vespertino = "v"
//     switch(aluno){
//         case "m":
//         return "Bom dia!"
//         break
//         case "v":
//             return "Boa tarde!"
//             break
//             case "n":
//                 return "Boa noite!"
//             break
//             default:
//             return "letra invalida!"
//     }
    
  
// }

// const periodo = prompt("Qual periodo voce estuda?")
// const resultado = periodoAluno(periodo)
// console.log(resultado)

//---------------------------------------Exercicio de escrita de codigo 4--------------------------------------
// function assistirFilme(genero,preco){
//     if (genero === "fantasia" && preco < 15){
//         return "Bom filme!"
//     }   else {
//             return "Escolha outro filme"
//         }
// }
//     const generoFilme = prompt("Qual gênero de filme voce quer assistir?")
//     const preco1 = Number(prompt("Quanto voce esta disposto a pagar?"))
//     const resultado = assistirFilme(generoFilme,preco1)
// console.log(resultado)
    
//------------------------------Desafio 1 ----------------------------------------------------

// function assistirFilme(genero,preco){
//     if (genero === "fantasia" && preco < 15) {
//         const lanche = prompt("Qual lanchinho voce ira comprar?")
//         return `Bom filme!,aproveite o seu ${lanche}`
//     }   else {
//             return "Escolha outro filme"
//         }
// }
//     const generoFilme = prompt("Qual gênero de filme voce quer assistir?")
//     const preco1 = Number(prompt("Quanto voce esta disposto a pagar?"))

//     const resultado = assistirFilme(generoFilme,preco1)
// console.log(resultado)



//--------------------------------Desafio 2 --------------------------------------------------
// function informacoes(jogo){
// const nome = prompt("Digite seu nome completo")
// const tipoDeJogo = prompt("informe o tipo de jogo")
// const etapaDoJogo = prompt("Informe a etapa do jogo")
// const categoria = Number(prompt("Informe a categoria do jogo"))
// const ingressos = Number(prompt("Informe Quantidade de ingressos"))

// const ingressoPrimeiraCategoria = {
//     semiFinais : 1320.00 ,
//     decisaoTerceiroLugar:660.00 ,
//     final: 1980.00 
// }
//     switch(jogo) {
//         case (semiFinais ===1320.00 && decisaoTerceiroLugar === 660.00 && final ===1980.00)
//         console.log("primeira categoria")
//     } 

//     }


// const ingressoSegundaCategoria = {
//     semiFinais: 880.00 ,
//     decisaoTerceiroLugar: 440.00,
//     final: 1320.00 
// }
// const ingressoTerceiraCategoria = {
//     semiFinais: 550.00,
//     decisaoTerceiroLugar: 330.00,
//     final: 880.00 
// }
// const ingressoQuartaCategoria = {
//     semiFinais:220.00,
//     decisaoTerceiroLugar:170.00,
//     final: 330.00
// }
