import { InputJsonValue, JsonValue } from "@prisma/client/runtime/library";

export interface Blog{
    id: number,
    title: string,
    contentDelta: JsonValue,
    contentHtml: string,
    createdAt: Date,
    updatedAt: Date | null
}

export interface CreateBlogDTO{
    title: string,
    contentDelta: InputJsonValue,
    contentHtml: string,
}

export interface UpdateBlogDTO{
    title: string,
    contentDelta: InputJsonValue,
    contentHtml: string,
    updatedAt : Date | null
}