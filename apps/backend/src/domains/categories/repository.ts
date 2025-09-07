import { Category, CreateCategoryDTO } from "./entity";

export interface IcategoryReppository{
    getAllCategories(): Promise<Category[]>
    getCategoryById(id : number): Promise<Category | null>
    createCategory(data : CreateCategoryDTO): Promise<Category>
    updateCategory(data: CreateCategoryDTO, id : number): Promise<Category>
    deleteCategory(id: number): Promise<Category>
}