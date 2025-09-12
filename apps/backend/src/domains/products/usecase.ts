import { CreateProductDTO, Product, UpdateProductDTO } from "./entity";
import { IproductsRepository } from "./repository";
import fs from "fs"
import path from "path"
export default class ProductsUsecase{
    constructor(private productsRepository : IproductsRepository) {}

    getAllProducts = async(): Promise<Product[]> => {
        return await this.productsRepository.getAllProducts()
    }

    getProductById = async(id: number): Promise<Product | null> => {
        return await this.productsRepository.getProductById(id)
    }

    createProduct = async(data : CreateProductDTO): Promise<Product> => {
        return await this.productsRepository.createProduct(data)
    }

    updateProduct = async(id: number, data : UpdateProductDTO): Promise<Product> => {
        return await this.productsRepository.updateProduct(id, data)
    }

    deleteProduct = async(id: number): Promise<Product> => {
        const {product, pictures } = await this.productsRepository.deleteProduct(id)

        for(const pic of pictures) {
            const filename = pic.path
            const filePath = path.join(__dirname, "..", "..", filename)
            fs.unlink(filePath, (err) => {
                if(err) {
                    console.log("gagal hapus file : ", err)
                    throw err
                }
            })

        }

        
        return product
    }


}