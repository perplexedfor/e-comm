'use server'
import prisma from '@/db';

export const getReviews = async (categoryId?: number): Promise<{ reviews: any[] }> => {
  try {
    const reviews = await prisma.reviews.findMany({
      take: 4,
      where: categoryId 
        ? { categoryId } 
        : { rating: { in: [4, 5] } },
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
    });

    return { reviews };
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

