
import { ReactNode } from "react";
import Link from "next/link";
// import { createClient } from '@supabase/supabase-js'


export interface Category {
  id: number;
  name: string;
  description: JSON;
}
// export const getServerSideProps = async () => {
//   const category = await prisma.category.findMany()

//   return {  props: category }
// }

function Product({ categories }: { categories: Category[]}) {
const baseUrl = "https://uxzikocsoffozrqooxqy.supabase.co/storage/v1/object/public/categories/";
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
        <Link href={`/products/${category.name}`}>
        <div className="flex flex-col items-start gap-1">
        <div className="border">
      <img
        alt="Image"
        className="aspect-square rounded-lg "
        height="577"
        src={baseUrl+category.name+".png"}
       width="433"
      />
      </div>
    <div className="space-y-1">
      {/* <h3 className="font-bold">{category.id}</h3> */}
      <p className="text-sm text-gray-500 dark:text-gray-400">
          {category.name}
      </p>
    </div>
  </div>
        </Link>

  ))}
  </div>
    
  );
}

export default function Products({categories}:{ categories:Category[]}):ReactNode {

  return (

    <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Discover Our Products</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                From smartphones to smart home devices, we've got everything you need to make your life more connected
                and more convenient.
              </p>
            </div>
            <Product categories={categories}/>
      </div>

  )
}