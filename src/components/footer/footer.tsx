// src/components/footer/footer.tsx

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

// You can manage your main product categories here for the footer links
const productCategories = [
  { name: "MCB DB BOX", href: "/products/MCB_DB_BOX" },
  { name: "AC BOX", href: "/products/AC_BOX" },
  { name: "MCB", href: "/products/MCB" },
  { name: "GI MODULAR BOX", href: "/products/GI_MODULAR_BOX" },
  { name: "MAIN SWITCH", href: "/products/MAIN_SWITCH_CHANGEOVER" },
  { name: "BUS BAR", href: "/products/BUS_BAR" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Brand and Socials */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="text-3xl font-bold text-white">
              Eletra<span className="text-sky-500">X</span>
            </Link>
            <p className="mt-4 max-w-xs text-slate-400">
              Manufacturing high-quality, certified electrical components for professionals since 2004.
            </p>
            <div className="mt-6 flex space-x-4">
              {/* Add your actual social media links here */}
              <Link href="#" className="hover:text-sky-500 transition-colors"><Facebook /></Link>
              <Link href="#" className="hover:text-sky-500 transition-colors"><Twitter /></Link>
              <Link href="#" className="hover:text-sky-500 transition-colors"><Instagram /></Link>
              <Link href="#" className="hover:text-sky-500 transition-colors"><Linkedin /></Link>
            </div>
          </div>

          {/* Column 2: Product Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <Link href={category.href} className="hover:text-sky-500 transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/#about" className="hover:text-sky-500 transition-colors">About Us</Link></li>
              <li><Link href="/#products" className="hover:text-sky-500 transition-colors">All Products</Link></li>
              <li><Link href="/#review" className="hover:text-sky-500 transition-colors">Customer Reviews</Link></li>
              <li><Link href="/#contact" className="hover:text-sky-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-sky-500" />
                <span>Plot no-12, Khasra no-10/2, E-block Milan garden, New Mandoli Industrial Area, Delhi-110093</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-sky-500" />
                <a href="tel:+919810339372" className="hover:text-sky-500 transition-colors">+91 9810339372 , +91 8588039372</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-sky-500" />
                <a href="mailto:eletrax2024@gmail.com" className="hover:text-sky-500 transition-colors">eletrax2024@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 sm:flex sm:justify-between">
          <p>&copy; {new Date().getFullYear()} EletraX Industries. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">Engineered & Manufactured in India</p>
        </div>
      </div>
    </footer>
  );
}