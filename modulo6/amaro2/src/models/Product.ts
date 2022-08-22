export interface IProductDB {
    id: string,
    name: string,
    tags: string[]
}

export interface ITagDB {
    id: string,
    name:string
}

export interface IproductTagDB {
    id:string,
    product_id:string,
    tag_id:string
}

export class Product {
    constructor(
        private id: string,
        private name: string,
        private tag: string[]
    ) {}

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getTags = () => {
        return this.tag
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setTag = (newTag: string[]) => {
        this.tag = newTag
    }

}

export interface ICreateProductInputDTO {
    token:string,
    name:string,
    tags:string[]
}

export interface ICreateProductOutputDTO {
    message: string,
    product: Product
}

export interface IGetProductOutputDTO {
    product: Product[]
}

// export interface IEditProductInputDTO {
//     token: string,
//     productId: string
// }

// export interface  IEditProductOutputDTO {
//     message: string
// }

// export interface IDeleteProductInputDTO {
//     token: string,
//     productId: string
// }

// export interface  IDeleteProductOutputDTO {
//     message: string
// }