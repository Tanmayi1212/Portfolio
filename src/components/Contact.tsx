import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, Code2, ArrowUpRight } from 'lucide-react';

const socials = [
  {
    name: 'GitHub',
    icon: Github,
    link: 'https://github.com/Tanmayi1212',
    handle: '@Tanmayi1212',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/tanmayi-nadipalli/',
    handle: 'tanmayi-nadipalli',
  },
  {
    name: 'LeetCode',
    icon: Code2,
    link: 'https://leetcode.com/u/Tanmayi_12/',
    handle: 'Tanmayi_12',
  },
  {
    name: 'Email',
    icon: Mail,
    link: 'mailto:tanmayinadipalli@gmail.com',
    handle: 'tanmayinadipalli@gmail.com',
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: '#442D1C' }}
      ref={ref}
    >
      {/* Background circles */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-10 pointer-events-none"
        style={{ background: '#84592B', filter: 'blur(80px)' }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Big CTA headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-eyebrow justify-center mb-6" style={{ color: '#9D9167' }}>
            <span className="w-8 h-px inline-block" style={{ background: '#9D9167' }} />
            Get In Touch
          </p>

          <h2
            className="text-[clamp(3rem,8vw,7rem)] font-black leading-none tracking-tighter mb-6"
            style={{ color: '#E8D1A7' }}
          >
            Let's Create<br />
            <span className="font-display italic" style={{ color: '#9D9167' }}>Something</span><br />
            Amazing
          </h2>

          <p
            className="text-lg max-w-lg mx-auto leading-relaxed mb-10"
            style={{ color: 'rgba(232,209,167,0.65)' }}
          >
            I'm always excited to collaborate on innovative projects.
            Open to internships, freelance work, and research collaborations.
          </p>

          <motion.a
            href="mailto:tanmayinadipalli@gmail.com"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-base font-bold tracking-wide transition-all"
            style={{ background: '#E8D1A7', color: '#442D1C' }}
          >
            Say Hello
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="h-px mb-12" style={{ background: 'rgba(232,209,167,0.15)' }} />

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl border transition-all group"
              style={{
                background: 'rgba(232,209,167,0.05)',
                borderColor: 'rgba(232,209,167,0.12)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(232,209,167,0.08)' }}
              >
                <s.icon size={22} style={{ color: '#9D9167' }} />
              </div>
              <div className="text-center">
                <div className="text-sm font-bold mb-0.5" style={{ color: '#E8D1A7' }}>{s.name}</div>
                <div className="text-xs truncate max-w-[120px]" style={{ color: 'rgba(232,209,167,0.45)' }}>
                  {s.handle}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(232,209,167,0.12)' }}
        >
          <p className="text-sm" style={{ color: 'rgba(232,209,167,0.4)' }}>
            © 2025 Tanmayi Nadipalli — Built with React & Framer Motion
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: '#9D9167' }}
          >
            Back to Top ↑
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
