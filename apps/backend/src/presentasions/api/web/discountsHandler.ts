import { Request, Response } from "express";
import DiscountsUsecase from "../../../domains/discounts/usecase";

export default class DiscountsHandler{
    constructor(private discountsUsecase: DiscountsUsecase){}

    getAllDiscountProducts = async (req: Request,res : Response) => {
        try {
            const result = await this.discountsUsecase.getAlllDiscountProducts()
            res.json(result)
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error)})
        }
    }

    getDiscountProductById = async (req: Request,res : Response) => {
        try {
            const id = parseInt(req.params.id)
            const result = await this.discountsUsecase.getDiscountProductById(id)
            res.json(result)
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error)})
        }
    }

    createDiscountProduct = async (req: Request,res : Response) => {
        try {
            const data = req.body
            const result = await this.discountsUsecase.createDiscountProduct(data)
            res.json({ message : "success", result})
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error)})
        }
    }

    updateDiscountProduct = async (req: Request,res : Response) => {
        try {
            const id = parseInt(req.params.id)
            const data = req.body
            const result = await this.discountsUsecase.updateDiscountProduct(id, data)
            res.json({ message :  "success", result})
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error)})
        }
    }

    deleteDiscountProduct = async (req: Request,res : Response) => {
        try {
            const id = parseInt(req.params.id)
            const result = await this.discountsUsecase.deleteDiscountProduct(id)
            res.json({ message : "success", result})
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error)})
        }
    }
}