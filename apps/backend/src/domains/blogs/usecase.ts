import { title } from "process";
import { Blog, CreateBlogDTO } from "./entity";
import { IblogsRepository } from "./repository";

export default class BlogsUsecase{
    constructor(private blogsRepository : IblogsRepository) {}

    async getAllBlogs(): Promise<Blog[]> {
        return await this.blogsRepository.getAllBlogs()
    }

    async getBlogById(id: number): Promise<Blog | null> {
        return await this.blogsRepository.getBlogById(id)
    }

    async createBlog(data: CreateBlogDTO): Promise<Blog> {
        return await this.blogsRepository.createBlog(data)
    }

    async updateBlog(id: number, data: CreateBlogDTO): Promise<Blog> {
        const newData = {
            title : data.title,
            contentDelta : data.contentDelta,
            contentHtml : data.contentHtml,
            updatedAt : new Date()
        }
        return await this.blogsRepository.updateBlog(id, newData)
    }
    
    async deleteBlog(id: number):  Promise<Blog> {
        return await this.blogsRepository.deleteBlog(id)
    }
}