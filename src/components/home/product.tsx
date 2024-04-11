export function Product({ categories }: { categories: Category[]}) {
  
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
    <div className="flex flex-col items-start gap-1">
    <img
      alt="Image"
      className="aspect-square object-cover rounded-lg overflow-hidden"
      height="200"
      src="./"
      width="200"
    />
    <div className="space-y-1">
      <h3 className="font-bold">{category.id}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
          {category.name}
      </p>
    </div>
  </div>
  ))}
  </div>
    
  );
}

export interface ProductProps {
    // imgURL : string;
    // title : string;
    // content : string;
    id: number;
    name: string;
}
export interface Category {
  id: number;
  name: string;
}