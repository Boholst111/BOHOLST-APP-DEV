'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Mail, Check, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// 1. Removed: import { ContactForm } from '@/components/ContactForm'; 
// (You cannot import a component into its own file)

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    if (formRef.current) {
      emailjs.sendForm(
        'service_1g9wzqm',   
        'template_8j5sjsr',  
        formRef.current, 
        'dUHftJ3oOMqhwVhIW' // TODO: Replace with your actual Public Key from EmailJS
      )
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      });
    }
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name" 
          value={formData.name}
          onChange={handleChange}
          className="input-field"
          placeholder="Your name"
          required
        />
      </motion.div>

      <motion.div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email" 
          value={formData.email}
          onChange={handleChange}
          className="input-field"
          placeholder="your.email@example.com"
          required
        />
      </motion.div>

      <motion.div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message" 
          value={formData.message}
          onChange={handleChange}
          className="input-field resize-none"
          placeholder="Write your message here..."
          rows={5}
          required
        />
      </motion.div>

      <motion.button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {status === 'idle' && (
          <>
            <Mail size={20} />
            <span>Send Message</span>
          </>
        )}
        {status === 'loading' && (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-5 h-5 border-2 border-orange-300 border-t-orange-600 rounded-full"
            />
            <span>Sending...</span>
          </>
        )}
        {status === 'success' && (
          <>
            <Check size={20} />
            <span>Message Sent!</span>
          </>
        )}
        {status === 'error' && (
          <>
            <AlertCircle size={20} />
            <span>Failed to send. Try again.</span>
          </>
        )}
      </motion.button>
    </motion.form>
  );
};

// 2. Added: Default export to fix the build error in ContactSection.tsx
export default ContactForm;