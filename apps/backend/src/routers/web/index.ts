import express from "express"
import categoriesRouter from "./categoriesRouter"
import sentsRouter from "./sentsRouter"
import picturesRouter from "./picturesRouter"
import productsRouter from "./productsRouter"
const router = express.Router()

router.use(categoriesRouter)
router.use(sentsRouter)
router.use(picturesRouter)
router.use(productsRouter)

export default router
