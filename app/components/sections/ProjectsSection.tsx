'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import { projectsData } from '@/lib/data';
import { animationVariants } from '@/lib/animations';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-container relative">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <SectionHeading
        title="Featured Projects"
        subtitle="Explore a selection of my recent work showcasing my expertise in full-stack development and modern web technologies."
      />

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
