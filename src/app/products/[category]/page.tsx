
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Label } from "@/components/ui/label"
import { getComponentDetails } from "@/app/page"
import { Product, ProductProps } from "@/components/category/category"
import prisma from "@/db"
type Params = {
  category: string
}

// Generate segments for both [category] and [product]
export async function generateStaticParams() {
  const categories = await getComponentDetails();

  return categories?.category.map((category) => ({
    name: category.name,
  }))
  // return products.map((product) => ({
  //   category: product.category.slug,
  //   product: product.id,
  // }))
}

const categories = [["AC Box","AC_BOX"],["Modular Box","MODULAR_BOX"],["Main Switch Changeover","MAIN_SWITCH_CHANGEOVER"],["Bus Bar","BUS_BAR"],["Circuit Breakers","CIRCUIT_BREAKERS"],["MCB DB Box","MCB_DB_BOX"]]

export default async function Component(params: { category: string}) {

  console.log(params)
  const { category } = params;
  console.log(category);
  const data = await getproductDetails(category);
  console.log(data);
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="flex items-center justify-between p-4 border-b lg:p-8">
        <nav className="hidden gap-4 text-lg font-semibold lg:flex">
          <Link className="text-gray-500 underline dark:text-gray-400" href="/">
            Home
          </Link>
        </nav>
        <Link className="flex items-center gap-2 font-bold" href="/">
          <span className="">Acme Inc</span>
        </Link>
      </header>
      <main className="flex-1 p-4 lg:p-8">
      {/* md:grid-cols-[250px_1fr] */}
        <div className="grid  gap-4">
          <div className="flex flex-col ">
            {/* <div className="grid gap-1"> */}
              {
                categories.map((category:string[]) => (
                  <div className="py-2 border-t-2">
                    <Link className="font-semibold" href={category[1]}>
                    {category[0]}
                    </Link>
                  </div>
                ))
              }
              
            {/* </div> */}
          </div>
          {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            
          </div> */}
          <Product products={data?.products} />
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-14 border-t sm:h-20">
        <div className="grid gap-4 text-sm font-medium sm:grid-flow-col items-center justify-center">
          <Link className="underline" href="#">
            About Us
          </Link>
          <Link className="underline" href="#">
            Contact
          </Link>
          <Link className="underline" href="#">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  )
}
 
// export default function Page({
//   params,
// }: {
//   params: { category: string; product: string }
// }) {
//   // ...
// }
export async function getproductDetails(name: string) {
  switch (name) {
    case "AC_BOX":
      try {
        const products = await prisma.aC_BOX.findMany();
        console.log(products);
        return {
          products,
        };
        } catch (e) {
        console.log(e);
        }
    case "MODULAR_BOX":
      try {
        const products = await prisma.mODULAR_BOX.findMany();
        console.group(products);
        return {
          products,
        };
        } catch (e) {
        console.log(e);
        }
    case "MAIN_SWITCH_CHANGEOVER":
      try {
        const products = await prisma.mAIN_SWITCH_CHANGEOVER.findMany();
        return {
          products,
        };
        } catch (e) {
        console.log(e);
        }
    case "BUS_BAR":
      try {
        const products = await prisma.bUS_BAR.findMany();
        return {
          products,
        };
        } catch (e) {
        console.log(e);
        }
    case "CIRCUIT_BREAKERS":
      try {
        const products = await prisma.cIRCUIT_BREAKERS.findMany();
        return {
          products,
        };
        } catch (e) {
        console.log(e);
        }
    case "MCB_DB_BOX":
      try {
        const products = await prisma.mCB_DB_BOX.findMany();
        return {
          products,
        };
        } catch (e) {
        console.log(e);
        }
    }
  }





