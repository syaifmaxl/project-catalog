import express from "express";

import SentsRepository from "../../repositories/db/sentsRepository";
import SentUsecase from "../../domains/sents/usecase";
import SentHandler from "../../presentasions/api/web/sentHandler";


const router = express.Router()

const sentsRepository = new SentsRepository()
const sentsUsecase = new SentUsecase(sentsRepository)
const sentsHandler = new SentHandler(sentsUsecase)

router.get("/sent", sentsHandler.getAllSents)
router.get("/sent/:id", sentsHandler.getSentById)
router.post("/sent", sentsHandler.createSent)
router.put("/sent/:id", sentsHandler.updateSent)
router.delete("/sent/:id", sentsHandler.deleteSent)

export default router