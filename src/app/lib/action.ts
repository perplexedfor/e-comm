"use server"

import { z } from 'zod';
import prisma from '@/db';
const ReviewSchema = z.object({
  name: z.string(),
  rating: z.number(),
  message: z.string(),
});
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createReview(formInput: FormData) {
//   const review = await prisma.reviews.create({
//     data: {
//       ...data,
//     },
//   })
//   return review
    const { name, rating, message} = ReviewSchema.parse({
        name: formInput.get('name'),
        rating: Number(formInput.get('rating')),
        message: formInput.get('message')
    });
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