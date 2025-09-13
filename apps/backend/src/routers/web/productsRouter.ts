import express from "express";

import ProductsRepository from "../../repositories/db/productsRepository";
import ProductsUsecase from "../../domains/products/usecase";
import ProductsHandler from "../../presentasions/api/web/productsHandler";
import { upload } from "../../config/multerConfig";

const router = express.Router()

const productsRepository = new ProductsRepository()
const productsUsecase = new ProductsUsecase(productsRepository)
const productsHandler = new ProductsHandler(productsUsecase)


router.get("/product", productsHandler.getAllProducts)
router.get("/product/:id", productsHandler.getProductById)
router.post("/product", upload.array("picture", 5), productsHandler.createProduct)
router.put("/product/:id", upload.array("picture", 5), productsHandler.updateProduct)
router.delete("/product/:id", productsHandler.deleteProducts)

export default router