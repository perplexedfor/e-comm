
import { Separator } from "@/components/ui/separator"
import InputBox  from "@/components/review/inputbox"
import Link from "next/link"
import { getComponentDetails } from "@/app/page"
import  prisma  from "@/db"
import ProductImage from "@/components/products/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown"

export const revalidate = 3600;

import ReviewTab from "@/components/review/reviewtab"
import { JsonValue } from "@prisma/client/runtime/library"
import { review } from "@/components/review/reviewtab"
import { getproductDetails } from "@/app/lib/action"
// Generate segments for both [category] and [product]
export async function generateStaticParams() {
  const categories = await getComponentDetails();
  if(categories && categories.category){
  return categories.category.map((category) => ({
    name: category.name,
  }))}else{
    return [];
  }

}
const getReviewsCat = async (user:{id: number,name: string, description: JsonValue}) => {
  try {
    const reviews:review[] = await prisma.reviews.findMany({
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
  }catch (e){
    console.log(e);
  }
}


export default async function Component(params: { params: { category: string }}) {
  const products = await getproductDetails(params.params.category);
  const categoriesdes = await getComponentDetails();
  let user;
  if(categoriesdes){
   user = categoriesdes.category.find(category => category.name === params.params.category);
  }
  let reviews:review[]|undefined;
  if(user){
    const val = await getReviewsCat(user);
    if(val) reviews  =  val;
  }
  return (
    <div>
      <div>
    <div className="flex flex-col min-h-screen ">
      <header className="flex justify-between p-4 border-b lg:p-8">
        <div className="flex flex-row justify-between min-w-[150px]">
        <nav className="hidden gap-4 text-lg font-semibold lg:flex">
          <Link className="text-gray-500 underline dark:text-gray-400" href="/">
            Home
          </Link>
        </nav>
        <DropdownMenu>
            <DropdownMenuTrigger>Products</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              {
                categoriesdes?.category.map((category) => (
                  <DropdownMenuItem key={category.id}>
                    <Link className="font-semibold cursor-pointer "  href={category.name}>
                    {category.name.replace(/-/g, " ")}
                    </Link>
                  </DropdownMenuItem>
                ))
              }
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        <Link className="flex items-center gap-2 font-bold" href="/">
          <span className="">Eletrax</span>
        </Link>
      </header>
      <div className="px-4 py-6 md:py-12 lg:py-16">
      <div className=" max-w-6xl mx-auto items-start">
        <div className="grid gap-4 md:col-span-2">
          <div className="grid gap-4">
            <div className="flex flex-row justify-between">
              <h1 className="font-semibold text-3xl lg:text-4xl" id="overview">
                {user?.name.replace(/_/g, " ")}
              </h1> 
              
          </div> {
            products != undefined ? <ProductImage parameter={products}/> : null
          }
              
          </div>
          <Separator className="border-t" />
              {user?.description != undefined ?
              <div className="grid gap-4" id="specifications">
              <h2 className="font-semibold text-2xl lg:text-3xl">Specifications</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.keys(user?.description).map((key,index) => (
                  <div className="grid gap-1" key={index}>
                    <p className="text-sm font-medium">{key}</p>
                    <p>{user?.description[key]}</p>
                  </div>
                ))}
                </div>
                </div> : null
              }
          <Separator className="border-t" />
          
          <div className="" id="reviews">
            <h2 className="font-semibold text-2xl lg:text-3xl mb-4">Reviews</h2>
            {
              reviews != undefined && reviews.length > 0 ? <ReviewTab/> : <div>No reviews yet</div>
            }
          </div>
                <Separator className="border-t" />
                <div>Write a review!! </div>
                <InputBox/>

              </div>
            </div>
          </div>
        </div>
        </div>
      <footer className=" w-full h-14 border-t sm:h-20 ">
        <div className="text-sm font-medium items-center flex justify-between lg:justify-center flex-col lg:flex-row mt-4">
          <Link className="underline px-2" href="/">
            About Us
          </Link>
          <Link className="underline px-2" href="/">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  )
}







