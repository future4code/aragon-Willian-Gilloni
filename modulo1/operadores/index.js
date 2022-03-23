/*
Exercicio 1
a = false
b = false
c = true
d = boolean
*/

/*
Exercicio 2

teoricamente a soma das variaveis primeiro e segundo numero
pórem precisa modificar algumas coisas para poder ler

*/

/*

Exercicio 3
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

Acrescenta Number atras do prompt para poder transformar transformar a string
String(frase) em um Number(número), para então ler o número.

*/

/* Exercicio de escrita de código 1

let suaIdade = Number(prompt("Qual é a sua idade? "))
let idadeMelhorAmigo = Number(prompt("Qual é a idade do seu melhor amigo ou amiga? "))

resultado = suaIdade - idadeMelhorAmigo

console.log("Sua idade é maior que do seu amigo ou amiga?", suaIdade > idadeMelhorAmigo )

*/ 
/* Exercicio de escrita de código 2

let num1 = Number(prompt("Digite um número par"))
resultado = num1 % 2
console.log(resultado)

c) todo numero par resulta em 0 quando divisivel por 2
d) todo numero impar resulta em 1 quando divisivel por 2

*/
 //Exercicio de escrita de código 3

let idade = Number(prompt("Qual a sua idade?"))

console.log("Sua idade em meses é: ", idade * 12,)
console.log("Sua idade em dias é: ", idade * 365)
console.log("Sua idade em horas é: ", idade * 12 * 365 * 24)

// Exercicio de escrita de código 4

let primeiroNumero = Number(prompt("Qual o primeiro número?"))
let segundoNumero = Number(prompt("Qual o segundo numero? "))

const primeiroDivisorSegundo = primeiroNumero % segundoNumero
const segundoDivisorPrimeiro = segundoNumero % primeiroNumero

console.log(primeiroNumero)
console.log(segundoNumero)

console.log("O primeiro numero é maior que o segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro numero é igual ao segundo?", primeiroNumero == segundoNumero)
console.log("O primeiro numero é divisivel pelo segundo?", primeiroDivisorSegundo == 0)
console.log("O segundo número é divisivel pelo primeiro?", segundoDivisorPrimeiro == 0)

/*Desafio 1
A)
let farenheit = 77
let kelvin = (farenheit - 32)*(5/9) + 273.15
console.log("77 fanheheit é igual a", kelvin , "k")

B)
let celsius = 80

let farenheit = (celsius)*(9/5) + 32
console.log("A temperatura de 80°C para farenheit é: ", farenheit, "°f")

C)
let celsius = 30

let farenheit = (celsius * (9/5)) + 32
console.log("A temperatura de 30°C para farenheit é: ", farenheit, "°f")

let kelvin = celsius + 273.15 
console.log("A temperatura de 30°C para kelvin é: ", kelvin , "K")

D)
let celsius = Number(prompt("Digite a temperatura em °C para converter em °F e K"))

let farenheit = (celsius * (9/5)) + 32
console.log("A temperatura de 30°C para farenheit é: ", farenheit, "°f")

let kelvin = celsius + 273.15 
console.log("A temperatura de 30°C para kelvin é: ", kelvin , "K")

*/

/*
Desafio 2

A)
let consumoEnergia = 280
let valorPorKwh = 0.05
let valorContaLuz = consumoEnergia * valorPorKwh
let descontoContaLuz = 0.15
let valorContaLuzFinal = (valorContaLuz * descontoContaLuz)
console.log("Sua conta de luz é de", valorContaLuzFinal, "reais.")



B)
let consumoEnergia = 280
let valorPorKwh = 0.05
let valorContaLuz = consumoEnergia * valorPorKwh
let descontoContaLuz = 0.15
let valorContaLuzFinal = (valorContaLuz * descontoContaLuz)
console.log("Sua conta de luz é de", valorContaLuzFinal, "reais.")
*/

/*
Desafio 3
a)

let libra = 20
let kilo = libra / 2.205
console.log("20lb equivalem a ", kilo, "kg.")

b)

let onça = 10.5
let kilo = onça / 35.274
console.log("10.5oz é igual a", kilo, "kg.")


c)
let milha = 100
let metro = milha * 1609.34
console.log("100mi em metros é igual ", metro, "m.")

d)
let pe = 50
let metro = pe / 3.281
console.log("50ft em metros é igual a ", metro, "m.")

e)

let galao = 103.56
let litro = galao * 4.54609
console.log("103.56gl é igual a ", litro, "l.")

f)

let xicara = 450
let litro = xicara * 0.24
console.log("450xc é igual a ", litro, "l.")

g)

let xicara = Number(prompt("Digite uma quantidade em xícaras para converter em litros"))
let litro = xicara * 0.24
console.log("450xc é igual a ", litro, "l.")

*/