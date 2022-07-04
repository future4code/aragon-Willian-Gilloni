// ## Exercício 2

// Crie 1 objeto que representa a sua pessoa e possua 
//3 propriedades:
enum CorFavorita {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"

}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CorFavorita
}

const will:Pessoa={
    nome:"will",
    idade:32,
    corFavorita:CorFavorita.VERMELHO
}


console.log(will)