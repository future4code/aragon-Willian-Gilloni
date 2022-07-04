//Exercicio1

// Crie uma variável chamada ano, do tipo string, 
// e atribua um valor a ela. Em seguida, tente reatribuir 
// um número a esta variável. O que acontece? Como fazer 
// para que esta variável também aceite number?

//RESPOSTA:Como ela esta atribuida a string,não ira rodar os numeros,é nescessarios
// atribuir condicional de string e number para poder rodas os dois
type Ano = string | number 
const ano:Ano = 2021

console.log(ano)