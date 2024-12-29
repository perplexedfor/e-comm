'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

type Category = {
  id: number
  name: string
}

export default function Header({ categories }: { categories: Category[] }) {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white border-b shadow-sm backdrop-blur-sm bg-opacity-90"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-indigo-600">Eletra</span>
              <span className="text-orange-500">X</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-4">
              <Link href="/" className="text-sm font-medium hover:text-indigo-600 transition-colors">
                Home
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm font-medium">
                    Products
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuSeparator />
                  {categories.map((category) => (
                    <DropdownMenuItem key={category.id}>
                      <Link 
                        href={`/${category.name}`}
                        className="w-full hover:text-indigo-600 transition-colors"
                      >
                        {category.name.replace(/-/g, " ")}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Link href="/" className="w-full">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {categories.map((category) => (
                  <DropdownMenuItem key={category.id}>
                    <Link 
                      href={`/${category.name}`}
                      className="w-full"
                    >
                      {category.name.replace(/-/g, " ")}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

