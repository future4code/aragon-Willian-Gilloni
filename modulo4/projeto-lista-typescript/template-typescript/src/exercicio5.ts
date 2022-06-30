const usuarios: Usuario[] = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
]

type Usuario = {
    name: string,
    email: string,
    role: string
}


function apenasEmails(usuarios: Usuario[]): string[] {
    return usuarios.filter((dadosFilter) => {
        return dadosFilter.role === "admin"
    }).map((dadosMap) => {
        return dadosMap.email
    })
}

console.log(apenasEmails(usuarios))