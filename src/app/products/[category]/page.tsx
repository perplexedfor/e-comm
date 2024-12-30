import { Metadata } from "next";
import Header from "@/components/products/header";
import ProductDetails from "@/components/products/product-details";
import ReviewSection from "@/components/products/review-section";
import Footer from "@/components/footer/footer";
import { getComponentDetails } from "@/app/page";
import { getproductDetails } from "@/app/lib/action";
import { Review } from "@/components/review/reviewtab";
import prisma from "@/db";
import { JsonValue } from "@prisma/client/runtime/library";
import  PageProps  from 'next/types'

export const revalidate = 3600;

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const categories = await getComponentDetails();
  if (categories && categories.category) {
    return categories.category.map((category) => ({
      category: category.name,
    }));
  }
  return [];
}

// Fetch reviews by category
const getReviewsCat = async (user: { id: number; name: string; description: JsonValue }) => {
  try {
    const reviews: Review[] = await prisma.reviews.findMany({
      take: 4,
      orderBy: {
        rating: "desc",
      },
      select: {
        name: true,
        review: true,
        rating: true,
        categoryId: true,
        created_at: true,
      },
      where: { categoryId: user.id },
    });
    return reviews;
  } catch (e) {
    console.log(e);
    return [];
  }
};

// Define the component
// type pageProps<T> = typeof PageProps;
export default async function Page( { params } : { params : Promise<{slug: string}> } ) {
  const { slug } = await params;
  const products = await getproductDetails(slug);
  const categoriesdes = await getComponentDetails();
  const category = categoriesdes?.category.find((cat) => cat.name === slug);
  const reviews = category ? await getReviewsCat(category) : undefined;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header categories={categoriesdes?.category || []} />
      <main className="container mx-auto px-4 py-8">
        <ProductDetails category={category} products={products} />
        <ReviewSection reviews={reviews} categoryId={category?.id} />
      </main>
      <Footer />
    </div>
  );
}





