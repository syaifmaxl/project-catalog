import { Category, CreateCategoryDTO } from "../../domains/categories/entity";
import { IcategoryReppository } from "../../domains/categories/repository";
import { prisma } from "../../config/prisma";

export default class CategoriesRepository implements IcategoryReppository {

    async getAllCategories(): Promise<Category[]>  {
        return prisma.category.findMany({})
    }

    async getCategoryById(id: number): Promise<Category | null> {
        return prisma.category.findFirst({
            where: { id : Number(id)}
        })
    }

    async createCategory(data: CreateCategoryDTO): Promise<Category> {
        return prisma.category.create({ data :{
            name : String(data.name),
            desc : String(data.desc)
        } })
    }

    async updateCategory(data: CreateCategoryDTO, id: number): Promise<Category> {
        return prisma.category.update({
            where: { id },
            data : {
                name : String(data.name),
                desc : String(data.desc)
            }
        })
    }

    async deleteCategory(id: number): Promise<Category> {
        return prisma.category.delete({
            where : { id }
        })
    }
}