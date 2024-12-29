'use client'

import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import ReviewTab from "@/components/review/reviewtab"
import InputBox from "@/components/review/inputbox"
import { review } from "@/components/review/reviewtab"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ReviewSectionProps = {
  reviews?: review[]
  categoryId?: number
}

export default function ReviewSection({ reviews, categoryId }: ReviewSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="space-y-8 mt-16"
    >
      <Separator />
      
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Customer Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          {reviews && reviews.length > 0 ? (
            <ReviewTab />
          ) : (
            <div className="text-center py-8 text-gray-500">
              No reviews yet. Be the first to review this product!
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-2xl">Write a Review</CardTitle>
        </CardHeader>
        <CardContent>
          <InputBox />
        </CardContent>
      </Card>
    </motion.div>
  )
}

