import { Request, Response } from "express";
import ProductsUsecase from "../../../domains/products/usecase";

export default class ProductsHandler {
    constructor(private productUsecase: ProductsUsecase) { }

    getAllProducts = async (req: Request, res: Response) => {
        try {
            const result = await this.productUsecase.getAllProducts()
            res.json(result)
        } catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : String(error) })
        }
    }

    getProductById = async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            const result = await this.productUsecase.getProductById(id)
            res.json(result)
        } catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : String(error) })
        }
    }

    createProduct = async (req: Request, res: Response) => {
        try {
            const { name, type, weight, desc, price, sentId, categoryId } = req.body
            const files = req.files as Express.Multer.File[] | undefined
            const data = {
                name: String(name),
                type: String(type),
                weight: Number(weight),
                desc: String(desc),
                price: Number(price),
                sentId: Number(sentId),
                categoryId: Number(categoryId),
                pictures: files?.map((item) => ({
                    path: "/uploads/" + item.filename,
                })) ?? []
            };
            const result = await this.productUsecase.createProduct(data)
            res.json(result)
        } catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : String(error) })
        }
    }

    updateProduct = async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            const { name, type, weight, desc, price, sentId, categoryId, oldPictures } = req.body
            const files = req.files as Express.Multer.File[] | undefined
            let oldPictureIds: number[] = []
            if(oldPictures) {
                try {
                   oldPictureIds = JSON.parse(oldPictures).map(((id : string) => Number(id)))
                } catch (error) {
                    console.error("Failed to parse oldPictures:", error);
                }
            }

            const data = {
                name: String(name),
                type: String(type),
                weight: Number(weight),
                desc: String(desc),
                price: Number(price),
                sentId: Number(sentId),
                categoryId: Number(categoryId),
                oldPictures: oldPictureIds,
                pictures: files?.map((item) => ({
                    path: "/uploads/" + item.filename,
                })) ?? []

            }
            const result = await this.productUsecase.updateProduct(id, data)
            res.json(result)
            } catch (error) {
                res.status(500).json({ message: error instanceof Error ? error.message : String(error) })
            }
        }

    deleteProducts = async (req: Request, res: Response) => {
            try {
                const id = parseInt(req.params.id)
                const result = await this.productUsecase.deleteProduct(id)
                res.json(result)
            } catch (error) {
                res.status(500).json({ message: error instanceof Error ? error.message : String(error) })
            }
        }
    }