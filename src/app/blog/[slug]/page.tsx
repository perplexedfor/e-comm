// src/app/blog/[slug]/page.tsx

import Header from "@/components/Header";
import Footer from "@/components/footer/footer";
import prisma from "@/db";
import { Metadata } from "next";
// Import next/image is no longer needed here
// import Image from "next/image"; 
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";

async function getPost(slug: string) {
  const post = await prisma.post.findUnique({
    where: { slug },
  });
  return post;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: `${post.title} | Eletrax Blog`,
    description: post.content.substring(0, 150),
  };
}

export async function generateStaticParams() {
  const posts = await prisma.post.findMany({ select: { slug: true } });
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound(); 
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-sky-600 hover:underline mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to all articles
          </Link>

          <article>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              {post.title}
            </h1>
            <p className="text-slate-500 mb-6">
              Published on {new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </p>

            {/* === THIS IS THE CHANGED PART === */}
            {post.imageUrl && (
              <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden mb-8 shadow-lg">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div
              className="prose prose-lg prose-slate max-w-none prose-a:text-sky-600 prose-headings:font-bold prose-headings:text-slate-800"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}