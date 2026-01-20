'use client';

import { motion } from 'framer-motion';
import { animationVariants } from '@/lib/animations';

interface SkillBadgeProps {
  skill: string;
  index?: number;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 5) * 0.05 }}
      whileHover={{ scale: 1.1, y: -2 }}
      className="group"
    >
      <div className="glass-effect-dark px-6 py-3 rounded-lg text-center cursor-pointer transition-all duration-300 group-hover:border-orange-500/50 group-hover:shadow-lg group-hover:shadow-orange-500/20">
        <p className="text-slate-200 font-semibold text-sm md:text-base group-hover:text-orange-400 transition-colors duration-300">
          {skill}
        </p>
      </div>
    </motion.div>
  );
};

export default SkillBadge;
