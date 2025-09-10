import express from "express"
import categoriesRouter from "./categoriesRouter"
import sentsRouter from "./sentsRouter"

const router = express.Router()

router.use(categoriesRouter)
router.use(sentsRouter)
export default router
