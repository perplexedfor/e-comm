
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
  { id: 2, name: 'AC BOX' },
  { id: 4, name: 'MAIN SWITCH CHANGEOVER' },
  { id: 3, name: 'GI MODULAR BOX' },
  { id: 5, name: 'BUS BAR' },
  { id: 7, name: 'MCB' },
]

export const ReviewTab = async () => {
  const reviews = await getReviews()

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
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[750px] my-6" key={index}>
            <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
              <div>
                <CardTitle className="text-lg font-semibold">{review.name}</CardTitle>
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
              <div className="text-sm text-gray-500">
                {new Date(review.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
            </CardHeader>
            <CardContent>
              <p className={`text-gray-700}`}>
                {review.review}
              </p>
              {/* {review.review.length > 150 && (
                <Button
                  variant="link"
                  className="mt-2 p-0 h-auto font-normal text-blue-600 hover:text-blue-800"
                  onClick={() => setExpandedReview(expandedReview === index ? null : index)}
                >
                  {expandedReview === index ? 'Read less' : 'Read more'}
                </Button>
              )} */}
            </CardContent>
            <CardFooter className="text-xs text-gray-500">
              Category: {review.categoryId ? categories.find(c => c.id === review.categoryId)?.name || 'Unknown' : 'General'}
            </CardFooter>
          </Card>
      ))}
    </div>
  )
}

export default ReviewTab

