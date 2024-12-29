
'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function About() {
  const ref = useRef(null);

  // Adjust the offset to ensure the section scroll effect is smooth and bottom content stays visible
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"], // Adjust offset to align better
  });

  // Modify the transform range to avoid complete disappearance of content
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-r from-blue-100 to-indigo-100 overflow-hidden"
    >
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          style={{ y }}
        >
          <h2 className="text-3xl font-bold mb-4">About Eletrax Industries</h2>
          <p className="mb-6 text-gray-700">
            Established in 2004, Eletrax Industries has been at the forefront of manufacturing high-quality electrical
            components. Our wide range includes MCB Boxes, AC Boxes, Modular Boxes, Junction Boxes, and more. With a
            commitment to quality and innovation, we've built a reputation for reliability and excellence in the
            industry.
          </p>
          <p className="mb-6 text-gray-700">
            Under the leadership of Mr. Lalit Goyal, our experienced team leverages cutting-edge technology and
            stringent quality control measures to deliver products that meet and exceed industry standards. We pride
            ourselves on our ethical business practices and customer-centric approach.
          </p>
          <Button>Learn More</Button>
        </motion.div>
      </div>
    </section>
  );
}


