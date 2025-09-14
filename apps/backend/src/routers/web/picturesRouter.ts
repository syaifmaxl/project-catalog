import express from "express";
import { upload } from "../../config/multerConfig";
import PicturesHandler from "../../presentasions/api/web/picturesHandler";


const router = express.Router()

const picturesHandler = new PicturesHandler()

router.post("/uploads", upload.array("picture", 3), picturesHandler.testUploud)
router.get("/uploads/:name", picturesHandler.testRead)

export default router
