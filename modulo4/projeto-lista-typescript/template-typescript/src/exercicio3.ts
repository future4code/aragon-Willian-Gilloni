// ## Exercício 3

// Você foi contratado por um serviço de streaming para organizar o sistema de 
// catálogos de filmes. Cada filme possui 3 informações essenciais: nome do filme;
//  ano de lançamento e gênero do filme. Os gêneros da plataforma se limitam àqueles 
//  encontrados no ENUM abaixo:

// ```jsx
// enum GENERO {
// 	ACAO="ação",
// 	DRAMA="drama",
// 	COMEDIA="comédia",
// 	ROMANCE="romance",
// 	TERROR="terror"
// }
// ```

// Além dessas informações presentes em todos os filmes, alguns deles possuem 
// uma informação opcional: pontuação em site de resenha (ex. Metacritic, 
// RottenTomatoes, imdb).

// Considerando todas estas informações, crie uma função que receba todos 
// esses dados como parâmetros( 3 essenciais + 1 opcional) e retorne um objeto 
// organizado.

// - Entrada esperada → string, number, ENUM, number(opcional)
// - Saída esperada → type
// - Exemplo:

// ```jsx
// Entradas: "Duna", 2021, GENERO.ACAO, 74
// Saída: {nome: "Duna", anoLancamento: 2021, genero: "ação", pontuacao: 74}

// Entradas: "Duna", 2021, GENERO.ACAO
// Saída: {nome: "Duna", anoLancamento: 2021, genero: "ação"}
// ```

// Dicas:

// - Para deixar uma propriedade opcional no type, usamos o sinal de interrogação 
//“?”. No exemplo abaixo a idade é opcional:

// ```tsx
// type Conta = {
//   id: number,
//   email: string
//   idade?: number
// }
// ```

// - Para deixar um parâmetro opcional em uma função você deve deixá-lo por 
//ultimo e usamos o sinal de interrogação “?”. Exemplo abaixo:

enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type CatalogosFilme = {
    nome:string,
    anoLancamento:number,
    genero:GENERO,
    pontuacao?:number
}

function filmes(nome: string, anoLancamento: number, genero: GENERO, pontuacao?: number):CatalogosFilme {

    const catalogo = {
        nome: nome,
        anoLancamento: anoLancamento,
        genero: genero,
        pontuacao: pontuacao
    }

    return catalogo 

}

console.log(filmes("Duna", 2021, GENERO.ACAO,74))
console.log(filmes("Duna", 2021, GENERO.ACAO))