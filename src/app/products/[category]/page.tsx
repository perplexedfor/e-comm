
import Header from "@/components/products/header";
import ProductDetails from "@/components/products/product-details";
import ReviewSection from "@/components/products/review-section";
import Footer from "@/components/footer/footer";
import { getComponentDetails } from "@/app/page";
import { getproductDetails } from "@/app/lib/action";
import { Review } from "@/components/review/reviewtab";
import prisma from "@/db";
import { JsonValue } from "@prisma/client/runtime/library";


export const revalidate = 3600;

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const categories = await getComponentDetails();

  if (categories?.category?.length) { // Safely check if categories and category array exist
    return categories.category.map((category) => ({
      category: category.name, // Matches the dynamic route `[category]`
    }));
  }

  return []; // Return an empty array if no categories
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
export default async function Page( { params } : { params : Promise<{category: string}> } ) {
  const { category } = await params;
  console.log("params",params)
  const products = await getproductDetails(category);
  const categoriesdes = await getComponentDetails();
  const val = categoriesdes?.category.find((cat) => cat.name === category);
  const reviews = val ? await getReviewsCat(val) : undefined;
  console.log("val", val);
  return (
    <div className="min-h-screen bg-gray-50">
      <Header categories={categoriesdes?.category || []} />
      <main className="container mx-auto px-4 py-8">
        <ProductDetails category={val} products={products} />
        <ReviewSection reviews={reviews} categoryId={val?.id} />
      </main>
      <Footer />
    </div>
  );
}





