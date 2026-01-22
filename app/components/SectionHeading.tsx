'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  children,
  centered = true,
}) => {
  return (
    <motion.div
      className={`${centered ? 'text-center' : ''} mb-12 md:mb-16`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
};

export default SectionHeading;
