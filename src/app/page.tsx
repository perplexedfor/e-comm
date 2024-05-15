
import Header  from "@/components/home/header"
import Products from "@/components/home/products"
import InputBox from "@/components/review/inputbox"
import ReviewTab from "@/components/review/reviewtab"
import Footer from "@/components/footer/footer"
import prisma from '@/db';
// import { createClient } from '@supabase/supabase-js'

export async function getComponentDetails() {
  try {
    const category = await prisma.category.findMany();
    console.log(category);
    return {
      category,
    };
    } catch (e) {
      console.log(e);
    }
}
const getReviews = async () => {
    try {
      const reviews = await prisma.reviews.findMany({
        take: 4,
        orderBy: {
          rating: 'desc',
        },
        select: {
          name: true,

          review: true,
          rating: true,
        },
      })
      return {reviews}
    }catch (e){
      console.log(e);
    }
  }
  // const getPublicUrl = async () => {
  //   const supabase = createClient('your_project_url', 'your_supabase_api_key')
  // const { data } = supabase.storage.from('product-images').getPublicUrl('mcb-db-1pole-1.jpg')
  // console.log(data.publicUrl)
  // }

export default async function Component() {
  const data = await getComponentDetails();
  const reviews = await getReviews();
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        {/* <Background/> */}
          <div className="container grid items-center gap-6 px-4 md:px-6 z-1">
            <div className="space-y-2 text-center">
            <img
      alt="Image"
      className=" rounded-lg top-6 md:mx-[40%] absolute"
      height="50"
      src="/logo2.png"
      width="250"
            />
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Welcome to the Future</h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover the latest in cutting-edge technology. Elevate your life with innovation.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-10 px-4 md:px-6">
            <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/FSNybHy5vJ0?si=hZEhiYpkIkNlQn2N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Future is Now</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Our commitment to excellence means you get the best technology has to offer. Experience the
                    difference with our state-of-the-art devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <Products categories={data?.category}/>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <ReviewTab reviews={reviews?.reviews}/>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t" id="contact">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have a question? Want to learn more about our products? Fill out the form below and we'll get back to
                you as soon as possible.
              </p>
            </div>
            <InputBox/>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}





