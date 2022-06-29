//exercicio1 a)Responda como comentário no seu código: 
//Como fazemos para acessar os parâmetros 
//passados na linha de comando para o Node?

//###RESPOSTA:Utiliza-se no git o comando (node "nome do arquivo" e os parametros)
// para serem acessados do js do vscode atraves do array process.argv[]

//b) Crie um programa que receba seu nome e sua idade.
// Após receber estes valores, imprima no console 
//uma mensagem que siga a seguinte estrutura:
//c)Altere o programa acima para que mostre também a sua idade daqui a sete anos.
//Resposta esperada → “Olá, (Nome)! 
//Você tem (sua idade) anos. Em sete 
//anos você terá (nova idade)”

const nome = process.argv[2]

const idade = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos.Em sete anos você terá ${idade + 7} `)