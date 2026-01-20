'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from '@/components/TestimonialCard';
import SectionHeading from '@/components/SectionHeading';
import { testimonialsData } from '@/lib/data';

export const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonialsData.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="section-container relative">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <SectionHeading
        title="Testimonials"
        subtitle="What my colleagues and clients say about working with me."
      />

      {/* Testimonials Carousel */}
      <div className="max-w-4xl mx-auto">
        <div className="relative min-h-96">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <TestimonialCard
                {...testimonialsData[current]}
                index={current}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-12 gap-4">
          {/* Indicators */}
          <div className="flex gap-2 flex-1 justify-center">
            {testimonialsData.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-orange-500 w-8' : 'bg-slate-600 w-2'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prev}
            className="glass-effect-dark p-3 rounded-lg hover:border-orange-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, x: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            onClick={next}
            className="glass-effect-dark p-3 rounded-lg hover:border-orange-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
