import { useContext, useEffect } from "react"
import GameName from "../Components/GameName/GameName"
import NumberAndDateContests from "../Components/NumberDateContest/NumberDateContest"
import ListNumber from "../Components/NumbersList/ListNumber"
import Select from "../Components/SelectLotery/SelectLotery"
import { colorChange } from "../Constants/Utils/colorChange"
import { GlobalContext } from "../Global/GlobalState"
import { StyleAll } from "./homePageStyle"

export default function Homepage() {
    const context = useContext(GlobalContext)
    const { gameId, contestId } = context.states
    const { getGames, getGamesContests, getContentsById } = context.getters

    useEffect(() => {
        getGames()
    })

    useEffect(() => {
        getGamesContests()
    })

    useEffect(() => {
        getContentsById()
    }, [gameId, contestId])

    return (

        <StyleAll>
            <main id={colorChange(gameId)} className="fullScreen">
                <section id={colorChange(gameId)} className="sectionColor">
                    <Select />
                        <GameName />
                        <NumberAndDateContests />
                </section>
                <section className="sectionLight">
                    <ListNumber />
                    <p className="pEnd">Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
                </section>
            </main>
        </StyleAll>

    )
} 