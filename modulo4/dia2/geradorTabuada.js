
function calculaTabuada(a) {
    const resultado = []
    for (let i = 0; i <= 10; i++) {
        if (a > 10) {
            return console.log("Erro. Parâmetro inválido (número precisa valer entre 1 e 10).")
        } else {
            const tabuada = a * i
            resultado.push(`${a} x ${i} = ${tabuada}`)
        }
    }
    return resultado
}
console.log(calculaTabuada(8))