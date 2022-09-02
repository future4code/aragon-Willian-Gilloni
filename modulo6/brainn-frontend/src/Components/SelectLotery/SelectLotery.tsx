import { useContext } from "react"
import { GlobalContext } from "../../Global/GlobalState"
import { outputGetGames } from "../../models/games"
import { Select } from "./style"

export default function SelectGame() {
    const context = useContext(GlobalContext)
    const { games } = context.states
    const { setGameId } = context.setters

    const changeGame = (event: any) => {
        setGameId(event.target.value)
    }
    return(
        <Select onChange={changeGame} >
            {
                games.map((game: outputGetGames) => {
                    return (
                        <option key={game.id} value={game.id}>{game.nome.toUpperCase()}</option>
                    )
                })
            }
        </Select>
    )
} 