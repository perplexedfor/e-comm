"use server"
import Header  from "@/components/home/header"
import Products from "@/components/home/products"
import InputBox from "@/components/review/inputbox"
import ReviewTab from "@/components/review/reviewtab"
import Footer from "@/components/footer/footer"
import { Factsheet } from "@/components/home/factsheet"
import prisma from '@/db';

export async function getComponentDetails() {
  try {
    const category = await prisma.category.findMany();
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
          categoryId: true,
          created_at: true,
        },
      })
      return {reviews}
    }catch (e){
      console.log(e);
    }
  }


export default async function Component() {
  const data = await getComponentDetails();
  const reviews = await getReviews();

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-100">
      <div className="sticky top-0">
      <Header/>
      </div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32  bg-[url('/background1.jpg')] bg-cover bg-center">
          <div className="container grid items-center gap-6 px-4 md:px-6 z-1 ">
            <div className=" text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl flex justify-center"><div className="flex flex-col justify-between text-indigo-950">Eletra</div><span className="text-orange-700 text-4xl sm:text-6xl">X</span></h1>
              <p className="mx-auto  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We make safe homes
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row mx-24">
              <div className="bg-black  md:rounded-l-xl px-[20px] max-w-[50%]">
                <iframe width="550" height="450" src="https://www.youtube.com/embed/FSNybHy5vJ0?si=hZEhiYpkIkNlQn2N" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
              <div className="flex flex-col justify-center space-y-4 bg-blue-500 md:rounded-r-xl  w-[570px] h-[450px] px-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl ">Explore our Manufacturing unit</h2>
                  <p className="max-w-[600px] text-gray-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                    Our commitment to excellence means you get the best technology has to offer. Experience the
                    difference with our state-of-the-art devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t ">
          <Products categories={data?.category}/>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-gradient-to-r from-blue-200 via-indigo-300 to-teal-400 flex flex-row " id="about" >
          <div className="container grid items-center gap-6 px-4 md:px-6 bg-gray-200 mx-auto text-center ml-4 rounded-l-3xl">
            <div className="space-y-2 mx-[5%]">
              <h2 className="mx-auto text-3xl font-bold  sm:text-4xl md:text-5xl">About</h2>
              <p className="max-w-[1200px] text-indige-950 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              “Eletrax Industries” was established in the year 2004. We are involved in Manufacturing a wide range of MCB Boxes, AC Box, Modular Boxes, Junction Box etc. Manufacturing of the offered product is done as per the set industry standards, by our well trained professionals, employing the highest grade raw materials and progressive machines. Offered products are highly appreciated across the market for their features like optimum quality and reliable performance. Apart from this, we are providing these items at leading market price. The highly advanced infrastructure facility has been segmented into various functional units, for reasons of attaining reliable, smoother and hassle free management of the production operations. For achieving our well defined objective, our infrastructure unit has been equipped with all the necessary and modern technology based machines and equipment. Further, our highly ethical working approach has enabled us in generating a huge clientele across the nation. Our team members use their profound domain knowledge to gauge the variegated demands of the clients and co-operate each other for achieving a common goal.
Our owner, 
              </p>
              <p className="mx-auto max-w-[600px] text-indigo-950 md:text-lg/relaxed lg:text-text-xl/relaxed xl:text-lg/relaxed ">"Mr. Lalit Goyal" has vast industry experience which influences our team and helps us increase the required skill in providing these products to our clients. Thus, with his management skills, they helped us to achieve success in the market.</p>
            </div>
          </div>
          <div className="bg-[url('/background2.jpg')] w-[25%] mr-4 rounded-r-3xl">
          </div>
        </section>
        <section className="flex justify-center ">
          <div className=" md:min-w-[750px] lg:min-w-[1000px] my-4 px-4">
          <div className="text-center text-3xl">Fact Sheet</div>
          <Factsheet/>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6">
          <div className="space-y-2 text-center ">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex justify-center   ">Customer Reviews</h2>
              <p className=" max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 flex justify-center mx-auto">
                Don't just take our word for it. Our customers love the products we offer.
              </p>
          </div>
          <div className="flex justify-center" id="review">
            <ReviewTab reviews={reviews?.reviews}/>
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
      </main>
      <Footer/>
    </div>
  )
}
  // const getPublicUrl = async () => {
  //   const supabase = createClient('your_project_url', 'your_supabase_api_key')
  // const { data } = supabase.storage.from('product-images').getPublicUrl('mcb-db-1pole-1.jpg')
  // console.log(data.publicUrl)
  // }





