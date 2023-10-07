import { type } from "os";

export type ArticleT = {
    _id: string
    title: string,
    paragraphs: Array<string>,
    image: string,
    link: string,
    source : string,
    published: string,
    rating: number,
    watched: number,
}

export type DatasetT = {
    _id: string
    title: string,
    description:string,
    authorImage: string,
    authorTitle: string,
    dataLinks: Array<string>,
    source : string,
    datasetsDescription: Array<string>,
    dateModified: Array<string>,
    filesnumber: number,
    usability: number,
    rating: number,
    watched: number,
}