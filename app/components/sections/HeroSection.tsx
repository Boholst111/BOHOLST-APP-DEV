'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Floating Background Elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float animation-delay-2" />
      </motion.div>

      {/* Content */}
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-8">
          {/* Profile Picture */}
          {personalInfo.profileImage && (
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
                
                {/* Image Container */}
                <div className="relative w-full h-full bg-slate-900 rounded-2xl overflow-hidden border-2 border-slate-800">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    width={320}
                    height={320}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 flex-1">
            {/* Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 glass-effect-dark rounded-full text-sm md:text-base font-medium text-orange-400 border border-orange-500/30">
                ✨ {personalInfo.availability}
              </span>
            </motion.div>

            {/* Main Heading with Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                <span className="block text-slate-100">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-orange-300 mb-6">
                {personalInfo.role}
              </p>
            </motion.div>

            {/* About Description */}
            <motion.p
              className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {personalInfo.longAbout}
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start items-center text-sm md:text-base text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span>📧 {personalInfo.email}</span>
              <span className="hidden md:inline">•</span>
              <span>📍 {personalInfo.location}</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start flex-wrap pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a
                href="#projects"
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={24} className="text-orange-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
