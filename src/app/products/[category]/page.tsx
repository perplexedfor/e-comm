
import { Separator } from "@/components/ui/separator"
import InputBox  from "@/components/review/inputbox"
import Link from "next/link"
import { getComponentDetails } from "@/app/page"
import prisma from "@/db"
import ProductImage from "@/components/products/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown"
import ReviewTab from "@/components/review/reviewtab"
import { JsonValue } from "@prisma/client/runtime/library"
import { review } from "@/components/review/reviewtab"

// Generate segments for both [category] and [product]
export async function generateStaticParams() {
  const categories = await getComponentDetails();

  return categories?.category.map((category) => ({
    name: category.name,
  }))
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
  console.log(products)
  const categoriesdes = await getComponentDetails();
  let user;
  if(categoriesdes){
   user = categoriesdes.category.find(category => category.name === params.params.category);
  }
  let reviews:review[]|undefined;
  if(user){
    console.log(user);
    const val = await getReviewsCat(user);
    if(val) reviews  =  val;
  }
  // if(reviews != undefined) console.log(reviews);
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
                categoriesdes?.category.map((category,index) => (
                  <DropdownMenuItem key="index">
                    <Link className="font-semibold cursor-pointer " href={category.name}>
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
              
          </div> 
              <ProductImage parameter={products}/>
          </div>
          <Separator className="border-t" />
              {user?.description != undefined ?
              <div className="grid gap-4" id="specifications">
              <h2 className="font-semibold text-2xl lg:text-3xl">Specifications</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.keys(user?.description).map((key) => (
                  <div className="grid gap-1" key={key}>
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
              reviews != undefined && reviews.length > 0 ? <ReviewTab reviews={reviews}/> : <div>No reviews yet</div>
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
          <Link className="underline px-2" href="#">
            About Us
          </Link>
          <Link className="underline px-2" href="#">
            Contact
          </Link>
          <Link className="underline px-2" href="#">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  )
}
export async function getproductDetails(name: string) {
  switch (name) {
    case "AC_BOX":
      try {
        const products = await prisma.aC_BOX.findMany();
        console.log(products);
        return products
        ;
        } catch (e) {
        console.log(e);
        }
    case "GI_MODULAR_BOX":
      try {
        const products = await prisma.gI_MODULAR_BOX.findMany();
        console.log(products);
        return products;
        } catch (e) {
        console.log(e);
        }
    case "MAIN_SWITCH_CHANGEOVER":
      try {
        const products = await prisma.mAIN_SWITCH_CHANGEOVER.findMany();
        return products;
        } catch (e) {
        console.log(e);
        }
    case "BUS_BAR":
      try {
        const products = await prisma.bUS_BAR.findMany();
        return products;
        } catch (e) {
        console.log(e);
        }
    case "CIRCUIT_BREAKERS":
      try {
        const products = await prisma.cIRCUIT_BREAKERS.findMany();
        return products;
        } catch (e) {
        console.log(e);
        }
    case "MCB_DB_BOX":
      try {let categories = [
        { id: 1, name: 'MCB_DB_BOX' },
        { id: 2, name: 'AC_BOX'  },
        { id: 6, name: 'MCCB'  },
        { id: 4, name: 'MAIN_SWITCH_CHANGEOVER'  },
        { id: 3, name: 'GI_MODULAR_BOX'},
        { id: 5, name: 'BUS_BAR' },
        { id: 7, name: 'MCB' },
        { id: 8, name: 'ELCB' }
      ]
        const products = await prisma.mCB_DB_BOX.findMany();
        return products;
        } catch (e) {
        console.log(e);
        }
    }
  }






