
const cliente: Clientes[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

type Clientes = {
	cliente: string,
	saldoTotal: number,
	debitos: number[]
}

function emprestimo(cliente: Clientes[]): Clientes[] {

	const debitoAtual = cliente.map((item: Clientes) => {

		let debitoAtualizado = 0

		for (let debito of item.debitos) {

			debitoAtualizado += debito
		}

		const saldoTotalAtualizado: Clientes = {

			cliente: item.cliente,

			saldoTotal: item.saldoTotal - debitoAtualizado,

			debitos: []
		}
		return saldoTotalAtualizado
	})

	const resultado: Clientes[] = debitoAtual.filter((item: Clientes) => {

		return item.saldoTotal < 0
	})
	return resultado
}

console.log(emprestimo(cliente))