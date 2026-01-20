'use client';

import { motion } from 'framer-motion';
import CertificationBadge from '@/components/CertificationBadge';
import SectionHeading from '@/components/SectionHeading';
import { certificationsData } from '@/lib/data';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="section-container relative">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <SectionHeading
        title="Certifications & Achievements"
        subtitle="Professional credentials and industry certifications that validate my expertise."
      />

      {/* Certifications Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        {certificationsData.map((cert, index) => (
          <CertificationBadge key={cert.id} {...cert} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default CertificationsSection;
