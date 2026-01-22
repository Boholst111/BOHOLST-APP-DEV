'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { personalInfo } from '@/lib/data';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-container relative">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 right-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <SectionHeading
        title="Let's Work Together"
        subtitle={`I'm actively looking for new opportunities to build amazing web applications. Feel free to reach out and let's create something extraordinary together.`}
      />

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Info */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {[
          {
            icon: '📧',
            title: 'Email',
            content: personalInfo.email,
            link: `mailto:${personalInfo.email}`,
          },
          {
            icon: '📍',
            title: 'Location',
            content: personalInfo.location,
            link: '#',
          },
          {
            icon: '💬',
            title: 'Availability',
            content: personalInfo.availability,
            link: '#contact',
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            className="glass-effect-dark rounded-lg p-8 text-center hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
          >
            <p className="text-4xl mb-3">{item.icon}</p>
            <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-orange-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-slate-400 text-sm">{item.content}</p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default ContactSection;
