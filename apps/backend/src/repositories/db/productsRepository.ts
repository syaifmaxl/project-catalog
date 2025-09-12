import { CreateProductDTO, PictureProduct, Product, UpdateProductDTO } from "../../domains/products/entity";
import { IproductsRepository } from "../../domains/products/repository";
import { prisma } from "../../server";

export default class ProductsRepository implements IproductsRepository {
    getAllProducts(): Promise<Product[]> {
        return prisma.product.findMany({
            include: {
                pictures: true
            }
        })
    }

    getProductById(id: number): Promise<Product | null> {
        return prisma.product.findUnique({
            where: { id },
            include: {
                pictures: true
            }
        })
    }

    createProduct(data: CreateProductDTO): Promise<Product> {
        return prisma.product.create({
            data: {
                name: data.name,
                type: data.type,
                weight: data.weight,
                desc: data.desc,
                price: data.price,
                sentId: data.sentId,
                categoryId: data.categoryId,
                pictures: {
                    create: data.pictures.map(pic => ({
                        path: pic.path
                    }))
                }
            },
            include: {
                pictures: true
            }
        })
    }

    updateProduct(id: number, data: UpdateProductDTO): Promise<Product> {
        return prisma.product.update({
            where: { id },
            data: {
                name: data.name,
                type: data.type,
                weight: data.weight,
                desc: data.desc,
                price: data.price,
                sentId: data.sentId,
                categoryId: data.categoryId,

                pictures: {
                    // hapus hanya gambar dengan id yang dikirim di oldPictures
                    deleteMany: data.oldPictures && data.oldPictures.length > 0
                        ? { id: { in: data.oldPictures } }
                        : undefined,

                    // buat gambar baru
                    create: data.pictures?.map(pic => ({
                        path: pic.path
                    })) ?? []
                }
            },
            include: {
                pictures: true
            }
        })
    }

    async deleteProduct(id: number): Promise<{ product: Product, pictures: PictureProduct[] }> {
        return prisma.$transaction(async (tx) => {
            const pictures = await tx.pictureProduct.findMany({
                where : { productId : id}
            })
            
            
            await tx.pictureProduct.deleteMany({
                where: { productId: id }
            })

            const product = await tx.product.delete({
                where: { id },
                include: {
                    pictures: true
                }
            })
            return { product , pictures }
        })

    }
}