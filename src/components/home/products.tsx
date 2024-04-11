
import { ReactNode } from "react";
import Link from "next/link";
export interface Category {
  id: number;
  name: string;
}
// export const getServerSideProps = async () => {
//   const category = await prisma.category.findMany()

//   return {  props: category }
// }

function Product({ categories }: { categories: Category[]}) {
  
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (

        
        <Link href={`/products/${category.name}`}>
        <div className="flex flex-col items-start gap-1">
    <img
      alt="Image"
      className="aspect-square object-cover rounded-lg overflow-hidden"
      height="500"
      src="/cherry.jpg"
      width="500"
    />
    <div className="space-y-1">
      <h3 className="font-bold">{category.id}</h3>
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
  console.log(categories);
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