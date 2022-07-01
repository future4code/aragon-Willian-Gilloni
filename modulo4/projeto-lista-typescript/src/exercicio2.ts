// ## Exercício 2

// Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 

// - Formato esperado de saída → “Olá, me chamo {NOME}, nasci no dia {DIA}, no mês de {MÊS} e ano de {ANO}.”
// - Entrada esperada → string, string
// - Saída esperada → string

// Dica: Para dividir a string da data utilize o método .split()


function dataNascimento (nome:string,dataNascimento:string):string {
        
        const novaData = dataNascimento.split("/")

       return `Olá,me chamo ${nome}, nasci no dia ${novaData[0]}, no mês de ${novaData[1]} e ano de ${novaData[2]}`
         
}

console.log(dataNascimento("will","12/10/1989"))

