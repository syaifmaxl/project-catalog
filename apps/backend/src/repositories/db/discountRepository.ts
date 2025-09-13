import { CreateDiscountDTO, Discount } from "../../domains/discounts/entitty";
import { IdiscountRepository } from "../../domains/discounts/repository";
import { prisma } from "../../server";

export default class DiscountsRepository implements IdiscountRepository {
    async getAllDiscountProducts(): Promise<Discount[]> {
        return await prisma.discount.findMany({
            include: {
                productDiscs: {
                    include: {
                        product: true
                    }
                }
            }
        })
    }

    async getDiscountProductById(id: number): Promise<Discount | null> {
        return await prisma.discount.findUnique({
            where: { id },
            include: {
                productDiscs: {
                    include: {
                        product: true
                    }
                }
            }
        })
    }

    async createDiscountProduct(data: CreateDiscountDTO): Promise<Discount> {
        return await prisma.$transaction(async (tx) => {
            return await tx.discount.create({
                data: {
                    name: data.name,
                    percent: data.percent,
                    desc: data.desc,
                    startDate: data.startDate,
                    endDate: data.endDate,
                    productDiscs: data.productId ? {
                        create: data.productId?.map(item => {
                            return { product: { connect: { id: item } } }
                        })
                    } : undefined
                }, include: {
                    productDiscs: {
                        include: {
                            product: true
                        }
                    }
                }
            })
        })
    }

    async updateDiscountProduct(id: number, data: CreateDiscountDTO): Promise<Discount> {
        return await prisma.$transaction(async (tx) => {
            // 1. Ambil daftar productId existing
            const existing = await tx.productDisc.findMany({
                where: { discountId: id },
                select: { productId: true }
            });
            const existingIds = existing.map((e) => e.productId);

            // 2. Ambil daftar baru dari request
            const newIds = data.productId?? [];

            // 3. Cari yang harus dihapus (ada di existing, tapi tidak di newIds)
            const toDelete = existingIds.filter((pid) => !newIds.includes(pid));

            // 4. Cari yang harus ditambah (ada di newIds, tapi tidak di existingIds)
            const toAdd = newIds.filter((pid) => !existingIds.includes(pid));

            // 5. Hapus yang tidak ada lagi
            if (toDelete.length > 0) {
                await tx.productDisc.deleteMany({
                    where: {
                        discountId: id,
                        productId: { in: toDelete }
                    }
                });
            }

            // 6. Tambahkan yang baru
            if (toAdd.length > 0) {
                await tx.productDisc.createMany({
                    data: toAdd.map((pid) => ({
                        discountId: id,
                        productId: pid
                    }))
                });
            }

            // 7. Update discount info
            return await tx.discount.update({
                where: { id },
                data: {
                    name: data.name,
                    percent: data.percent,
                    desc: data.desc,
                    startDate: data.startDate,
                    endDate: data.endDate
                },
                include: {
                    productDiscs: {
                        include: {
                            product: true
                        }
                    }
                }
            });
        });
    }


    async deleteDiscountProduct(id: number): Promise<Discount> {
        return await prisma.$transaction(async (tx) => {
            await tx.productDisc.deleteMany({
                where: { discountId: id }
            })

            return await tx.discount.delete({
                where: { id }
            })
        })
    }
}