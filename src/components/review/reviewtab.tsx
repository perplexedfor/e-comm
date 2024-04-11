import { ReactNode } from "react"
import Star from "@/svgs/Star.svg"

type review = { 
  name: string,
  rating: number,
  review: string
}
const ReviewTab = ({reviews}: {reviews: review[]}):ReactNode => {
    return (
<div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Customer Reviews</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Don't just take our word for it. Our customers love the products we offer.
              </p>
            </div>
            <div className="mx-auto max-w-lg space-y-4">
            {
              reviews.map((review) => (
                <div className="grid gap-2">
                  <div className="flex justify-between">{review.name}<span className=" rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-blue-400 flex justify-between"><div>{review.rating} stars!!</div><Star width="25px" height="25px"/></span></div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  {review.review}
                  </p>
                </div>
              ))
            }
            </div>
          </div>
    )
}

export default ReviewTab