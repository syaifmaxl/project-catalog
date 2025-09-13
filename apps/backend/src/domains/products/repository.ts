import { CreateProductDTO, PictureProduct, Product, UpdateProductDTO } from "./entity";

export interface IproductsRepository{
    getAllProducts(): Promise<Product[]>
    getProductById(id: number): Promise<Product | null>
    createProduct(data: CreateProductDTO): Promise<Product>
    updateProduct(id: number,data:  UpdateProductDTO): Promise<Product>
    deleteProduct(id: number): Promise<{product : Product, pictures: PictureProduct[]}>
}