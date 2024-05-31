"use client"
import Link from "next/link"
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"
import { product } from "../mainProducts";
 
import { useSetRecoilState } from "recoil";
import { valueAtom } from "../../../atoms/product";
export const Images = ({products: products,name:name}:{products:product[]|undefined,name:string}) => {
    const setList = useSetRecoilState(valueAtom);
    const baseUrl = "https://uxzikocsoffozrqooxqy.supabase.co/storage/v1/object/public/product-images/";
    return (
        <div className="py-8">

        <div className="relative overflow-x-auto flex max-w-[400px] md:max-w-[760px] lg:max-w-[1120px] h-[280px]">
        {
            products != undefined ? products.map((product,index) => (
                <Link href={`/products/${name}`}  className="cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none" key={index}>
                    <Card className="bg-gray-300 w-[180px] max-h-[280px] scroll-pb-3.5 mx-2" key={product.id} >
                        <CardContent className="bg-slate-50">
                    <Image 
                src = {`${baseUrl}${product.type}-${1}.png`} 
                alt = {product.id.toString()} 
                width = {180} 
                height = {250}
                className="max-h-[180px]"
                onClick={() => setList(index)}
              />
                        </CardContent>
                        <CardFooter className="text-wrap text-sm">
                            <p>{product.type}</p>
                        </CardFooter>
                    </Card>
                </Link>
            )) : <div>Loading...</div>
        }
        </div>
        </div>
    )
}