'use client'
import { getproductDetails } from "@/app/lib/action";
import { useState,useEffect, useRef } from "react";
import { Prisma } from "@prisma/client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { motion } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { valueAtom } from "@/atoms/product";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image  from "next/image";
import Link from "next/link";

export type product = {
    id: number;
    type: string;
    size: number;
    description: Prisma.JsonValue;
}   

export const Mainproducts = ({name : name}:{name:string}) => {
    const [products, setProducts] = useState<product[] | undefined>(undefined);

    useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getproductDetails(name);
        setProducts(products); // Update the state with fetched products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [name]);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const setValue = useSetRecoilState(valueAtom);
    const baseUrl = "https://uxzikocsoffozrqooxqy.supabase.co/storage/v1/object/public/product-images/";

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
          const scrollAmount = 300
          const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
          scrollContainerRef.current.scrollTo({
            left: newScrollPosition,
            behavior: 'smooth'
          })
        }
    }

    const clean = name.replace(/_/g,' ');
    return (
        <div className="relative">
          <div>
            <h2 className="text-2xl font-bold">{clean}</h2>
          </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white shadow-lg"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white shadow-lg"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 py-4 px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products?.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-none w-[200px]"
            >
              <Link href={`/products/${name}`}  className="cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none" key={index} >
              <Card className="h-full" onClick={()=>{
                setValue(index);
              }}>
                <CardContent className="p-4">
                  <Image
                    src = {`${baseUrl}${product.type}-${1}.png`} 
                    alt = {product.id.toString()}
                    width={150}
                    height={150}
                    className="w-full h-[150px] object-contain"
                  />
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-2">
                  {/* <h3 className="font-medium text-sm">{product.type}</h3> */}
                  <p className="text-sm text-blue-600 font-semibold">{product.type}</p>
                </CardFooter>
              </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    )
    // return <Images products={products} name={name}/>
}