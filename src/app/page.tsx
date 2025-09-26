'use client';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// ... (todas las importaciones de componentes se mantienen igual)
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Cta from "@/components/sections/Cta";
import Contact from "@/components/sections/Contact"; // <-- Importamos el nuevo componente
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState('');
  
  const options = { threshold: 0.3 }; // Aumentamos un poco el threshold para más precisión
  const { ref: featuresRef, inView: featuresInView } = useInView(options);
  const { ref: pricingRef, inView: pricingInView } = useInView(options);
  const { ref: contactRef, inView: contactInView } = useInView(options);

  // LÓGICA CORREGIDA: Le damos prioridad a las secciones de arriba hacia abajo
  useEffect(() => {
    if (featuresInView) {
      setActiveSection('features');
    } else if (pricingInView) {
      setActiveSection('pricing');
    } else if (contactInView) {
      setActiveSection('contact');
    } else {
      setActiveSection(''); 
    }
  }, [featuresInView, pricingInView, contactInView]);

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        
        <div ref={featuresRef}>
          <Features />
        </div>
        
        <Testimonials />

        <div ref={pricingRef}>
          <Pricing />
        </div>
        
        <Cta />

        {/* El 'ref' de contacto ahora va en la nueva sección de Contacto */}
        <div ref={contactRef}>
          <Contact />
        </div>
        
      </main>
      <Footer />
    </>
  );
}