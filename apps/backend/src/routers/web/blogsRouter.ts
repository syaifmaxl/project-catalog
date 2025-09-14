import express from "express";

import BlogsRepository from "../../repositories/db/blogsRepository";
import BlogsUsecase from "../../domains/blogs/usecase";
import BlogsHandler from "../../presentasions/api/web/blogsHandler";


const router = express.Router()

const blogsRepository = new BlogsRepository()
const blogsUsecase = new BlogsUsecase(blogsRepository)
const blogsHandler = new BlogsHandler(blogsUsecase)

router.get("/blog", blogsHandler.getAllBlogs)
router.get("/blog/:id", blogsHandler.getBlogById)
router.post("/blog", blogsHandler.createBlog)
router.put("/blog/:id", blogsHandler.updateBlog)
router.delete("/blog/:id", blogsHandler.deleteBlog)


export default router