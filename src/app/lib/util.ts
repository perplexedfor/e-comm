'use server'
import prisma from '@/db';
import { unstable_noStore as noStore } from 'next/cache';

export const getReviews = async () => {
  noStore();
    try {
      const reviews = await prisma.reviews.findMany({
        take: 4,
        where: {
          rating: {
            in: [4, 5],
          },
        },
        orderBy: {
          rating: 'desc',
        },
        select: {
          name: true,
          review: true,
          rating: true,
          categoryId: true,
          created_at: true,
        },
      })
      return {reviews}
    }catch (e){
      console.log(e);
    }
  }


