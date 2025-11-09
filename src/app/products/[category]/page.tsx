// src/app/products/[categoryName]/page.tsx

import Header from "@/components/Header"; // Using the unified header
import ProductDetails from "@/components/products/product-details";
import ReviewSection from "@/components/products/review-section";
import Footer from "@/components/footer/footer";
import { getComponentDetails } from "@/app/page";
import { getproductDetails } from "@/app/lib/action";
import { Review } from "@/components/review/reviewtab";
import prisma from "@/db";
import { JsonValue } from "@prisma/client/runtime/library";
import { Metadata, ResolvingMetadata } from 'next'; // Import Metadata types

export const revalidate = 3600;

// === NEW: DYNAMIC METADATA FUNCTION ===
type Props = {
  params: { category: string }
}

// This function creates the dynamic Title and Description for SEO
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const categoryName = params.category.replace(/_/g, " ");

  // Create a dynamic title
  const title = `${categoryName} | Eletrax Wholesale Electrical Supplies`;
  
  // Create a dynamic description
  const description = `Shop high-quality, wholesale ${categoryName} from Eletrax. We manufacture and supply a wide range of certified electrical components.`;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      // You can add a specific image for each category here if you want
    },
  }
}

// === YOUR EXISTING FUNCTIONS ===
export async function generateStaticParams() {
  const categories = await getComponentDetails();
  return categories?.category?.map((category) => ({ category: category.name })) || [];
}

type Variation = { id: number; size: number; description: JsonValue; };
type GroupedProduct = { type: string; variations: Variation[]; };

const groupProductsByType = (products: any[]): GroupedProduct[] => {
  if (!products) return [];
  const grouped = products.reduce((acc: { [key: string]: GroupedProduct }, product) => {
    const key = product.type.trim().toLowerCase().replace(/-/g, '_');
    acc[key] = acc[key] || { type: product.type.trim(), variations: [] };
    acc[key].variations.push({ id: product.id, size: product.size, description: product.description });
    return acc;
  }, {});
  return Object.values(grouped);
};

const getReviewsCat = async (user: { id: number; }) => {
  try {
    const reviews: Review[] = await prisma.reviews.findMany({
      take: 4, orderBy: { rating: "desc" },
      select: { name: true, review: true, rating: true, categoryId: true, created_at: true },
      where: { categoryId: user.id },
    });
    return reviews;
  } catch (e) { console.log(e); return []; }
};


// === YOUR PAGE COMPONENT ===
export default async function Page({ params }: { params: { category: string } }) {
  const { category } = params;

  const [products, categoriesData] = await Promise.all([
    getproductDetails(category),
    getComponentDetails()
  ]);

  const currentCategoryInfo = categoriesData?.category.find((cat) => cat.name === category);
  const reviews = currentCategoryInfo ? await getReviewsCat(currentCategoryInfo) : [];
  const groupedProducts = groupProductsByType(products || []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentCategory={category} />
      <main className="container mx-auto px-4 py-8">
        <ProductDetails category={currentCategoryInfo} products={products || []} groupedProducts={groupedProducts} />
        <ReviewSection reviews={reviews} categoryId={currentCategoryInfo?.id} />
      </main>
      <Footer />
    </div>
  );
}