// src/components/products/ProductGrid.tsx

'use client';

import { JsonValue } from '@prisma/client/runtime/library';
import ImageCarousel from '@/components/ui/ImageCarousel';

type GroupedProduct = {
  type: string;
  variations: {
    id: number;
    size: number;
    description: JsonValue;
  }[];
};

type ProductGridProps = {
  groupedProducts: GroupedProduct[];
};

export default function ProductGrid({ groupedProducts }: ProductGridProps) {
  const baseUrl = "https://uxzikocsoffozrqooxqy.supabase.co/storage/v1/object/public/product-images/";

  if (groupedProducts.length === 0) {
    return (
      <div className="flex-1 text-center py-20">
        <p className="text-slate-600">No products match the selected filters.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {groupedProducts.map((group) => {
        const imageUrls = group.variations.map(
          (v) => `${baseUrl}${group.type.trim()}-${v.size}.png`
        );
        const firstVariation = group.variations[0];

        return (
          <div key={group.type} className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
            <div className="relative w-full h-56 bg-slate-100">
              <ImageCarousel slides={imageUrls} altText={group.type.replace(/_/g, " ")} />
            </div>
            <div className="p-4 border-t flex-grow flex flex-col">
              <h3 className="font-bold text-lg text-slate-800">{group.type.replace(/_/g, " ")}</h3>
              {/* === THE LINE DISPLAYING "Available Sizes" HAS BEEN REMOVED FROM HERE === */}
              
              <div className="mt-4 pt-4 border-t text-sm">
                <h4 className="font-semibold mb-2">Specifications:</h4>
                <ul className="space-y-1 text-slate-500">
                  {Object.entries(firstVariation.description || {}).map(([key, value]) => (
                    <li key={key}>
                      <span className="font-medium text-slate-600">{key}:</span> {String(value)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}