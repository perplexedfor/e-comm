// src/components/Header.tsx

'use client';

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import { Button } from "@/components/ui/button";
import { Menu, ChevronRight, Phone, Mail, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

const productCategories = [
  { name: "MCB DB BOX", href: "/products/MCB_DB_BOX" },
  { name: "AC BOX", href: "/products/AC_BOX" },
  { name: "MCB", href: "/products/MCB" },
  { name: "GI MODULAR BOX", href: "/products/GI_MODULAR_BOX" },
  { name: "MAIN SWITCH", href: "/products/MAIN_SWITCH_CHANGEOVER" },
  { name: "BUS BAR", href: "/products/BUS_BAR" },
];

export default function Header({ currentCategory }: { currentCategory?: string }) {
  const pathname = usePathname();
  const formattedCategoryName = currentCategory?.replace(/_/g, " ") || "";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Contact Bar */}
      <div className="bg-slate-800 text-slate-300 text-xs">
        <div className="container mx-auto px-4 h-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+919810339372" className="flex items-center hover:text-white">
              <Phone className="h-3 w-3 mr-1.5" />
              <span>+91 9810339372</span>
            </a>
            <a href="mailto:eletrax2024@gmail.com" className="hidden sm:flex items-center hover:text-white">
              <Mail className="h-3 w-3 mr-1.5" />
              <span>eletrax2024@gmail.com</span>
            </a>
          </div>
          <span className="hidden md:block font-semibold">Wholesale Inquiries Welcome</span>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-3xl font-bold">
            Eletra<span className="text-sky-500">X</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-2">
            <Button variant={pathname === '/' ? 'secondary' : 'ghost'} asChild>
              <Link href="/">Home</Link>
            </Button>
            
            {/* === SPLIT BUTTON START === */}
            <div className="flex items-center">
              <Button 
                variant={pathname.startsWith('/products') || pathname.endsWith('#products') ? 'secondary' : 'ghost'} 
                className="rounded-r-none" 
                asChild
              >
                <Link href="/#products">Products</Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant={pathname.startsWith('/products') ? 'secondary' : 'ghost'} 
                    size="icon" 
                    className="rounded-l-none border-l-0 w-8"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {productCategories.map((category) => (
                    <DropdownMenuItem key={category.name} asChild>
                      <Link href={category.href}>{category.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {/* === SPLIT BUTTON END === */}

            <Button variant="ghost" asChild><Link href="/#about">About Us</Link></Button>
            <Button variant={pathname.startsWith('/blog') ? 'secondary' : 'ghost'} asChild>
              <Link href="/blog">Blog</Link>
            </Button>
            <Button variant="ghost" asChild><Link href="/#contact">Contact</Link></Button>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon"><Menu /></Button>
              </DropdownMenuTrigger>
              {/* Add mobile nav links here */}
            </DropdownMenu>
          </div>
        </div>
      </div>
      
      {/* Conditional Breadcrumb Sub-header */}
      {currentCategory && (
        <div className="border-t bg-slate-50">
          <div className="container mx-auto px-4">
            <nav className="flex items-center text-sm font-medium text-slate-600 h-12">
              <Link href="/" className="hover:text-sky-600">Home</Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <Link href="/#products" className="hover:text-sky-600">Products</Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <span className="font-semibold text-slate-800">{formattedCategoryName}</span>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}