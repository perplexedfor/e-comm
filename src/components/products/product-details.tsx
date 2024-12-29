'use client'

import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import ProductImage from "@/components/products/image"
import { JsonValue } from "@prisma/client/runtime/library"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Prisma } from "@prisma/client"
import { useState } from "react"

type ProductDetailsProps = {
  category?: {
    name: string
    description: JsonValue
  }
  products?: {
    id: number;
    type: string;
    size: number;
    description: Prisma.JsonValue | null;
}[]
}

export default function ProductDetails({ category, products }: ProductDetailsProps) {
    const [currentProductIndex, setCurrentProductIndex] = useState(0)

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex-1">
            <h1 className="text-4xl font-bold tracking-tight">
              {category?.name.replace(/_/g, " ")}
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Discover our premium range of electrical solutions designed for modern homes and businesses.
            </p>
          </div>
        </div>
  
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              {products && (
                <ProductImage 
                  parameter={products} 
                  currentIndex={currentProductIndex}
                  setCurrentIndex={setCurrentProductIndex}
                />
              )}
            </CardContent>
          </Card>
  
          <div>
            <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
            {products && products[currentProductIndex] && (
              <div className="space-y-4">
                <p><strong>Type:</strong> {products[currentProductIndex].type.replace(/_/g, " ")}</p>
                <p><strong>Size:</strong> {products[currentProductIndex].size}</p>
                {products[currentProductIndex].description && (
                  <div>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Specifications</h3>
                    <div className="grid gap-2">
                      {Object.entries(products[currentProductIndex].description).map(([key, value]) => (
                        <div key={key} className="bg-gray-100 p-2 rounded">
                          <span className="font-medium">{key}:</span> {value}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
  
        {category?.description && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Separator className="my-8" />
            <h2 className="text-2xl font-semibold mb-6">Category Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {typeof category.description === 'object' && category.description !== null ? 
                Object.entries(category.description as Prisma.JsonObject).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg p-4 shadow-sm"
                  >
                    <h3 className="text-sm font-medium text-gray-500">{key}</h3>
                    <p className="mt-1 text-lg">{String(value)}</p>
                  </motion.div>
                ))
              : <p>No description available</p>}
            </div>
          </motion.div>
        )}
      </motion.div>
    )
}


