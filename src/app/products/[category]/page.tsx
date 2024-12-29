import Header from "@/components/products/header"
import ProductDetails from "@/components/products/product-details"
import ReviewSection from "@/components/products/review-section"
import Footer from "@/components/footer/footer"
import { getComponentDetails } from "@/app/page"
import { getproductDetails } from "@/app/lib/action"
import { review } from "@/components/review/reviewtab"
import prisma from "@/db"
import { JsonValue } from "@prisma/client/runtime/library"

export const revalidate = 3600

export async function generateStaticParams() {
  const categories = await getComponentDetails()
  if (categories && categories.category) {
    return categories.category.map((category) => ({
      name: category.name,
    }))
  }
  return []
}

const getReviewsCat = async (user: { id: number; name: string; description: JsonValue }) => {
  try {
    const reviews: review[] = await prisma.reviews.findMany({
      take: 4,
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
      where: { categoryId: user.id }
    })
    return reviews
  } catch (e) {
    console.log(e)
    return []
  }
}

export default async function Component(params: { params: { category: string } }) {
  const products = await getproductDetails(params.params.category)
  const categoriesdes = await getComponentDetails()
  const category = categoriesdes?.category.find(category => category.name === params.params.category)
  const reviews = category ? await getReviewsCat(category) : undefined

  return (
    <div className="min-h-screen bg-gray-50">
      <Header categories={categoriesdes?.category || []} />
      <main className="container mx-auto px-4 py-8">
        <ProductDetails 
          category={category} 
          products={products} 
        />
        <ReviewSection 
          reviews={reviews} 
          categoryId={category?.id} 
        />
      </main>
      <Footer />
    </div>
  )
}

