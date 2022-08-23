import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateProductInputDTO, IGetProductInputDTO } from "../models/Product";

export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) { }

    public createProduct = async (req: Request, res: Response) => {
        try {

            const input: ICreateProductInputDTO = {
                token:req.headers.authorization,
                name: req.body.name,
                tag:req.body.tag
            }

            const response = await this.productBusiness.createProduct(input)
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao criar product" })
        }
    }

    public getProducts = async (req: Request, res: Response) => {
        try {
            const input: IGetProductInputDTO = {
                token: req.headers.authorization
            }

            const response = await this.productBusiness.getProducts(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao buscar shows" })
        }
    }
}