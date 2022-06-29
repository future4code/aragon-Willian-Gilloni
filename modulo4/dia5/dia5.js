//1.criar a constante de erros
//2.iterar a função utilizando object.key e map
//3.iterar o push dentro da condicional if para adicionar os itens ao element pelo argumento
//4.reproduzir no console.log a chamada do elemento

function isKeyExists(element) {
    const itsError = {
        isError: false,
        erros: []
    }

    Object.keys(element).map((item) => {
        if (element[item] === undefined || element[item] === "undefined") {
            itsError.erros.push(item)
            itsError.isError = true
        }
    })
    return (itsError)
}

console.log(isKeyExists({ id: 1, name: undefined, email: undefined }))
console.log(isKeyExists({ id: 1, name: "astrodev", email: "astrodev@gmail.com" }))
console.log(isKeyExists({}))

