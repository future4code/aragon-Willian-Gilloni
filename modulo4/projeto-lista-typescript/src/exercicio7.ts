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
        // function estoqueOrdenado (itensAtualizados:any):any {
        //     const copiaLista = [...itensAtualizados]
        //     const itensOrdenados:any = copiaLista.sort((a:any,b:any) => {
        //         a.quantidade - b.quantidade
        //         return itensOrdenados
        //     })
        // } 
    return ajustaPreco
}

console.log(retornaEstoqueOrdenado(itens))