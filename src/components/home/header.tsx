"use client"
import Link from "next/link"
import { ReactElement, ReactNode, SVGProps } from 'react';

export default function Header(): ReactNode{
    return (<header className="px-4 lg:px-6 h-14 flex items-center bg-gray-100 shadow-md text-slate-800">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 bg-transparent" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
    </header>)
}

