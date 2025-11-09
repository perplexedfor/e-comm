// src/components/products/ProductSidebar.tsx

'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

type Product = {
  id: number;
  type: string;
  size: number;
  description: any;
};

export type Filters = {
  type: string[];
};

type ProductSidebarProps = {
  products: Product[];
  filters: Filters;
  setFilters: (filters: Filters) => void;
};

export default function ProductSidebar({ products, filters, setFilters }: ProductSidebarProps) {
  const uniqueTypes = [...new Set(products.map(p => p.type))];

  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    const currentFilters = filters[filterType] as string[];
    const newFilters = currentFilters.includes(value)
      ? currentFilters.filter(item => item !== value)
      // @ts-ignore
      : [...currentFilters, value];

    setFilters({ ...filters, [filterType]: newFilters });
  };

  return (
    <aside className="w-full lg:w-64 xl:w-72">
      <h2 className="text-xl font-bold text-slate-800 mb-4">Filters</h2>
      <Accordion type="multiple" defaultValue={['type']} className="w-full">
        <AccordionItem value="type">
          <AccordionTrigger className="text-base font-semibold">Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {uniqueTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={`type-${type}`}
                    checked={filters.type.includes(type)}
                    onCheckedChange={() => handleFilterChange('type', type)}
                  />
                  <Label htmlFor={`type-${type}`} className="font-normal cursor-pointer">
                    {type.replace(/_/g, " ")}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}