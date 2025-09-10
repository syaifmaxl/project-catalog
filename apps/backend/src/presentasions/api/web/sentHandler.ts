import { Request, Response } from "express";
import SentUsecase from "../../../domains/sents/usecase";

export default class SentHandler{
    constructor(private sentUsecase : SentUsecase) {}

    getAllSents = async(req: Request, res :  Response) => {
        try {
            const result = await this.sentUsecase.getAllSents()
            res.json(result)
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error) })
        }
    }

    getSentById = async(req: Request, res : Response) => {
        try {
            const id = parseInt(req.params.id)
            const result = await this.sentUsecase.getSentById(id)
            res.json(result)
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error) })
        }
    }

    createSent = async(req: Request, res: Response) => {
        try {
            const data = req.body
            const result = await this.sentUsecase.createSent(data)
            res.json(result)
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error) })
        }
    }

    updateSent = async(req : Request, res : Response) => {
        try {
            const id = parseInt(req.params.id)
            const data = req.body
            const result = await this.sentUsecase.updateSent(id, data)
            res.json({message : true, result})
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error) })
        }
    }

    deleteSent = async(req : Request, res : Response) => {
        try {
            const id = parseInt(req.params.id)
            const result = await this.sentUsecase.deleteSent(id)
            res.json({ message : true, result})
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error) })
        }
    }

}

