"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { JsonValue } from "@prisma/client/runtime/library"
interface DescriptionObject {
  [key: string]: any;
}
import { valueAtom } from "../../atoms/product"
import { useRecoilState } from "recoil"
export default function ProductImage(parameter: {parameter:{ id: number; type: string; size: number; description: JsonValue | null}[]} ) {
    const regex = /\s/g;
    let types: string[];
    types = [];
    if(parameter){
    types = parameter.parameter.map((product) => product.type.replace(regex, '')); 
    }

    let sizes: number[];
    sizes = parameter.parameter.map((product) => product.size);

    let descriptionObject:DescriptionObject[];
    descriptionObject = parameter.parameter.map((product) => {
      try {
        return product.description as Object;
      } catch (error) {
        console.error(`Failed to parse product.description: ${product.description}`);
        return {};
      }
    });
    for(let i = 0; i < descriptionObject.length; i++){
      if(descriptionObject[i] == null){
        descriptionObject[i] = {};
      }
      // else{
      //   descriptionObject[i] = JSON.parse(descriptionObject[i] as string);
      // }
    }
    console.log(descriptionObject);
    const baseUrl = "https://uxzikocsoffozrqooxqy.supabase.co/storage/v1/object/public/product-images/";
    const [current, setCurrent] = useRecoilState(valueAtom);
    return (
      <div>
      <div className="text-xl underline">
        {types[current].replace(/-/g, " ")}
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <Carousel className="max-w-sm md:max-w-md lg:max-w-lg border">
              <CarouselContent className="">
              {parameter.parameter[current].size == null ? null :
              Array.from({ length:sizes[current]}).map((_, i) => (
              <CarouselItem className="flex flex-col aspect-square items-center justify-center p-6" key={i}>
                  <Image 
                src = {`${baseUrl}${types[current]}-${i+1}.png`} 
                alt = {types[current]} 
                width = {350} 
                height = {400} 
              />
              <div className="text-xl font-semibold text-gray-700">{i+1+" "}of{" "+sizes[current]}</div>
              </CarouselItem>
              ))}
              </CarouselContent>
              <CarouselPrevious className="ml-12" />
              <CarouselNext className="mr-12" />
        </Carousel>
        <div className="overflow-y-scroll max-h-[250px] md:max-h-[500px]">
        {types.length !== 1 ? (
          types.map((type, index) => (
            <Card key={index}>
              <CardTitle className="text-base px-2">{type.replace(/_/g, " ")}</CardTitle>
              <CardContent>
              <Image
                key={type}
                src={`${baseUrl}${type}-1.png`}
                alt={type}
                width={200}
                height={200}
                onClick={() => setCurrent(index)}
              />
              </CardContent>
                
            </Card>
        ))
        ) : null}
        </div>
      </div>
      
      
              {
                    <div className="grid gap-4" id="specifications">
                    <h2 className="font-semibold text-2xl lg:text-3xl">Specifications</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                {Object.keys(descriptionObject[current]).map((key) => (
                  <div className="grid gap-1" key={key}>
                    <p className="text-sm font-medium">{key}</p>
                    <p>{descriptionObject[current][key]}</p>
                  </div>
                ))} </div>
          </div>
              }
      </div>
    )
}


  