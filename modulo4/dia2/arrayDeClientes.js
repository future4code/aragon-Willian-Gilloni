const clients = [
    {id:1, nome:"Fulano"},
    {id:2, nome:"Ciclano"},
    {id:3, nome:"Beltrano"},
    {id:4, nome:"Fulana"}
]

const addClient = (idClient, nomeClient) => {
    
    if (clients.id?.includes(idClient)) {
        return `Erro.Parâmetro inválido (${idClient}). `
    } else {
        clients.push({id:idClient,nome:nomeClient})
        return clients
    }
}

addClient(8,"will")

console.log(clients)


