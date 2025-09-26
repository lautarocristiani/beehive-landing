'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-36 pb-24 text-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Organize your creative hive
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Beehive is the collaborative workspace designed for your team to flow,
            innovate, and create without limits. Less chaos, more collaboration.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Start for free</Button>
            <Button size="lg" variant="outline">View Demo</Button>
          </div>
        </motion.div>
        
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="w-full rounded-xl shadow-2xl overflow-hidden h-[500px] md:h-[600px] bg-gray-100 flex items-center justify-center">
                <Image
                    src="/assets/beehive-app-mockup.png"
                    alt="Beehive App Mockup"
                    width={1200} // Ancho original de tu mockup
                    height={750} // Altura original de tu mockup
                    priority
                    className="w-full h-full object-contain" // object-contain asegura que la imagen se vea completa sin recortarse
                />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;