// ## Exercício 4

// Considere que você esteja implementando uma rede social 
// composta por posts de usuários, onde cada um dos posts
//  possui um autor e um texto. 
// A seguir, temos um exemplo de array de posts em JS:

//Parte 1
type Posts = {
    autor:string,
    texto:string,
}

const posts:Posts[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ] 

  function buscarPostsPorAutor(posts:Posts[], autorInformado:string):Posts[] {
    return posts.filter((post) => {
        return post.autor === autorInformado
      }
    )
  }

  console.log(buscarPostsPorAutor(posts,"Dobby"))

//Parte 2
// a entrada é um parametro de array de propriedades autor e texto
// e a saida seria um booleano se o nome que foi filtrado seria igual a autorInformado
