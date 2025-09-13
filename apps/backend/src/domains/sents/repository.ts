import { CreateSentDTO, Sent } from "./entity";

export interface IsentRepository {
    getAllSents(): Promise<Sent[]>
    getSentById(id: number): Promise<Sent | null>
    createSent(data : CreateSentDTO): Promise<Sent>
    updateSent(id: number, data: CreateSentDTO): Promise<Sent>
    deleteSent(id: number): Promise<Sent>
}