
type Pessoas = {
    nome: string,
    salario: number,
    setor: SETORES,
    presencial: boolean

}

enum SETORES {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
}


const funcionarios: Pessoas[] = [
    { nome: "Marcos", salario: 2500, setor: SETORES.MARKETING, presencial: true },
    { nome: "Maria", salario: 1500, setor: SETORES.VENDAS, presencial: false },
    { nome: "Salete", salario: 2200, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "João", salario: 2800, setor: SETORES.MARKETING, presencial: false },
    { nome: "Josué", salario: 5500, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "Natalia", salario: 4700, setor: SETORES.VENDAS, presencial: true },
    { nome: "Paola", salario: 3500, setor: SETORES.MARKETING, presencial: true }
]


function retornaPresencial(funcionarios:Pessoas[]):Pessoas[] {

    let listaDeFuncionarios = funcionarios.filter((pessoa)=> {
            return pessoa.setor === "financeiro" && pessoa.presencial === true
    })

    return listaDeFuncionarios
}

console.log(retornaPresencial(funcionarios))