// src/components/home/TrustBar.tsx

"use client";

import { ShieldCheck, CalendarClock, Globe } from "lucide-react";
import { motion } from "framer-motion";

const trustFeatures = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-sky-400" />,
    title: "ISO 9001:2015 Certified",
    description: "Assuring the highest standards in quality and safety for every product.",
  },
  {
    icon: <CalendarClock className="h-8 w-8 text-sky-400" />,
    title: "Experience Since 2004",
    description: "Two decades of industry expertise and reliable service for professionals.",
  },
  {
    icon: <Globe className="h-8 w-8 text-sky-400" />,
    title: "Nationwide Wholesale Supply",
    description: "Your trusted partner for bulk electrical components across India.",
  },
];

const TrustBar = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section className="bg-slate-800 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-slate-700/50 rounded-lg"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              transition={{ delay: index * 0.2 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-100">{feature.title}</h3>
              <p className="mt-2 text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;