'use client'
import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import { valueAtom } from "@/atoms/product";
// import { createClient } from '@supabase/supabase-js'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { JsonValue } from "@prisma/client/runtime/library";
import { Mainproducts } from "@/components/home/mainProducts";
// export const getServerSideProps = async () => {
//   const category = await prisma.category.findMany()
//   return {  props: category }
// }
type Category = {
  id: number;
  name: string;
  description: JsonValue;
}

function Product({ categories }: { categories: Category[] | undefined}) {
  const baseUrl = "https://uxzikocsoffozrqooxqy.supabase.co/storage/v1/object/public/categories/";
  const setValue = useSetRecoilState(valueAtom);
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">  
        {categories ? categories.filter(category => category.name != "MCB_DB_BOX" && category.name != "MCB").map((category,index) => (
        <Link
        href={`/products/${category.name}`}
        key={category.id}
        className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
      >
        <Card className="h-full" onClick={()=>{
          setValue(0);
        }}>
          <CardContent className="p-4">
            <Image
              alt={category.name}
              className="aspect-square object-cover rounded-lg"
              height={300}
              src={`${baseUrl}${category.name}.png`}
              width={300}
            />
          </CardContent>
          <CardFooter className="text-center font-medium">
            {category.name.replace(/_/g, " ")}
          </CardFooter>
        </Card>
      </Link>

  )): <div>Loading...</div>}
  </div>
    
  );
}

export default function Products({categories}:{ categories:Category[]|undefined}):ReactNode {

  return (
    <div className="container grid items-center gap-6 sm:px-4 md:px-6">
            <div className="space-y-2 flex-row justify-center max-w-[400px] md:max-w-[800px] lg:max-w-[1100px] pt-10">
              <Mainproducts name="MCB"/>
              <Mainproducts name="MCB_DB_BOX"/>
              <Product categories={categories}/>
            </div>
      </div>

  )
}