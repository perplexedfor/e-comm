// src/components/products/product-details.tsx

'use client'

import { useState } from "react";
import { JsonValue } from "@prisma/client/runtime/library";
import ProductSidebar, { Filters } from "./ProductSidebar";
import ProductGrid from "./ProductGrid";

// Define new grouped structure type
type GroupedProduct = {
  type: string;
  variations: {
    id: number;
    size: number;
    description: JsonValue;
  }[];
};

type ProductDetailsProps = {
  category?: { name: string; description: JsonValue; };
  products: any[]; // Flat list for filtering
  groupedProducts: GroupedProduct[]; // Grouped list for display
};

export default function ProductDetails({ category, products = [], groupedProducts = [] }: ProductDetailsProps) {
  const [filters, setFilters] = useState<Filters>({ type: [] });

  // Filter the grouped products based on the 'type' filter
  const filteredGroupedProducts = groupedProducts.filter(group => {
    return filters.type.length === 0 || filters.type.includes(group.type);
  });

  const categoryName = category?.name.replace(/_/g, " ") || "Products";
  const categoryDescription = "Discover our premium range of electrical solutions designed for modern homes and businesses.";

  return (
    <div className="py-8">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">{categoryName}</h1>
        <p className="mt-3 text-lg text-slate-600 max-w-3xl">{categoryDescription}</p>
      </div>

      <div className="mt-12 flex flex-col lg:flex-row gap-12">
        {/* The sidebar uses the original flat list to find all unique types */}
        <ProductSidebar products={products} filters={filters} setFilters={setFilters} />
        
        {/* The grid uses the filtered, grouped list to display products */}
        <ProductGrid groupedProducts={filteredGroupedProducts} />
      </div>
    </div>
  );
}