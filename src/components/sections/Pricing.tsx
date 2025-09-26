'use client';
import React from 'react';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <motion.section 
      id="pricing" 
      className="py-24 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">A plan for every team</h2>
          <p className="text-lg text-gray-600 mt-4">Start for free and grow with us.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="border border-gray-200 rounded-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold">Basic</h3>
            <p className="text-4xl font-extrabold my-4">$0<span className="text-lg font-medium text-gray-600">/month</span></p>
            <p className="text-gray-600 mb-6">Ideal for small teams getting started.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-yellow-500" /> 3 Honeycombs</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-yellow-500" /> Pollen Boards</li>
            </ul>
            <Button variant="outline" className="mt-auto">Get Started</Button>
          </div>

          {/* Pro Plan (Highlighted) */}
          <div className="border-2 border-yellow-500 rounded-lg p-8 flex flex-col relative">
            <p className="absolute top-0 -translate-y-1/2 bg-yellow-500 text-black font-bold text-sm py-1 px-3 rounded-full">MOST POPULAR</p>
            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="text-4xl font-extrabold my-4">$12<span className="text-lg font-medium text-gray-600">/user/month</span></p>
            <p className="text-gray-600 mb-6">For growing teams that need more power and collaboration.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-yellow-500" /> Unlimited Honeycombs</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-yellow-500" /> The Hive Mind</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-yellow-500" /> Priority Support</li>
            </ul>
            <Button className="mt-auto">Choose Pro</Button>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-gray-200 rounded-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <p className="text-4xl font-extrabold my-4">Contact Us</p>
            <p className="text-gray-600 mb-6">Custom solutions for large organizations.</p>
             <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-yellow-500" /> Everything in Pro</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-yellow-500" /> Advanced Analytics</li>
            </ul>
            <Button variant="outline" className="mt-auto">Contact Sales</Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;