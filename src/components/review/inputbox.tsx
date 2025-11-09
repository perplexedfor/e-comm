// src/components/review/inputbox.tsx

'use client'

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createReview } from "../../app/lib/action";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Star } from 'lucide-react';

const categories = [
  { id: 1, name: 'MCB DB BOX' },
  { id: 2, name: 'MCB' },
  { id: 3, name: 'GI MODULAR BOX' }, // Corrected typo from MUDULAR to MODULAR
  { id: 4, name: 'AC BOX' },
  { id: 5, name: 'BUS BAR' },
  { id: 6, name: 'MAIN SWITCH CHANGEOVER' }
];

// A new, interactive Star Rating component
const StarRating = ({ rating, setRating }: { rating: number, setRating: (rating: number) => void }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            type="button" // Important to prevent form submission
            key={starValue}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            className="cursor-pointer transition-colors"
          >
            <Star
              className={`w-6 h-6 ${starValue <= (hover || rating) ? 'text-yellow-400' : 'text-slate-300'}`}
              fill="currentColor"
            />
          </button>
        );
      })}
    </div>
  );
};

const InputBox = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0); // Rating is now a number
  const [categoryId, setCategoryId] = useState(""); // Changed from 'id' for clarity

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please select a rating.");
      return;
    }
    // Convert rating back to string for the server action if needed, or update action
    const res = await createReview({ name, message, rating: String(rating), id: categoryId });
    if (res) {
      toast.error(res);
    } else {
      toast.success("Thank you! Your review has been submitted.");
      // Reset form
      setName("");
      setMessage("");
      setRating(0);
      setCategoryId("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      className="container mx-auto max-w-3xl"
    >
      <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-lg shadow-lg space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              placeholder="e.g., John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Product Category Field */}
          <div className="space-y-2">
            <Label htmlFor="product-category">Product Category (Optional)</Label>
            <Select name="id" value={categoryId} onValueChange={setCategoryId}>
              <SelectTrigger id="product-category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">General Feedback</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id.toString()}>
                    {category.name.replace(/_/g, " ")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Star Rating */}
        <div className="space-y-2">
          <Label>Your Rating</Label>
          <StarRating rating={rating} setRating={setRating} />
        </div>

        {/* Review Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message">Your Review</Label>
          <Textarea
            id="message"
            placeholder="Tell us about your experience with our product..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[120px]"
            required
          />
        </div>
        
        {/* Submit Button */}
        <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 text-base">
          Submit Review
        </Button>
      </form>
    </motion.div>
  );
};

export default InputBox;