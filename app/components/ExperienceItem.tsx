'use client';

import { motion } from 'framer-motion';

interface ExperienceItemProps {
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
  index?: number;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  position,
  duration,
  description,
  achievements,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-orange-500 rounded-full transform md:-translate-x-2 border-4 border-slate-950 z-10" />

      {/* Timeline line */}
      {index !== 2 && (
        <div className="absolute left-2 md:left-1/2 top-6 w-0.5 h-32 bg-gradient-to-b from-orange-500/50 to-transparent transform md:-translate-x-0.5" />
      )}

      {/* Content */}
      <div className={`glass-effect-dark rounded-lg p-6 md:p-8 ${index % 2 === 0 ? 'md:mr-auto md:w-5/12' : 'md:ml-auto md:w-5/12'}`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
          <h3 className="text-xl md:text-2xl font-bold text-orange-400">{position}</h3>
          <span className="text-sm md:text-base text-slate-400 font-medium">{duration}</span>
        </div>

        <p className="text-slate-300 font-semibold mb-3">{company}</p>
        <p className="text-slate-400 text-sm md:text-base mb-4 leading-relaxed">
          {description}
        </p>

        {/* Achievements */}
        <ul className="space-y-2">
          {achievements.map((achievement, i) => (
            <li
              key={i}
              className="text-slate-400 text-sm md:text-base flex items-start gap-3"
            >
              <span className="text-orange-500 font-bold mt-1">▸</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
