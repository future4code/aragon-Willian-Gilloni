// const tabuada = [
//     "5 x 0 = 0",
// 	"5 x 1 = 5",
// 	"5 x 2 = 10",
// 	"5 x 3 = 15",
// 	"5 x 4 = 20",
//     "5 x 5 = 25",
//     "5 x 6 = 30",
//     "5 x 7 = 35",
//     "5 x 8 = 40",
//     "5 x 9 = 45",
//     "5 x 10 = 50",
// ]

// console.log(tabuada)


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