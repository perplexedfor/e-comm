
import { ReactNode } from "react";
import Link from "next/link";
// import { createClient } from '@supabase/supabase-js'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Category } from "./product";
// export const getServerSideProps = async () => {
//   const category = await prisma.category.findMany()

//   return {  props: category }
// }

function Product({ categories }: { categories: Category[] | undefined}) {
const baseUrl = "https://uxzikocsoffozrqooxqy.supabase.co/storage/v1/object/public/categories/";
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  
        {categories != undefined ? categories.map((category) => (
        <Link href={`/products/${category.name}`}  className="cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                 <Card className="bg-gray-300" key={category.id}>
                  <CardContent className="bg-slate-50">
                  <img
                  alt="Image"
                  className="aspect-square rounded-lg"
                  height="577"
                  src={baseUrl+category.name+".png"}
                  width="433"
                  />
                  </CardContent>
                  <CardFooter>
                   <p>{category.name}</p>
                  </CardFooter>
                </Card>
        </Link>

  )): <div>Loading...</div>}
  </div>
    
  );
}

export default function Products({categories}:{ categories:Category[]|undefined}):ReactNode {

  return (

    <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mx-[5%]">Discover Our Products</h2>
            </div>
            <div className="space-y-2 mx-[5%]">
              <Product categories={categories}/>
            </div>
      </div>

  )
}