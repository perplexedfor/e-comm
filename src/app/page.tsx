import Header from "@/components/Header";
import Products from "@/components/home/products"
import InputBox from "@/components/review/inputbox"
import ReviewTab from "@/components/review/reviewtab"
import Footer from "@/components/footer/footer"
import { Factsheet } from "@/components/home/factsheet"
import Hero from "@/components/home/hero"
import About from "@/components/home/about"
import prisma from '@/db';
import VideoSection from "@/components/home/video-section"
import TrustBar from "@/components/home/TrustBar";
import ContactForm from "@/components/home/ContactForm";

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

        <Hero/>
        <TrustBar />
        <VideoSection/>
        <section className="w-full bg-gray-50 border-t" id="products">
          <Products categories={data?.category}/>
        </section>
        <About/>

        <section>
          <Factsheet/>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-slate-50">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 border-t" id="contact">
        <div className="container px-4">
          <div className="space-y-2 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Request a Quote</h2>
            <p className="mx-auto max-w-[600px] text-slate-600 md:text-xl">
              Interested in our products? Fill out the form below for wholesale pricing and inquiries.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-slate-50" id="write-review">
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






