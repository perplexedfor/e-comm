import React from "react";
import { ReactNode } from "react";
import Link from "next/link";
export function Product({ products }: { products: any }):ReactNode {
    console.log(products);
    return (

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div className="relative group">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Cover image"
            className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
            height={200}
            src="/placeholder.svg"
            width={200}
          />
          <div className="flex-1 py-4">
            <h3 className="font-semibold tracking-tight">{product.name? product.name : product.module? product.module : product.amp}</h3>
            <small className="text-sm leading-none text-gray-500 dark:text-gray-400">{product?.id}</small>
            <h4 className="font-semibold">$29.99</h4>
          </div>
        </div>
        ))}
        </div>
    )
  }

export type ProductProps = {
    id: number;
    name: string;
  } | {
    id: number;
    module: string;
  } | 
  {
    id: number;
    amp: string;
  } | {
    id : number;
    type: string;
    description: string;
    range: string;
  } | {
    id: number;
    type: string;
    description: string;
    range: string;
    module: string;
  };