// src/components/home/hero.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HardHat, Zap } from "lucide-react";
import { motion } from "framer-motion"; // We'll use this for a subtle animation

const Hero = () => {
  return (
    <section className="w-full bg-slate-900 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-16 md:py-24 lg:py-32">
        
        {/* Left Side: Text Content */}
        <motion.div 
          className="flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center rounded-full bg-slate-700 px-3 py-1 text-sm text-sky-300 self-start">
            <HardHat className="w-4 h-4 mr-2" />
            Serving Professionals Since 2004
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Uncompromising Quality in Every Circuit
          </h1>
          <p className="max-w-xl text-lg text-slate-300">
            Eletrax is a leading manufacturer of certified MCBs, Distribution Boards, and electrical solutions built for reliability and safety. We are your trusted partner for wholesale electrical components.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="#products"
              className="inline-flex items-center justify-center rounded-md bg-sky-500 px-8 py-3 text-base font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-105 hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              Explore Product Range
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-slate-600 px-8 py-3 text-base font-semibold text-slate-200 shadow-sm transition-colors duration-200 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request a Wholesale Quote
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div 
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Replace this with a high-quality image of your products */}
          <Image
            src="/background1.jpg" // IMPORTANT: Change this path
            alt="Eletrax Electrical Products"
            width={500}
            height={500}
            className="rounded-lg shadow-2xl object-cover"
            priority // Makes the image load faster
          />
          <div className="absolute -top-4 -right-4 flex h-24 w-24 items-center justify-center rounded-full bg-sky-500/20 backdrop-blur-sm">
            <Zap className="h-12 w-12 text-sky-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;