
import { ShowDatabase } from "../database/ShowDatabase"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { IAddReserveOutputDTO, IcreateReservationInputDTO, ICreateShowInputDTO, ICreateShowOutputDTO, IGetShowsInputDTO, IGetShowsOutputDTO, IRemoveShowInputDTO, IRemoveShowOutputDTO, ITicketDB, Show } from "../models/Show"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public createShow = async (input: ICreateShowInputDTO) => {
        const { token, band , starts_at } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Não autenticado")
        }

        if (typeof band !== "string") {
            throw new RequestError("Parâmetro 'band' inválido")
        }

        if (band.length < 1) {
            throw new RequestError("Parâmetro 'band' inválido: mínimo de 1 caracteres")
        }

        if(payload.role === USER_ROLES.NORMAL){          
            throw new UnauthorizedError("Erro: Apenas usuários 'ADMIN' podem criar shows.");                         
        }

        const id = this.idGenerator.generate()
        const show = new Show(
            id,
            band,
            starts_at
        )

        await this.showDatabase.createShow(show)

        const response: ICreateShowOutputDTO = {
            message: "Show criado com sucesso",
            show
        }

        return response
    }

    public getShows = async (input: IGetShowsInputDTO) => {

        const showsDB = await this.showDatabase.getShows()

        const shows = showsDB.map(showDB => {
            return new Show(
                showDB.id,
                showDB.band,
                showDB.starts_at
            )
        })

        const response: IGetShowsOutputDTO = {
            shows
        }

        return response
    }

    public reservTicket = async (input: IcreateReservationInputDTO) => {
        const { token, showId } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Não autenticado")
        }

        const showDB = await this.showDatabase.findShowById(showId)

        if (!showDB) {
            throw new RequestError("Show não encontrado")
        }

        const isAlreadyReserved = await this.showDatabase.findReservation(
            showId,
            payload.id
        )

        if (isAlreadyReserved) {
            throw new RequestError("Ingresso ja reservado")
        }

        const reservedDB: ITicketDB = {
            id: this.idGenerator.generate(),
            show_id: showId,
            user_id: payload.id
        }

        await this.showDatabase.reserveTicket(reservedDB)

        const response: IAddReserveOutputDTO = {
            message: "Reserva realizada com sucesso"
        }

        return response
    }

    public removeReserv = async (input: IRemoveShowInputDTO) => {
        const { token, showId } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Não autenticado")
        }

        const showDB = await this.showDatabase.findShowById(showId)

        if (!showDB) {
            throw new RequestError("Show não encontrado")
        }

        const isAlreadyReserved = await this.showDatabase.findReservation(
            showId,
            payload.id
        )

        if (!isAlreadyReserved) {
            throw new RequestError("Ainda não reservou")
        }

        const reserveDB = await this.showDatabase.findTicketById(showId)

        if (payload.role === USER_ROLES.NORMAL) {
            if (reserveDB.user_id !== payload.id) {
                throw new UnauthorizedError("Erro: somente 'ADMIN' pode remover qualquer reserva")
            }
        }
        
        await this.showDatabase.removeReserv(showId, payload.id)

        const response: IRemoveShowOutputDTO = {
            message: "Reserva removida com sucesso"
        }

        return response
    }
}