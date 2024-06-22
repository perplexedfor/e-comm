import Header  from "@/components/home/header"
import Products from "@/components/home/products"
import InputBox from "@/components/review/inputbox"
import ReviewTab from "@/components/review/reviewtab"
import Footer from "@/components/footer/footer"
import { Factsheet } from "@/components/home/factsheet"
import prisma from '@/db';
import Embed from "@/components/home/videoframe"
import Subfooter from "@/components/footer/subfooter"
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
        <section className="w-full py-12 md:py-24 lg:py-32  bg-[url('/background1.jpg')] bg-cover bg-center">
          <div className="h-[150px] px-4 md:px-6 z-1 ">
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          {/* <Embed/> */}
          <div className="relative pt-[25px] pb-[56.25%]">
                <iframe src="https://www.youtube.com/embed/FSNybHy5vJ0?si=hZEhiYpkIkNlQn2N" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="absolute top-0 left-0 w-[100%] h-[100%]"></iframe>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t relative" id="products">
          <Products categories={data?.category}/>
          <div className="text-3xl italic px-6 py-2">
            We only deal in Wholesale * 
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-gradient-to-r from-blue-200 via-indigo-300 to-blue-400 flex flex-row " id="about" >
          <div className="container grid items-center gap-6 px-4 md:px-6 bg-gray-200 mx-auto text-center ml-4 relative">
            <div className="space-y-2 mx-[5%]">
              <h2 className="mx-auto text-3xl font-bold  sm:text-4xl md:text-5xl">About</h2>
              <p className="max-w-[1200px] text-indige-950 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              “Eletrax Industries” was established in the year 2004. We are involved in Manufacturing a wide range of MCB Boxes, AC Box, Modular Boxes, Junction Box etc. Apart from this, we are providing these items at leading market price. The highly advanced infrastructure facility has been segmented into various functional units, for reasons of attaining reliable, smoother and hassle free management of the production operations. For achieving our well defined objective, our infrastructure unit has been equipped with all the necessary and modern technology based machines and equipment. Further, our highly ethical working approach has enabled us in generating a huge clientele across the nation. Our team members use their profound domain knowledge to gauge the variegated demands of the clients and co-operate each other for achieving a common goal.
Our owner, 
              </p>
              <p className="mx-auto max-w-[600px] text-indigo-950 md:text-lg/relaxed lg:text-text-xl/relaxed xl:text-lg/relaxed ">&quot;Mr. Lalit Goyal&quot; has vast industry experience which influences our team and helps us increase the required skill in providing these products to our clients. Thus, with his management skills, they helped us to achieve success in the market.</p>
            </div>
          </div>
          <div className="bg-[url('/background2.jpg')] w-[25%] mr-4 ">
          </div>
        </section>
        <section className="flex justify-center ">
          <div className=" md:min-w-[750px] lg:min-w-[1000px] my-4 px-4">
          <div className="text-center text-3xl">Fact Sheet</div>
          <Factsheet/>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-6 md:px-6">
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
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Write a review</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Rate the experience that you had with our products. Your feedback helps us improve our services.
              </p>
            </div>
            <InputBox/>
          </div>
        </section>
        <Subfooter/>
      </main>
      <Footer/>
    </div>
  )
}






