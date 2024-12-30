import Header  from "@/components/home/header"
import Products from "@/components/home/products"
import InputBox from "@/components/review/inputbox"
import ReviewTab from "@/components/review/reviewtab"
import Footer from "@/components/footer/footer"
import { Factsheet } from "@/components/home/factsheet"
import Hero from "@/components/home/hero"
import About from "@/components/home/about"
import prisma from '@/db';
import VideoSection from "@/components/home/video-section"

// import Subfooter from "@/components/footer/subfooter"
import Link from "next/link"

export const revalidate = 3600;

export async function getComponentDetails() {
  try {
    const category = await prisma.category.findMany({
      orderBy: {
        id: 'asc',
      },
    });
    console.log(category)
    return {
      category,
    };
    } catch (e) {
      console.log(e);
    }
}




export default async function Component() {
  const data = await getComponentDetails();


  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-100">
      <Header/>
      <main className="flex-1">
      <div className="flex items-center bg-gray-100 shadow-lg text-slate-800 sticky top-0 z-10 px-4 lg:px-6 h-14">
        <nav className="ml-auto flex gap-4 sm:gap-6 justify-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4 bg-transparent" href="#about">
            About
          </Link>
          <div className="bg-gray-300 w-[1px]">
          </div>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#review">
            Review
          </Link>
          <div className="bg-gray-300 w-[1px]">
          </div>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#products">
            Products
          </Link>
        </nav>
        </div>
        <Hero/>
        <VideoSection/>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t relative" id="products">
          <div className="text-3xl italic px-6 py-2">
            We only deal in Wholesale * 
          </div>
          <Products categories={data?.category}/>
        </section>
        <div className="flex justify-center bg-[url('/background2.jpg')]">
          <About/>
        </div>
        <section>
          <Factsheet/>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="">
          <div className="space-y-2 text-center ">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex justify-center   ">Customer Reviews</h2>
              <p className=" max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 flex justify-center mx-auto">
                Don&apos;t just take our word for it. Our customers love the products we offer.
              </p>
          </div>
          <div className="flex justify-center" id="review">
            <ReviewTab/>
          </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t" id="contact">
          <div className="c">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Write a review</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Rate the experience that you had with our products. Your feedback helps us improve our services.
              </p>
            </div>
            <InputBox/>
          </div>
        </section>
        {/* <Subfooter/> */}
      </main>
      <Footer/>
    </div>
  )
}






