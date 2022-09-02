import { useContext } from "react"
import Clover_Logo from "../../Assets/Clover_Logo.png"
import { GlobalContext } from "../../Global/GlobalState"
import { outputGetGames } from "../../models/games"
import { FigureGame } from "./style"

export default function GameName() {
    const context = useContext(GlobalContext)
    const { games, gameId} = context.states
    return(
        <FigureGame>
            <img src={Clover_Logo} alt="Loteria" />
            {games.filter((game: outputGetGames) => {
                    return game.id === Number(gameId)
                }).map((game: outputGetGames) => {
                    return (
                        <h1 key={game.id}>{game.nome.toUpperCase()}</h1>
                    )
                })}
        </FigureGame>
    )
} 