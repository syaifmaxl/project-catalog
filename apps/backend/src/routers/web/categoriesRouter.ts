import express from "express";

import CategoriesRepository from "../../repositories/db/categoriesRepository";
import CategoriesUsecase from "../../domains/categories/usecase";
import CategoriesHandler from "../../presentasions/api/web/categoriesHandler";

const router = express.Router()

const categoriesRepository = new CategoriesRepository()
const categoriesUsecase = new CategoriesUsecase(categoriesRepository)
const categoriesHandler = new CategoriesHandler(categoriesUsecase)

router.get("/category", categoriesHandler.getAllCategories)
router.get("/category/:id", categoriesHandler.getCategoryById)
router.post("/category", categoriesHandler.createCategory)
router.put("/category/:id", categoriesHandler.updateCategory)
router.delete("/category/:id", categoriesHandler.deleteCategory)

export default router