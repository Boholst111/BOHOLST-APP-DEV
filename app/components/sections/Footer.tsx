'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { socialLinks, personalInfo } from '@/lib/data';

const iconMap = {
  Github: Github,
  Linkedin: Linkedin,
  Mail: Mail,
  Twitter: Twitter,
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-700/50 bg-slate-950/50 backdrop-blur-sm">
      <div className="section-container">
        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {socialLinks.map((link, i) => {
            const IconComponent = iconMap[link.icon as keyof typeof iconMap];
            return (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect-dark rounded-lg hover:border-orange-500/50 text-slate-300 hover:text-orange-400 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={link.name}
              >
                <IconComponent size={20} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent my-8" />

        {/* Copyright */}
        <motion.div
          className="text-center text-slate-400 text-sm space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Built with{' '}
            <span className="text-orange-400 font-semibold">Next.js</span>,{' '}
            <span className="text-orange-400 font-semibold">TypeScript</span>,{' '}
            <span className="text-orange-400 font-semibold">Tailwind CSS</span>, and{' '}
            <span className="text-orange-400 font-semibold">Framer Motion</span>
          </p>
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
