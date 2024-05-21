

import { z } from 'zod';
import prisma from '@/db';
const ReviewSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  rating: z.number(),
  message: z.string().min(15, { message: 'message must be at least 15 characters' }),
  category: z.number(),
});

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { toast } from "sonner"

export async function createReview(formInput: FormData) {
    console.log(formInput);
    const val = ReviewSchema.safeParse({
        name: formInput.get('name'),
        rating: Number(formInput.get('rating')),
        message: formInput.get('message'),
        category: Number(formInput.get('id'))
    });
    if (!val.success) {
        toast(val.error.issues[0].message.toString());
        // toast(val.error, { type: "error" });
        return;
    }
    
    const { name, rating, message, category } = val.data;
    let review;
    if(category === 0){
    review = await prisma.reviews.create({
        data: {
            name,
            rating,
            review : message,
        }
    });
  } else {
    review = await prisma.reviews.create({
        data: {
            name,
            rating,
            review : message,
            categoryId: category
        }
    });
  }
    console.log(review);
    formInput.set('name', '');
    formInput.set('rating', '');
    formInput.set('message', '');
    revalidatePath('/');
    redirect('/');


}