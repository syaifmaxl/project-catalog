import express from "express"
import categoriesRouter from "./categoriesRouter"

const router = express.Router()

router.use(categoriesRouter)

export default router