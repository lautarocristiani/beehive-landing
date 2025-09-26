'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Ana Pérez',
    role: 'CEO at TechFlow',
    quote: 'Beehive transformed our internal communication. We are now more agile and collaboration flows effortlessly. It\'s indispensable!',
    avatar: '/assets/avatar1.jpg',
  },
  {
    name: 'Carlos Gómez',
    role: 'Lead Designer at InnovateCo',
    quote: 'The organization into honeycombs and cells is simply brilliant. We finally have a place for every conversation without the chaos of other platforms.',
    avatar: '/assets/avatar2.jpg',
  },
];

const Testimonials = () => {
  return (
    <motion.section 
      id="testimonials" 
      className="py-24 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">Loved by teams all over the world</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="p-8 bg-white rounded-lg shadow-md">
              <blockquote className="text-lg text-gray-700 mb-6">
                <p>&ldquo;{testimonial.quote}&ldquo;</p>
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;