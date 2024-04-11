
import prisma from "@/db";


type products = {
    name: string,
    price: number,
    description: string,
    image: string,
    slug: string
}
async function getproducts() {
    const products = await prisma.product.findMany();
    return products;
}
export async function generateStaticParams() {

    const products = await getproducts();
    return products.map((product) => ({
        category: product.name,
        product: product.id,
    }))
}
// Generate segments for both [category] and [product]
export default function Page({
    params,
  }: {
    params: { category: string; product: string }
  }) {
    const { category, product } = params
    // ...
}