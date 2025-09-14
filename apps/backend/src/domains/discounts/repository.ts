import { CreateDiscountDTO, Discount } from "./entitty";

export interface IdiscountRepository{
    getAllDiscountProducts(): Promise<Discount[]>
    getDiscountProductById(id: number): Promise<Discount | null>
    createDiscountProduct(data : CreateDiscountDTO): Promise<Discount>
    updateDiscountProduct(id: number, data: CreateDiscountDTO): Promise<Discount>
    deleteDiscountProduct(id: number): Promise<Discount>
}