'use client';

import { motion } from 'framer-motion';

interface CertificationBadgeProps {
  icon: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  index?: number;
}

export const CertificationBadge: React.FC<CertificationBadgeProps> = ({
  icon,
  title,
  issuer,
  date,
  credentialUrl,
  index = 0,
}) => {
  return (
    <motion.a
      href={credentialUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="group"
    >
      <div className="glass-effect-dark rounded-lg p-6 text-center hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 cursor-pointer h-full">
        <p className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </p>
        <h4 className="text-slate-100 font-semibold text-sm md:text-base mb-2 group-hover:text-orange-400 transition-colors">
          {title}
        </h4>
        <p className="text-slate-400 text-xs md:text-sm mb-3">{issuer}</p>
        <p className="text-orange-400 text-xs font-medium">{date}</p>
      </div>
    </motion.a>
  );
};

export default CertificationBadge;
