"use server"

import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from 'next/navigation'


export async function revalidateAll(tag) {
    revalidateTag(tag)
    // redirect('/')
}   
export async function revalidateAllData() {
    revalidatePath('/')
    redirect('/')
  }