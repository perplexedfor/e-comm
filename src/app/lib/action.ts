"use server"

import { z } from 'zod';
import prisma from '@/db';
const ReviewSchema = z.object({
  name: z.string(),
  rating: z.number(),
  message: z.string(),
//   category: z.string(),
});
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createReview(formInput: FormData) {
    const val = ReviewSchema.safeParse({
        name: formInput.get('name'),
        rating: Number(formInput.get('rating')),
        message: formInput.get('message')
    });
    if (!val.success) {
        alert(val.error);
        return;
    }
    const { name, rating, message} = val.data;
    const review = await prisma.reviews.create({
        data: {
            name,
            rating,
            review : message
        }
    });
    revalidatePath('/');
    redirect('/');
    console.log(review);

}