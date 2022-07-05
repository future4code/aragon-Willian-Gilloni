//exercicio2

export type Atividade = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export const atividades: Atividade[] = [
  {
    userId: 1,
    id: 1,
    title: "lavar",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "dormir",
    completed: true
  },
  {
    userId: 2,
    id: 3,
    title: "estudar",
    completed: false
  },
  {
    userId: 2,
    id: 4,
    title: "cantar",
    completed: true
  },
  {
    userId: 3,
    id: 5,
    title: "trabalhar",
    completed: false
  },
  {
    userId: 3,
    id: 3,
    title: "estudar",
    completed: true
  }
]