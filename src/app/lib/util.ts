'use server'
import prisma from '@/db';

export const getReviews = async () => {
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


