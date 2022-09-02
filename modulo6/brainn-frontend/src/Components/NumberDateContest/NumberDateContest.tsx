import { useContext } from "react"
import converteData from "../../Constants/Utils/convertDate"
import { GlobalContext } from "../../Global/GlobalState"
import { outputGetGamesContests } from "../../models/games"
import { ContestInformation } from "./style"

export default function NumberAndDateContests() {
    const context = useContext(GlobalContext)
    const { gamesContests, contests, gameId } = context.states
    return (
        <section>
            {gamesContests.filter((contests: outputGetGamesContests) => {
                return contests.loteriaId === Number(gameId)
            }).map((contest: outputGetGamesContests) => {
                return (
                    <ContestInformation>
                        <p className="pContests">Concurso</p>
                        <div>
                            <p className="mobile">Nº</p>
                            <p key={contest.loteriaId}>{contest.concursoId}</p>
                            <p className="hyphen">-</p>
                            <p className="date">{converteData(contests.data)}</p>
                        </div>
                    </ContestInformation>
                )
            })}
        </section>
    )
} 