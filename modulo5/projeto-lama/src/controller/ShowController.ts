import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseError } from "../errors/BaseError";
import { IcreateReservationInputDTO, ICreateShowInputDTO, IGetShowsInputDTO, IRemoveShowInputDTO } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) { }

    public createShow = async (req: Request, res: Response) => {
        try {

            const input: ICreateShowInputDTO = {
                token: req.headers.authorization,
                band: req.body.band,
                starts_at: new Date
            }

            const response = await this.showBusiness.createShow(input)
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao criar show" })
        }
    }

    public getShows = async (req: Request, res: Response) => {
        try {
            const input: IGetShowsInputDTO = {
                token: req.headers.authorization
            }

            const response = await this.showBusiness.getShows(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao buscar shows" })
        }
    }
    public createReservation = async (req: Request, res: Response) => {
        try {
            const input: IcreateReservationInputDTO = {
                token: req.headers.authorization,
                showId: req.params.showId
            }

            const response = await this.showBusiness.reservTicket(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao reservar um ticket" })
        }
    }

    public deleteReserv = async (req: Request, res: Response) => {
        try {
            const input: IRemoveShowInputDTO = {
                token: req.headers.authorization,
                showId: req.params.showId
            }

            const response = await this.showBusiness.removeReserv(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao deletar reserva" })
        }
    }
}