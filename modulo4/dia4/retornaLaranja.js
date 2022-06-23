const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

const segundaLista = [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]

const geraItensUnicos = (arr1, arr2) => {
	const arrAgrupado = arr1.concat(arr2)

	let resultado = []

	for (let itemConcat of arrAgrupado) {
		let itemResultado = resultado.find((item) => item.nome === itemConcat.nome)
		if (!itemResultado) {
			resultado.push(itemConcat)
		}
	}
	return resultado
}

console.log(geraItensUnicos(primeiraLista, segundaLista))