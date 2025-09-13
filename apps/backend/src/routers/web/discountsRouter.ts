import express from "express";

import DiscountsRepository from "../../repositories/db/discountRepository";
import DiscountsUsecase from "../../domains/discounts/usecase";
import DiscountsHandler from "../../presentasions/api/web/discountsHandler";

const router = express.Router()

const discountsRepository = new DiscountsRepository()
const discountsUsecase = new DiscountsUsecase(discountsRepository) 
const discountsHandler = new DiscountsHandler(discountsUsecase)

router.get("/discount", discountsHandler.getAllDiscountProducts)
router.get("/discount/:id", discountsHandler.getDiscountProductById)
router.post("/discount", discountsHandler.createDiscountProduct)
router.put("/discount/:id", discountsHandler.updateDiscountProduct)
router.delete("/discount/:id", discountsHandler.deleteDiscountProduct)


export default router