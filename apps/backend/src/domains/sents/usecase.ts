import { CreateSentDTO, Sent } from "./entity";
import { IsentRepository } from "./repository";
export default class SentUsecase{
    constructor(private SentRepository : IsentRepository) {}

    getAllSents = async() : Promise<Sent[]> => {
        return await this.SentRepository.getAllSents()
    }

    getSentById = async(id : number) : Promise<Sent | null> => {
        return await this.SentRepository.getSentById(id)
    }

    createSent = async(data : CreateSentDTO) : Promise<Sent> => {
        return await this.SentRepository.createSent(data)
    }

    updateSent =  async(id: number, data : CreateSentDTO): Promise<Sent> => {
        return await this.SentRepository.updateSent(id, data)
    }

    deleteSent = async(id: number): Promise<Sent> => {
        return await this.SentRepository.deleteSent(id)
    }
}