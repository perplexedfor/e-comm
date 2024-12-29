'use client'

import { motion } from 'framer-motion'

export default function VideoSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Discover Our Products are made</h2>
          <p className="text-gray-600 text-center mb-8">
            Watch this video to see how things are manufactured in our facility.
          </p>
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute inset-0 w-full h-full rounded-lg overflow-hidden shadow-2xl"
            >
              <iframe 
                src="https://www.youtube.com/embed/FSNybHy5vJ0?si=hZEhiYpkIkNlQn2N" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen 
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </motion.div>
          </div>
          <p className="text-sm text-gray-500 text-center mt-4">
            © 2024 EletraX Industries. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

