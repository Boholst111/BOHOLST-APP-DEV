'use client';

import { motion } from 'framer-motion';
import ExperienceItem from '@/components/ExperienceItem';
import SectionHeading from '@/components/SectionHeading';
import { experienceData } from '@/lib/data';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section-container relative">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <SectionHeading
        title="Professional Experience"
        subtitle="Journey through my career, highlighting the projects I've led and the impact I've made."
        centered
      />

      {/* Timeline */}
      <motion.div className="relative mt-12 md:mt-16">
        {/* Center Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/50 via-orange-500/30 to-transparent transform -translate-x-0.5" />

        {/* Experience Items */}
        <div className="space-y-12 md:space-y-16">
          {experienceData.map((experience, index) => (
            <ExperienceItem
              key={experience.id}
              {...experience}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
