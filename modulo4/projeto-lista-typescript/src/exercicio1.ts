//exercicio1
// Crie uma função que receba um parâmetro qualquer
//  e que imprima no console o tipo da variável. 

// - Entrada esperada →  Várias possibilidades
// - Saída esperada → Nenhuma

type Varios = string | number | boolean

function tipoVariavel(a:Varios):void {

   console.log(typeof a)
  
}
tipoVariavel("ola")
tipoVariavel(10)
tipoVariavel(true)
