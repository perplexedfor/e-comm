'use client'

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { JsonValue } from "@prisma/client/runtime/library"
import { useRecoilState } from "recoil"
import { valueAtom } from "@/atoms/product"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ProductImageProps {
  parameter: {
    id: number
    type: string
    size: number
    description: JsonValue | null
  }[]
}

export default function ProductImage({ parameter }: ProductImageProps) {
  const baseUrl = "https://uxzikocsoffozrqooxqy.supabase.co/storage/v1/object/public/product-images/"
  const [value, setValue] = useRecoilState(valueAtom)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [value])

  if (!parameter || parameter.length === 0) {
    return <div>No product data available</div>
  }

  const currentProduct = parameter[value]
  if (!currentProduct) {
    return <div>Invalid product selection</div>
  }

  const { type, size } = currentProduct
  const cleanType = type.replace(/\s/g, '')

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % size)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + size) % size)
  }

  const handleImageError = () => {
    setError(`Failed to load image: ${baseUrl}${cleanType}-${currentImageIndex + 1}.png`)
  }

  return (
    <div className="space-y-4">
      <div className="relative w-full max-w-xl mx-auto aspect-square">
        {error ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-red-500">
            {error}
          </div>
        ) : (
          <Image 
            src={`${baseUrl}${cleanType}-${currentImageIndex + 1}.png`}
            alt={`${type} image ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="contain"
            onError={handleImageError}
          />
        )}
        {size > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-lg"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-lg"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      <div className="flex overflow-x-auto gap-4 py-4 px-8 scrollbar-hide">
        {parameter.map((product, index) => (
          <Card 
            key={product.id}
            className={`flex-none w-[200px] h-full cursor-pointer ${index === value ? 'ring-2 ring-blue-500' : ''}`} 
            onClick={() => setValue(index)}
          >
            <CardContent className="p-4">
              <div className="relative w-full h-[150px]">
                <Image
                  src={`${baseUrl}${product.type.replace(/\s/g, '')}-1.png`} 
                  alt={product.type}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2">
              <p className="text-sm text-blue-600 font-semibold">{product.type.replace(/-/g, ' ')}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

