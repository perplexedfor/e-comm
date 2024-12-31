
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getReviews } from "@/app/lib/util"
import { Star } from 'lucide-react'

export type Review = { 
  name: string
  rating: number
  review: string
  categoryId: number | null
  created_at: Date
}

const categories = [
  { id: 1, name: 'MCB DB BOX' },
  { id: 4, name: 'AC BOX' },
  { id: 6, name: 'MAIN SWITCH CHANGEOVER' },
  { id: 3, name: 'GI MODULAR BOX' },
  { id: 5, name: 'BUS BAR' },
  { id: 2, name: 'MCB' },
]

export const ReviewTab = async ({categoryId}:{categoryId? : number}) => {
  let reviews;
  console.log("categoryId",categoryId);
  reviews = await getReviews(categoryId);

  if (!reviews || reviews.reviews.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No reviews available at the moment. Be the first to leave a review!
      </div>
    )
  }

  return (
    <div>
      {reviews.reviews.map((review, index) => (
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 w-full min-w-[90vw] sm:min-w-[600px] md:min-w-[750px] my-6" key={index}>
          <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 p-4 sm:p-6">
            <div className="w-full sm:w-auto">
              <CardTitle className="text-lg font-semibold mb-2 sm:mb-0">{review.name}</CardTitle>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">{review.rating}/5</span>
              </div>
            </div>
            <div className="text-sm text-gray-500 mt-2 sm:mt-0">
              {new Date(review.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <p className="text-gray-700 text-sm sm:text-base">
              {review.review}
            </p>
          </CardContent>
          <CardFooter className="text-xs sm:text-sm text-gray-500 p-4 sm:p-6">
            Category: {review.categoryId ? categories.find(c => c.id === review.categoryId)?.name || 'Unknown' : 'General'}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default ReviewTab

