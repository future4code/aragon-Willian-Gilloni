//Algoritimos
//1 Iterar a mesclagem dos objetos dentro de arrays
//2 Iterar a array de objetos sem repeti-los

let primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

let segundaLista = [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]
const terceiraLista = primeiraLista.concat(segundaLista);

function retornarValoresUnicos() {

	let valorUnico = []

	terceiraLista.forEach((item) => {

		let duplicado = valorUnico.findIndex((redItem) => {
			return item.nome == redItem.nome;
		}) > -1;

		if (!duplicado) {
			valorUnico.push(item);
		}
	});
	return valorUnico
}
console.log(retornarValoresUnicos());