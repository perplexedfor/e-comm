// src/components/home/products.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { JsonValue } from "@prisma/client/runtime/library";

// Type definition based on your Prisma schema
type Category = {
  id: number;
  name: string;
  description?: JsonValue;
};

type ProductsProps = {
  categories: Category[] | undefined;
};

const Products = ({ categories }: ProductsProps) => {
  const baseUrl = "https://uxzikocsoffozrqooxqy.supabase.co/storage/v1/object/public/categories/";

  if (!categories) {
    return (
      <div className="text-center py-24">
        <p>Loading products...</p>
      </div>
    );
  }

  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Our Product Categories
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          Engineered for safety and reliability. Explore our comprehensive range of electrical solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={`/products/${category.name}`} // This links to your product pages
              className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full"
            >
              {/* === THE CHANGE IS ON THE NEXT LINE === */}
              <div className="relative w-full h-[405px]">
                <Image
                  src={`${baseUrl}${category.name}.png`} // Using your Supabase URL structure
                  alt={category.name.replace(/_/g, " ")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-slate-900">{category.name.replace(/_/g, " ")}</h3>
                <div className="mt-4 inline-flex items-center text-sky-600 font-semibold">
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;