'use client';

import { motion } from 'framer-motion';
import SkillBadge from '@/components/SkillBadge';
import SectionHeading from '@/components/SectionHeading';
import { skillsCategories, skillsData } from '@/lib/data';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-container relative">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <SectionHeading
        title="Skills & Technologies"
        subtitle="A comprehensive toolkit of technologies and frameworks I'm proficient in."
      />

      {/* Skills by Category */}
      <div className="mb-16 md:mb-24">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          {skillsCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass-effect-dark rounded-lg p-6 hover:border-orange-500/50 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-orange-400 mb-4">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full" />
                    <span className="text-slate-300 text-sm md:text-base">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* All Skills Grid */}
      <motion.div
        className="mb-16 md:mb-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-slate-100 mb-8 text-center">
          All Skills
        </h3>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          {skillsData.map((skill, index) => (
            <SkillBadge key={index} skill={skill} index={index} />
          ))}
        </motion.div>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {[
          { label: 'Projects Completed', value: '50+' },
          { label: 'Years Experience', value: '5+' },
          { label: 'Happy Clients', value: '30+' },
          { label: 'Technologies', value: '20+' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="glass-effect-dark rounded-lg p-6 text-center hover:border-orange-500/50 transition-colors duration-300"
            whileHover={{ y: -4 }}
          >
            <p className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
              {stat.value}
            </p>
            <p className="text-slate-400 text-sm md:text-base">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
