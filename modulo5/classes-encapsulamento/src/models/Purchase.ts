// type para tipar no typescript com camelCase
export type TPurchase = {
    id: string,
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
}

export class Purchase {

    constructor(
        private id: string,
        private userId: string,
        private productId: string,
        private quantity:number,
        private totalPrice:number
    ) {
        this.id = id
        this.userId = userId
        this.productId = productId
        this.quantity = quantity
        this.totalPrice = totalPrice
    }

    public getId() {
        return this.id
    }

    public getUserId() {
        return this.userId
    }

    public getProductId() {
        return this.productId
    }

    public getQuantity() {
        return this.quantity
    }

    public getTotalPrice() {
        return this.totalPrice
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setUserId(userId: string) {
        this.userId = userId
    }

    public setProductId(productId: string) {
        this.productId = productId
    }

    public setQuantity(quantity: number) {
        this.quantity = quantity
    }

    public setTotalPrice(totalPrice: number) {
        this.totalPrice = totalPrice
    }
}
// type para tipar no banco de dados com snake_case
export type PurchaseDB = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
}