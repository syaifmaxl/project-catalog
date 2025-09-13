import { Product } from "../products/entity"

export interface ProductDisc{
    id: number,
    productId: number,
    discountId:number,
    products: Product
}

export interface Discount {
    id: number,
    name: string,
    percent: number,
    desc: string,
    startDate: Date,
    endDate: Date,
    productDisc?: ProductDisc[]
}

export interface CreateDiscountDTO{
    name: string,
    percent: number,
    desc: string,
    startDate: Date,
    endDate: Date,
    productId?: number[]
}