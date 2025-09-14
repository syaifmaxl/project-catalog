import { CreateDiscountDTO, Discount } from "./entitty";
import { IdiscountRepository } from "./repository";

export default class DiscountsUsecase{
    constructor(private discountRepository : IdiscountRepository){}

    async getAlllDiscountProducts(): Promise<Discount[]> {
        return await this.discountRepository.getAllDiscountProducts()
    }

    async getDiscountProductById(id: number): Promise<Discount | null> {
        return await this.discountRepository.getDiscountProductById(id)
    }

    async createDiscountProduct(data : CreateDiscountDTO): Promise<Discount> {
       return await this.discountRepository.createDiscountProduct(data)
    }
    async updateDiscountProduct(id: number, data : CreateDiscountDTO): Promise<Discount> {
       return await this.discountRepository.updateDiscountProduct(id,data)
    }
    async deleteDiscountProduct(id: number): Promise<Discount> {
       return await this.discountRepository.deleteDiscountProduct(id)
    }

}