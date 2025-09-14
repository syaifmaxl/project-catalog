import { Blog, CreateBlogDTO } from "./entity";

export interface IblogsRepository{
    getAllBlogs(): Promise<Blog[]>
    getBlogById(id: number): Promise<Blog | null>
    createBlog(data: CreateBlogDTO): Promise<Blog>
    updateBlog(id: number,data: CreateBlogDTO): Promise<Blog>
    deleteBlog(id: number): Promise<Blog>
}