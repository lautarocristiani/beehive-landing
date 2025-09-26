'use client';
import { Handshake, KanbanSquare, Lightbulb } from 'lucide-react'; // KanbanSquare corregido
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Handshake,
    title: 'Collaborative Honeycombs',
    description: 'Create dedicated workspaces, or "honeycombs," for every project. Keep all conversations and files organized in one place.',
  },
  {
    icon: KanbanSquare,
    title: 'Pollen Boards',
    description: 'Manage tasks with intuitive Kanban boards. Visualize your team’s workflow and never miss a deadline again.',
  },
  {
    icon: Lightbulb,
    title: 'The Hive Mind',
    description: 'Build a centralized knowledge base. Document processes and share vital information to keep the whole team aligned.',
  },
];

const Features = () => {
  return (
    <motion.section 
      id="features" 
      className="py-24 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">A better way to work together</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Beehive centralizes your communication and tools in one place.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-8 border border-gray-200 rounded-lg">
              <feature.icon className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;