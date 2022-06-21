
function calculaTabuada(a) {
    for (let i = 0; i <= 10; i++) {
        if (a > 10) {
            return "Erro. Parâmetro inválido (número precisa valer entre 1 e 10)."
        } else {
            const tabuada = a * i
            return console.log(`${a} x ${i} = ${tabuada}`)
        }

    }
}
calculaTabuada(8)