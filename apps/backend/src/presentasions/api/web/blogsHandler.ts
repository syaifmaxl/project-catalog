import { Request, Response } from "express";
import BlogsUsecase from "../../../domains/blogs/usecase";

export default class BlogsHandler{
    constructor(private blogsUsecase: BlogsUsecase){}

    getAllBlogs = async(req : Request, res: Response) => {
        try {
            const result = await this.blogsUsecase.getAllBlogs()
            res.json(result)
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error)})
        }
    }

    getBlogById = async(req : Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            const result = await this.blogsUsecase.getBlogById(id)
            res.json(result)
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error)})
        }
    }

    createBlog = async(req : Request, res: Response) => {
        try {
            const data = req.body
            const result = await this.blogsUsecase.createBlog(data)
            res.json({ message : "success", result})
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error)})
        }
    }

    updateBlog = async(req : Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            const data = req.body
            const result = await this.blogsUsecase.updateBlog(id,data)
            res.json({ message : "success", result})
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error)})
        }
    }

    deleteBlog = async(req : Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            const result = await this.blogsUsecase.deleteBlog(id)
            res.json({ message : "success", result})
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error)})
        }
    }
}