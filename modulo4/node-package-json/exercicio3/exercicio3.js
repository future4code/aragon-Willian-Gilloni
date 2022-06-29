 const listaDeTarefas = ["lavar a louça"]

 const AdicionarTarefas = (tarefa) => {
    tarefa = process.argv[2]
    listaDeTarefas.push(tarefa)

    return `"Tarefa adicionada com sucesso!",${listaDeTarefas}`
 }

console.log(AdicionarTarefas())
