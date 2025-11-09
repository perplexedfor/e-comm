// src/components/review/reviewtab.tsx

import { getReviews } from "@/app/lib/util";
import { Star, Quote } from 'lucide-react';
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

export type Review = { 
  name: string;
  rating: number;
  review: string;
  categoryId: number | null;
  created_at: Date;
};

// This is a mapping from your DB to display names, keep it for the footer
const categories = [
  { id: 1, name: 'MCB DB BOX' },
  { id: 2, name: 'MCB' },
  { id: 3, name: 'GI MODULAR BOX' },
  { id: 4, name: 'AC BOX' },
  { id: 5, name: 'BUS BAR' },
  { id: 6, name: 'MAIN SWITCH CHANGEOVER' },
];

// This component will now be a server component that fetches data and renders a grid
const ReviewTab = async ({ categoryId }: { categoryId?: number }) => {
  const reviewData = await getReviews(categoryId);

  if (!reviewData || reviewData.reviews.length === 0) {
    return (
      <div className="text-center py-16 text-slate-600">
        <h3 className="text-xl font-semibold">No Reviews Yet</h3>
        <p className="mt-2">Be the first to share your experience with our products.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviewData.reviews.map((review, index) => (
          <Card 
            key={index} 
            className="flex flex-col bg-white shadow-md hover:shadow-xl transition-shadow duration-300 h-full"
          >
            <CardHeader className="flex flex-row items-center justify-between p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-lg font-bold text-slate-600">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-slate-800">{review.name}</p>
                  <p className="text-sm text-slate-500">
                    {new Date(review.created_at).toLocaleDateString('en-US', {
                      month: 'short', day: 'numeric', year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500' : 'text-slate-300'}`}
                    fill={i < review.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-6 pt-0">
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-10 h-10 text-slate-100" />
                <p className="relative italic text-slate-700">
                  {review.review}
                </p>
              </div>
            </CardContent>
            <CardFooter className="text-xs text-slate-500 p-6 pt-0">
              Category: {review.categoryId ? categories.find(c => c.id === review.categoryId)?.name || 'Unknown' : 'General'}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewTab;