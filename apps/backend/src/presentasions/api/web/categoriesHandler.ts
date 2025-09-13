import CategoriesUsecase from "../../../domains/categories/usecase"
import { Request, Response } from "express"

export default class CategoriesHandler{

    constructor(private categoriesUsecase : CategoriesUsecase){}

    getAllCategories = async (req: Request ,res: Response) => {
        try {
            const result = await this.categoriesUsecase.getAllCategories()
            res.json(result)
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error)})
        }
    }

    getCategoryById = async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            const result = await this.categoriesUsecase.getCategoryById(id)
            res.json(result)
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error)})
        }
    }

    createCategory = async (req: Request, res: Response) => {
        try {
            const data = req.body
            const result = await this.categoriesUsecase.createCategory(data)
            res.json({message : "success", result})
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error)})
        }
    }

    updateCategory = async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            const data = req.body
            const result = await this.categoriesUsecase.updateCategory(data,id)
            res.json({message : "success", result})
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error)})
        }
    }

    deleteCategory = async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            const result = await this.categoriesUsecase.deleteCategory(id)
            res.json({message : "success", result})
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error)})
        }
    }
}