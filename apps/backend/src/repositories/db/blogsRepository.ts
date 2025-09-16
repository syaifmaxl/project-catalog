import { Blog, CreateBlogDTO, UpdateBlogDTO } from "../../domains/blogs/entity";
import { IblogsRepository } from "../../domains/blogs/repository";
import { prisma } from "../../config/prisma";

export default class BlogsRepository implements IblogsRepository{
    async getAllBlogs(): Promise<Blog[]> {
        return await prisma.blog.findMany()
    }

    async getBlogById(id: number): Promise<Blog | null> {
        return await prisma.blog.findUnique({
            where: { id }
        })
    }

    async createBlog(data: CreateBlogDTO): Promise<Blog> {
        return await prisma.blog.create({
            data : data
        })
    }

    async updateBlog(id: number, data: UpdateBlogDTO): Promise<Blog> {
        return await prisma.blog.update({
            where : { id },
            data :  data 
        })
    }

    async deleteBlog(id: number): Promise<Blog> {
        return await prisma.blog.delete({
            where :  { id }
        })
    }
}  