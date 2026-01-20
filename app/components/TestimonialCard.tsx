'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  index?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  quote,
  avatar,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.2 }}
      className="group"
    >
      <div className="glass-effect-dark rounded-xl p-8 h-full flex flex-col hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-orange-400 text-orange-400"
            />
          ))}
        </div>

        {/* Quote */}
        <p className="text-slate-300 text-sm md:text-base mb-6 flex-grow leading-relaxed italic">
          "{quote}"
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-slate-700/50 to-transparent mb-4" />

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="text-3xl">{avatar}</div>
          <div>
            <p className="font-semibold text-slate-100">{name}</p>
            <p className="text-sm text-slate-400">{role} at {company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
