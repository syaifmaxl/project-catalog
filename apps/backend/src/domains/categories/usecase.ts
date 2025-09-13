import { Category, CreateCategoryDTO } from "./entity";
import { IcategoryReppository } from "./repository";

export default class CategoriesUsecase{

    constructor(private categoriesRepository : IcategoryReppository) {}

    async getAllCategories(): Promise<Category[]> {
        return await this.categoriesRepository.getAllCategories()
    }

    async getCategoryById(id: number): Promise<Category | null> {
        return await this.categoriesRepository.getCategoryById(id)
    }

    async createCategory(data : CreateCategoryDTO): Promise<Category> {
        return await this.categoriesRepository.createCategory(data)
    }

    async updateCategory(data : CreateCategoryDTO, id : number): Promise<Category> {
        return await this.categoriesRepository.updateCategory(data, id)
    }

    async deleteCategory(id : number): Promise<Category> {
        return await this.categoriesRepository.deleteCategory(id)
    }
}