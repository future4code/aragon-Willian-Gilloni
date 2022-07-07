// ## Exercício 7

// Você acabou de conseguir um emprego em uma importadora e precisa continuar a desenvolver o sistema de organização de estoque da empresa. A pessoa desenvolvedora anterior a você chegou a criar uma função que ajusta os preços para o formato brasileiro, mas não chegou a implementa-la:

// Código atual:

// ```jsx
// const ajustaPreco = (preco :number): string => {
// 	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
// 	return "R$ "+valorAjustado
// }
// ```

// O seguinte array traz o estoque atual da empresa:

// ```jsx
// [
// 	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
// 	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
// 	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
// 	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
// 	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
// 	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
// 	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
// ]
// ```

// Aproveitando a função já feita, faça uma nova função que receba o array de estoque como parâmetro, use a função ajustaPreco() para corrigir os preços e retorne a lista de estoque ordenada pela quantidade de cada produto. 

// - Entrada esperada → type[ ]
// - Saída esperada → type[ ]

// Dicas:

// - Crie um type para o produtos.
// - Nesse type use o símbolo de barra “ | “ para permitir que o valorUnitario aceite tanto um number como uma string.
// - Você pode impor um determinado tipo a uma variável usando a notação “ as ” 
// Exemplo → valorUnitario as number


type Produtos = {
    nome:string,
    quantidade:number,
    valorUnitario:number | string
}

const itens:Produtos[] = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
]

    function retornaEstoqueOrdenado (itens:Produtos[]):Produtos[] {
        
    const ajustaPreco:Produtos[] = itens.map((item: any): Produtos => {
        
        const valorAjustado: string = item.valorUnitario.toFixed(2).replace('.', ',')
       
        const itensAtualizados = {
            nome:item.nome,
            quantidade: item.quantidade,
            valorUnitario: "R$" + valorAjustado
        }

        return itensAtualizados
    })    
    function ordenaEstoque(itens:any) {
        const itensComValorAtualizado = itens.map((item:any) => {
            const valorAtualizado = item.valorUnitario.toFixed(2).replace(".", ",");
            const itensAtualizados = {
                nome: item.nome,
                quantidade: item.quantidade,
                valorUnitario: "R$" + valorAtualizado,
            };
            return itensAtualizados;
        });
        const compare = (a:any, b:any) => {
            if (a.quantidade < b.quantidade)
                return -1;
            if (a.quantidade > b.quantidade)
                return 1;
            return 0;
        };
        return itensComValorAtualizado.sort(compare);
    }
    console.log(ordenaEstoque(itens));
    return ajustaPreco
}

console.log(retornaEstoqueOrdenado(itens))

// RESPOSTA 2
// const itens = [
//     { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
//     { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
//     { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
//     { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
//     { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
//     { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
//     { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 },
// ];
// function ordenaEstoque(itens) {
//     const itensComValorAtualizado = itens.map((item) => {
//         const valorAtualizado = item.valorUnitario.toFixed(2).replace(".", ",");
//         const itensAtualizados = {
//             nome: item.nome,
//             quantidade: item.quantidade,
//             valorUnitario: "R$" + valorAtualizado,
//         };
//         return itensAtualizados;
//     });
//     const resultado = itensComValorAtualizado.sort((a, b) => {
//         if (a.quantidade < b.quantidade)
//             return -1;
//         if (a.quantidade > b.quantidade)
//             return 1;
//     })

//     return resultado;
// }
// console.log(ordenaEstoque(itens));

// RESPOSTA 3
// const itens = [
//     { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
//     { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
//     { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
//     { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
//     { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
//     { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
//     { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 },
// ];
// function ordenaEstoque(itens) {
//     const itensComValorAtualizado = itens.map((item) => {
//         const valorAtualizado = item.valorUnitario.toFixed(2).replace(".", ",");
//         const itensAtualizados = {
//             nome: item.nome,
//             quantidade: item.quantidade,
//             valorUnitario: "R$" + valorAtualizado,
//         };
//         return itensAtualizados;
//     });
//     const resultado = itensComValorAtualizado.sort((a, b) => {
//         return a.quantidade < b.quantidade ? -1 : a.quantidade > b.quantidade ? 1 : 0 // mudei apenas essa parte
//     })

//     return resultado;
// }
// console.log(ordenaEstoque(itens));
