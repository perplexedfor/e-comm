'use client'

import { useState } from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { JsonValue } from "@prisma/client/runtime/library"
interface ProductImageProps {
  parameter: {
    id: number
    type: string
    size: number
    description: JsonValue | null
  }[]
  currentIndex: number
  setCurrentIndex: (index: number) => void
}

export default function ProductImage({ parameter, currentIndex, setCurrentIndex }: ProductImageProps) {
  const baseUrl = "https://uxzikocsoffozrqooxqy.supabase.co/storage/v1/object/public/product-images/"
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const types = parameter.map(product => product.type.replace(/\s/g, ''))
  const sizes = parameter.map(product => product.size)

  return (
    <div className="space-y-4">
      <Carousel className="w-full max-w-xl mx-auto">
        <CarouselContent>
          {Array.from({ length: sizes[currentIndex] || 0 }).map((_, i) => (
            <CarouselItem key={i} className="flex items-center justify-center">
              <Image 
                src={`${baseUrl}${types[currentIndex]}-${i+1}.png`}
                alt={`${types[currentIndex]} image ${i+1}`}
                width={400}
                height={400}
                className="object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {types.length > 1 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {types.map((type, index) => (
            <Card 
              key={index} 
              className={`cursor-pointer transition-all ${index === currentIndex ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-2">
                <Image
                  src={`${baseUrl}${type}-1.png`}
                  alt={type}
                  width={100}
                  height={100}
                  className="w-full h-auto object-contain"
                />
                <p className="text-center text-sm mt-2">{type.replace(/_/g, " ")}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}








  