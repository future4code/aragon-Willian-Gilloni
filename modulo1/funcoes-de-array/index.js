// -------------- Exercicio de interpretação de codigo 1---------------------
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// será impresso o mapeamento feito da array do objeto,destacado abaixo:
// nome:"Amanda Rangel", apelido:"Mandi"
// nome : "Lais Petra" , apelido:"Laura"
// nome:"Leticia Chijo" , apelido : "Chijo"

//--------------Exercicio de interpretação de código 2--------------------

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayB = usuarios.map((item, index, array) => {
//    return item.nome
// })

// console.log(novoArrayB)

// será impresso o mapeamento feito da array do objeto porem apenas nomes,destacado
// a baixo:
// ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

// --------------Exercicio de interpretação de código 3-------------------

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

// Séra impresso os itens da array do objeto que forem diferentes do apelido "Chijo",
// buscando através do filter,destacado abaixo:
// 0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
// 1: {nome: 'Laís Petra', apelido: 'Laura'}

// -------------Exercicio de escrita de código 1--------------------------

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const nomeAnimais = pets.map((animal)=>{
//     return animal.nome
//  })

//  console.log(nomeAnimais)

//  const salsicha = pets.filter((animal)=>{
//     return animal.raca === "Salsicha"
//  })

//  console.log(salsicha)
//C)
//  const poodles = pets.filter((animal)=>{
//     return animal.raca === "Poodle"
//  })
//  console.log(poodles)
//  const frases = poodles.map((animal)=>{
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a${animal.nome} !`
//  })
// console.log(frases)
 //---------------------------Exercicio de escrita de código 2 --------------------

//  const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
// a)
// const nomeItem = produtos.map((produto)=>{
//         return produto.nome
// })
// console.log(nomeItem)
// b)

// const cincoPorCentoDesconto = produtos.map((produto) => {
//     return{
//         nome:produto.nome,
//         preco:produto.preco * 0.95
//     }
// })
// console.log(cincoPorCentoDesconto)

// c)
// const nomeBebidas = produtos.filter((produto)=>{
//     produto.categoria = "Bebidas"
//     return produto
// })
//d)
// console.log(nomeBebidas)

// const checandoYpe = produtos.filter((produto)=>{ 
//     return produto.nome.includes("Ypê")
// })
// console.log(checandoYpe)
// e)
//     const compre = checandoYpe.map((produto)=>{
//         return ` COMPRE ${produto.nome} POR ${produto.preco} `
//     })
//     console.log(Compre)

//-----------------------------------Desafio 1 --------------------------------------------------

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]
// a)
//  const nomePokemons = pokemons.map((pokemon)=>{
//     return pokemon.nome
    
//  })
// const nomesEmOrdemAlfabetica = nomePokemons.sort()

//  console.log(nomesEmOrdemAlfabetica)

// const tiposPokemons = pokemons.map((pokemon)=>{
//     return pokemon.tipo
// })
// console.log(tiposPokemons)
// b)
// const tiposNaoRepetidos = tiposPokemons.filter(function(tipo, i){
//     return tiposPokemons.indexOf(tipo) === i;
// })

// console.log(tiposNaoRepetidos)
// const todosTiposDePokemon = pokemons.map((pokemon) =>{
//     return pokemon.tipo
//  })
//  console.log(todosTiposDePokemon)

//  const TiposDePokemonSemRepeticao = todosTiposDePokemon.filter((tipo, i) => todosTiposDePokemon.indexOf(tipo) === i)
 
//  console.log(TiposDePokemonSemRepeticao)

