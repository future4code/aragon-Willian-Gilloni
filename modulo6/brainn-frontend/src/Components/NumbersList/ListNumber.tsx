import { useContext } from "react"
import { GlobalContext } from "../../Global/GlobalState"
import { NumberList } from "./style"

export default function ListNumber() {
    const context = useContext(GlobalContext)
    const { contests } = context.states
    return (
        <NumberList>
            {contests.numeros.map((numero: string) => {
                return <li>{numero}</li>
            })}
        </NumberList>
    )
} 