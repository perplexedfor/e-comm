
import { Label } from "@/components/ui/label"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import cherry from "../../public/cherry.jpg"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { TextareaForm } from "@/components/enquire/enquiry"
import InputBox  from "@/components/review/inputbox"
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { getComponentDetails } from "@/app/page"
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
  // const data = await getproductDetails(category);
  // console.log(data);
  return (
    <div>
    
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
          {/* <Product products={data?.products} /> */}
        </div>
      </main>
      <div className="px-4 py-6 md:py-12 lg:py-16">
      <div className=" max-w-6xl mx-auto items-start">
        <div className="grid gap-4 md:col-span-2">
          <div className="grid gap-4">
            <div className="flex flex-row justify-between">
              <h1 className="font-semibold text-3xl lg:text-4xl" id="overview">
              Acme Prism T-Shirt: The Cozy Chromatic Blend
              </h1> 
              <div>
                <Popover>
                  <PopoverTrigger><Button variant="secondary">Contact Us!!</Button></PopoverTrigger>
                  <PopoverContent><TextareaForm/></PopoverContent>
                </Popover>
              </div>
          </div> 
            <Carousel className="max-w-sm md:max-w-md lg:max-w-lg">
              <CarouselContent className="">
                <CarouselItem className="max-w-md flex justify-center"><Image src="/cherry.jpg" alt="cherry" width={350} height={400} ></Image></CarouselItem>
                <CarouselItem className="max-w-md flex justify-center"><Image src="/cherry.jpg" alt="cherry" width={350} height={400} ></Image></CarouselItem>
                <CarouselItem className="max-w-md flex justify-center"><Image src="/cherry.jpg" alt="cherry" width={350} height={400} ></Image></CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="ml-12" />
              <CarouselNext className="mr-12" />
            </Carousel>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="size">
                Size
              </Label>
              <RadioGroup className="flex items-center gap-2" defaultValue="m" id="size">
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-xs"
                >
                  <RadioGroupItem id="size-xs" value="xs" />
                  XS
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-s"
                >
                  <RadioGroupItem id="size-s" value="s" />
                  S{"\n                              "}
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-m"
                >
                  <RadioGroupItem id="size-m" value="m" />
                  M{"\n                              "}
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-l"
                >
                  <RadioGroupItem id="size-l" value="l" />
                  L{"\n                              "}
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-xl"
                >
                  <RadioGroupItem id="size-xl" value="xl" />
                  XL
                </Label>
              </RadioGroup>
            </div>
          </div>
          <Separator className="border-t" />
          <div className="grid gap-4" id="specifications">
            <h2 className="font-semibold text-2xl lg:text-3xl">Specifications</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-1">
                <p className="text-sm font-medium">SKU</p>
                <p>ACME-12345</p>
              </div>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Material</p>
                <p>60% combed ringspun cotton/40% polyester jersey</p>
              </div>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Care Instructions</p>
                <p>Machine wash cold. Tumble dry low.</p>
              </div>
            </div>
          </div>
          <Separator className="border-t" />
          
          <div className="grid gap-4" id="reviews">
            <h2 className="font-semibold text-2xl lg:text-3xl">Reviews</h2>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <h3 className="font-semibold text-lg">Great quality</h3>
                <div className="flex items-center gap-2 text-sm">
                  <div className="font-semibold">Posted by: User123</div>
                  <div className="text-muted-foreground">September 20, 2023</div>
                </div>
                <p>
                  I absolutely love the design of this t-shirt. The prism-inspired pattern is so unique and adds a
                  stylish element to the tee. The quality of the fabric is also excellent - it feels soft and
                  comfortable against my skin. Overall, I'm very happy with my purchase and would definitely recommend
                  this t-shirt to others.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="font-semibold text-lg">Perfect fit</h3>
                <div className="flex items-center gap-2 text-sm">
                  <div className="font-semibold">Posted by: FashionFanatic</div>
                  <div className="text-muted-foreground">October 5, 2023</div>
                </div>
                <p>
                  The Acme Prism T-Shirt is incredibly versatile and can be styled in various ways to suit different
                  occasions. For a casual and laid-back look, pair the tee with your favorite jeans and sneakers. The
                  soft and comfortable fabric makes it perfect for all-day wear.
                </p>
                <Separator className="border-t" />
                <div>Write a review!! </div>
                <InputBox/>

              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
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


// import prisma from "@/db";


// type products = {
//     name: string,
//     price: number,
//     description: string,
//     image: string,
//     slug: string
// }
// async function getproducts() {
//     const products = await prisma.product.findMany();
//     return products;
// }
// export async function generateStaticParams() {

//     const products = await getproducts();
//     return products.map((product) => ({
//         category: product.name,
//         product: product.id,
//     }))
// }
// // Generate segments for both [category] and [product]
// export default function Page({
//     params,
//   }: {
//     params: { category: string; product: string }
//   }) {
//     const { category, product } = params
//     // ...
// }





