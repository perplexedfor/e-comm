// src/components/home/about.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-sky-500" />,
      title: "Commitment to Quality",
      description: "Leveraging cutting-edge technology and stringent quality control to exceed industry standards.",
    },
    {
      icon: <Users className="h-6 w-6 text-sky-500" />,
      title: "Customer-Centric Approach",
      description: "Building lasting partnerships through ethical business practices and dedicated client support.",
    },
  ];

  return (
    <section id="about" className="w-full bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            className="relative w-full h-96 lg:h-full rounded-lg shadow-lg overflow-hidden bg-gray-100" 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src="/overall.png" 
              alt="Eletrax Industries Facility"
              fill
              className="object-contain" 
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-4">
              <span className="inline-block bg-sky-100 text-sky-700 text-sm font-semibold px-3 py-1 rounded-full">
                Our Story
              </span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Two Decades of Excellence
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Established in 2004 under the leadership of Mr. Lalit Goyal, Eletrax Industries has grown into a trusted name for high-quality electrical components.
            </p>

            <ul className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-sky-100 rounded-full">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-slate-800">{feature.title}</h3>
                    <p className="mt-1 text-base text-slate-600">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="mt-10">
                <Link href="#contact" className="inline-flex items-center justify-center rounded-md bg-slate-800 px-8 py-3 text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-slate-900">
                    Contact Our Team
                </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;