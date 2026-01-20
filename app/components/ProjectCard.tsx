'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  tags,
  demoUrl,
  githubUrl,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <div className="glass-effect-dark h-full rounded-xl p-6 md:p-8 flex flex-col hover:border-slate-600/80 transition-colors duration-300">
        {/* Card Header */}
        <div className="mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4 group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
            {id.toString().padStart(2, '0')}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-2 group-hover:text-orange-400 transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm md:text-base mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="tag text-xs md:text-sm font-medium bg-slate-800/40 border border-slate-700/60 text-slate-300 px-3 py-1 rounded-full hover:bg-slate-700/60 hover:border-slate-600/80 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-6 border-t border-slate-700/30">
          <motion.a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-primary flex items-center justify-center gap-2 text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={18} />
            <span>Demo</span>
          </motion.a>
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-secondary flex items-center justify-center gap-2 text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            <span>Code</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
