//1. criar o objeto de resposta
//2. Criar variavel e atribuir a ela a lista com todas as chaves
//3. Iterar a lista criada
//3.1 a cada iteração, acessar o valor da chave
//3.2 o valor é undefined?
//3.2.1 se sim
//3.2.2.1 edita a propriedade booleana de erro do objeto de resposta
// 3.2.1.2 edita a propriedade de lista de erros do objeto de resposta
//3.2.2 se não,não faz nada
// 4. retorna o objeto de resposta

const validaInput = (input) => {
        const resposta = {
            isErro:false,
            errors:[]
        }
        const chaves = Object.keys(input)

        for(let chave of chaves){
            if(input[chave] === undefined) {
                resposta.isErro= true
                resposta.errors.push(chave)
            }
        }
        return resposta
}

console.log(validaInput({id:1, nome:undefined,email:undefined}))
console.log(validaInput({}))
console.log(validaInput({id:1, nome:"astrodev"}))
