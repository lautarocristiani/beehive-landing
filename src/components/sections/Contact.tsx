'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <motion.section 
      id="contact"
      className="py-24 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold">Interested? Let's talk.</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question about Beehive, pricing, or anything else, our team is ready to answer all your questions.
        </p>
        <a href="mailto:hello@beehive.app">
          <Button size="lg" className="mt-8">
            <Mail className="w-5 h-5 mr-2" />
            hello@beehive.app
          </Button>
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;