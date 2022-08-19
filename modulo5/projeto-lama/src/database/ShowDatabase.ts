import { IShowDB, ITicketDB, Show } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"
    
    public toShowDBModel = (show: Show) => {
        const showDB: IShowDB = {
            id:show.getId(),
            band:show.getBand(),
            starts_at:show.getStartsAt()
        }

        return showDB
    }

    public checkDate = async (date:string):Promise<IShowDB | undefined>=> {
        const result: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()
            .where({ starts_at:date })

        return result[0]
    }

    public createShow = async (show: Show) => {
        const showDB = this.toShowDBModel(show)

        await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .insert(showDB)
    }

    public getShows = async () => {
        const showsDB: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()

        return showsDB
    }

    public getTickets = async (showId: string) => {
        const result: any = await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .select()
            .count("id AS tickets")
            .where({ show_id: showId })

        return result[0].tickets as number
    }
    public findShowById = async (id: string): Promise<IShowDB | undefined> => {
        const result: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()
            .where({ id })

        return result[0]
    }

    public findTicketById = async (id: string): Promise<ITicketDB | undefined> => {
        const result: ITicketDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .select()
            .where({ id })

        return result[0]
    }

    public findReservation = async (showId: string, userId: string): Promise<IShowDB | undefined> => {
        const reserveDB: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .select()
            .where({ show_id: showId })
            .andWhere({ user_id: userId })

        return reserveDB[0]
    }

    public reserveTicket = async (reserveDB: ITicketDB) => {
        await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .insert(reserveDB)
    }

    public removeReserv = async (showId: string, userId: string) => {
        await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .delete()
            .where({ show_id: showId })
            .andWhere({ user_id: userId })
    }

    
}