import { Category } from "../categories/entity"
import { Sent } from "../sents/entity"

export interface PictureProduct{
    id: number,
    path: string,
    productId : number
}

export interface Product{
    id: number,
    name : string,
    type : string,
    weight : number,
    desc : string,
    price : number,
    sentId : number,
    categoryId : number
    sent? : Sent,
    category?: Category,
    pictures : PictureProduct[]
}

export interface CreatePictureProductDTO{
    path: string,
}

export interface CreateProductDTO{
    name : string,
    type : string,
    weight : number,
    desc : string,
    price : number,
    sentId : number,
    categoryId : number
    pictures : CreatePictureProductDTO[]
}


export interface UpdateProductDTO{
    name : string,
    type : string,
    weight : number,
    desc : string,
    price : number,
    sentId : number,
    categoryId : number,
    oldPictures : number[],
    pictures : CreatePictureProductDTO[]
}
