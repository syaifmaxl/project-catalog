import e, { Request, Response } from "express";
import path from "path";

export default class PicturesHandler{
        testUploud = async(req : Request, res : Response) => {
        try {
            const files = req.files as Express.Multer.File[] | undefined
            const result : string[]= files?.map(item => ( item.filename)) ?? []
            res.json(result)
        } catch (error) {
             res.status(500).json({ message : error instanceof Error ? error.message : String(error) })
        }
    }

    testRead = async(req : Request, res : Response) => {
        try {
            const imageName = req.params.name;
            const imagePath =path.join(__dirname, "..", "..","..", "uploads", imageName)
            res.sendFile(imagePath)
        } catch (error) {
            res.status(500).json({ message : error instanceof Error ? error.message : String(error) })
        }
    }

}