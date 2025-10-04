import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const socials = [
  {
    name: 'GitHub',
    icon: Github,
    link: 'https://github.com/Tanmayi1212',
    color: 'hover:text-foreground'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/tanmayi-nadipalli/',
    color: 'hover:text-blue-600'
  },
  {
    name: 'LeetCode',
    icon: Code2,
    link: 'https://leetcode.com/u/Tanmayi_12/',
    color: 'hover:text-orange-500'
  },
  {
    name: 'Email',
    icon: Mail,
    link: 'mailto:tanmayinadipalli@gmail.com',
    color: 'hover:text-accent'
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            animate={isInView ? { scale: [1, 1.02, 1] } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Let's Create Something
            <br />
            <span className="text-accent">Amazing Together</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xl text-muted-foreground mb-12 leading-relaxed"
          >
            I'm always excited to collaborate on innovative projects.
            <br />
            Feel free to reach out!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center gap-6 mb-12"
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`w-16 h-16 rounded-full bg-card shadow-soft flex items-center justify-center transition-colors ${social.color}`}
            >
              <social.icon className="w-7 h-7" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="pt-12 border-t border-border"
        >
          <p className="text-muted-foreground">
            © 2025 Tanmayi Nadipalli. Built with React & Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
