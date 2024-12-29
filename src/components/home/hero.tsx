'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative bg-[url('/background1.jpg')] bg-cover bg-center py-32">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative container mx-auto px-4 text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Secure Your Home with EletraX</h1>
        <p className="text-xl mb-8">Innovative electrical solutions for modern living</p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="#products">Explore Products</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}