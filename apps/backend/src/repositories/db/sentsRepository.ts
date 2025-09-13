import { CreateSentDTO, Sent } from "../../domains/sents/entity";
import { IsentRepository } from "../../domains/sents/repository";
import { prisma } from "../../server";

export default class SentsRepository implements IsentRepository {
    getAllSents = async (): Promise<Sent[]> => {
        return prisma.sent.findMany({})
    }

    getSentById = async (id: number): Promise<Sent | null > => {
        return prisma.sent.findUnique({
            where : { id }
        })
    }

    createSent = async (data: CreateSentDTO): Promise<Sent> => {
        return prisma.sent.create({
            data : data
        })
    }

    updateSent = async (id: number, data: CreateSentDTO): Promise<Sent> => {
        return prisma.sent.update({
            where : { id },
            data : data
        })
    }

    deleteSent = async (id: number): Promise<Sent> => {
        return prisma.sent.delete({
            where : { id}
        })
    }
}