const clientes = [
    { id: 1, nome: 'Fulano' },
	{ id: 2, nome: 'Ciclano' },
	{ id: 3, nome: 'Beltrano' },
	{ id: 4, nome: 'Fulana' },
]

function adicionaCliente(cliente){
    let index = clientes.findIndex(valida => valida.id === cliente.id);
    if(index < 0){
        clientes.push(cliente)
    } else {
        return console.log(`Erro. Parâmetro inválido: id já existente.`)
    }

}

adicionaCliente({id:8, nome:'Will'},)
adicionaCliente({id:3, nome:'Joao'},)
adicionaCliente({id:6, nome:'Aragon'},)
console.log(clientes)