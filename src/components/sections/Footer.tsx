'use client';
import React from 'react';
import { Hexagon, Github, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Columna 1: Logo y Redes */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Hexagon className="w-6 h-6 text-yellow-500" />
              <span className="font-bold text-xl">Beehive</span>
            </div>
            <p className="text-gray-400">Collaborative workspace for modern teams.</p>
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500"><Github /></a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500"><Twitter /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500"><Linkedin /></a>
            </div>
          </div>
          
          {/* Columna 2: Links de Producto */}
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Updates</a></li>
            </ul>
          </div>

          {/* Columna 3: Links de Compañía */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Columna 4: Legal */}
           <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-12 border-t border-gray-800 pt-8">
          <p>&copy; {new Date().getFullYear()} BeeHive. A portfolio project.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;