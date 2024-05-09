"use server"
import prisma from "@/app/db"
import { revalidatePath } from "next/cache"

export async function revalidate(params:string) {
    revalidatePath(params);
}

export async function addData(data:{
    title: string,
    content: string
}){
    await prisma.posts.create({ data:{
        title: data.title,
        content: data.content
    } })
}
