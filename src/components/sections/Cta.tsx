'use client';
import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

const Cta = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-24 bg-yellow-400"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-black">
          Join the hive and transform the way you work
        </h2>
        <p className="text-lg text-gray-800 mt-4 max-w-2xl mx-auto">
          Start for free today. No credit card required.
        </p>
        <Button size="lg" variant="outline" className="mt-8 bg-black text-white hover:bg-gray-800">
          Sign Up Now
        </Button>
      </div>
    </motion.section>
  );
};

export default Cta;