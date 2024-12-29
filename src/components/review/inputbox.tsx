'use client'

import { ReactNode, ChangeEventHandler, useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { createReview } from "../../app/lib/action"
import { motion } from "framer-motion"
import { Star } from 'lucide-react'

const categories = [
  { id: 1, name: 'MCB_DB_BOX' },
  { id: 2, name: 'MCB' },
  { id: 3, name: 'GI_MUDULAR_BOX' },
  { id: 4, name: 'AC_BOX' },
  { id: 5, name: 'BUS_BAR' },
  { id: 6, name: 'MAIN_SWITCH_CHANGEOVER' }
]

const InputBox = (): ReactNode => {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState("")
  const [id, setId] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    let res = await createReview({ name, message, rating, id })
    if (res) {
      toast.error(res)
    } else {
      toast.success("Review Created")
      // Reset form
      setName("")
      setMessage("")
      setRating("")
      setId("")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-[650px] space-y-6 bg-slate-50 p-8 rounded-lg shadow-lg"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <LabelledInput
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="space-y-2">
          <Label htmlFor="message">Your Review</Label>
          <Textarea
            id="message"
            placeholder="Share your thoughts..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[100px]"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="space-y-2 w-full sm:w-1/2">
            <Label htmlFor="rating">Rating</Label>
            <Select name="rating" value={rating} onValueChange={setRating}>
              <SelectTrigger>
                <SelectValue placeholder="Select rating" />
              </SelectTrigger>
              <SelectContent>
                {[5, 4, 3, 2, 1].map((value) => (
                  <SelectItem key={value} value={value.toString()}>
                    <div className="flex items-center">
                      {value} <Star className="w-4 h-4 ml-1 text-yellow-400 fill-current" />
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 w-full sm:w-1/2">
            <Label htmlFor="product">Product</Label>
            <Select name="id" value={id} onValueChange={setId}>
              <SelectTrigger>
                <SelectValue placeholder="Select product" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">General</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id.toString()}>
                    {category.name.replace(/_/g, " ")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button type="submit" className="w-full">Submit Review</Button>
      </form>
    </motion.div>
  )
}

interface LabelledInputProps {
  label: string
  placeholder: string
  type?: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

function LabelledInput({ label, placeholder, type = "text", value, onChange }: LabelledInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={label.toLowerCase()}>{label}</Label>
      <Input
        type={type}
        id={label.toLowerCase()}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  )
}

export default InputBox

