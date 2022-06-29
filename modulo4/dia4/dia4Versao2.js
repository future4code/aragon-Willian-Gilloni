//1. Unir as duas lista e guardá-la em uma variável
//2. Cria a lista de resultado começando vazia
//3. itera a lista unida
//3.1 A cada iteração,procurar na lista de resultado pelo item iterado
//3.2 O item existe?
//3.2.1 Se sim,não faça nada
//3.2.2 Se não,adicione-o a lista de resultado

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

	let itensRepetidos = []

	for (let itemConcat of arrAgrupado) {
		let itemResultado = arrAgrupado.find((item) => item.nome === itemConcat.nome)
		if (!itemResultado) {
			itensRepetidos.push(itemConcat)
		}
	}
	return resultado
}

console.log(geraItensUnicos(primeiraLista, segundaLista))