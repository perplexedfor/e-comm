// src/app/blog/page.tsx

import Header from "@/components/Header";
import Footer from "@/components/footer/footer";
import prisma from "@/db";
import { Metadata } from "next";
// Import next/image is no longer needed here, but we'll leave it for your default
import Image from "next/image"; 
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Resources | Eletrax",
  description: "Expert guides, articles, and resources on electrical safety, product selection, and industry news from Eletrax.",
};

async function getPosts() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return posts;
}

export default async function BlogIndex() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Eletrax Blog & Resources
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              Expert insights and guides on electrical products and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.id}
                className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative w-full h-48">
                  {/* === THIS IS THE CHANGED PART === */}
                  <img
                    src={post.imageUrl || '/images/categories/default.jpg'}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-slate-500">
                    {new Date(post.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric', month: 'long', day: 'numeric'
                    })}
                   </p>
                  <h2 className="mt-2 text-xl font-bold text-slate-900">{post.title}</h2>
                  <div className="mt-4 inline-flex items-center text-sky-600 font-semibold">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}