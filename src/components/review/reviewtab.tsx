import { ReactNode } from "react"
import Star from "@/svgs/Star.svg"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export type review = { 
  name: string,
  rating: number,
  review: string,
  categoryId: number|null,
  created_at: Date
}


let categories = [
  { id: 1, name: 'MCB DB BOX' },
  { id: 2, name: 'AC BOX'  },
  { id: 6, name: 'MCCB'  },
  { id: 4, name: 'MAIN SWITCH CHANGEOVER'  },
  { id: 3, name: 'GI MODULAR BOX'},
  { id: 5, name: 'BUS BAR' },
  { id: 7, name: 'MCB' },
  { id: 8, name: 'ELCB' }
]

export const ReviewTab = ({reviews}: {reviews: review[] | undefined}):ReactNode => {
    return (

            <div className="space-y-4">
            {
              reviews != undefined ? reviews.map((review,index) => (
                <Card className="relative min-h-[150px] lg:min-w-[650px]" key={index}>
                  <CardHeader>
                    <CardTitle><div className="flex justify-between text-base"><div>{review.name}</div><div className="font-weight-thin">{review.created_at.toString().substring(0,3)+", "+review.created_at.toString().substring(3,16)}</div></div></CardTitle>
                    <CardDescription className="flex max-w-[50px]">{review.rating}<Star className="h-[20px]"></Star></CardDescription>
                  </CardHeader>
                  <CardContent>
                   <p>{review.review}</p>
                  </CardContent>
                  <CardFooter>

                   <h1>{review.categoryId ? categories[review.categoryId  - 1].name : null}</h1>
                  </CardFooter>
                </Card>
              )) : <div>No reviews</div>
            }
            </div>
          
    )
}

export default ReviewTab