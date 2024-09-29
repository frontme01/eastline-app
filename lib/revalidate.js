"use server"

import { revalidateTag } from "next/cache"
import { redirect } from 'next/navigation'


export async function revalidateAll(tag) {
    revalidateTag(tag)
    redirect('/')
}   