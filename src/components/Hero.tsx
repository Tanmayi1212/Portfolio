import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import profileImage from '@/assets/profile.png';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section data-nav-theme="dark" className="min-h-screen flex items-center justify-center relative px-6 bg-dark-section text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            // center on small screens, left-align on md+
            className="text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              // small top margin so subtitle sits a bit lower and fits neatly
              className="text-gray-300 mt-4 mb-4 text-sm tracking-widest uppercase"
            >
              CS Student & Developer
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
            >
              Tanmayi
              <br />
              <span className="text-accent">Nadipalli</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Passionate about Web Development & AI/ML
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              // center CTAs on mobile, align start on larger screens
              className="flex gap-4 justify-center md:justify-start"
            >
              {/* Get in Touch - motion anchor with subtle float + glow on dark */}
              <motion.a
                href="mailto:tanmayinadipalli@gmail.com"
                whileHover={{ scale: 1.06, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="px-8 py-3 rounded-full font-medium shadow-md transition-shadow will-change-transform animate-pulse-glow bg-white/10 hover:bg-white/20 border border-white/10 text-white"
              >
                Get in Touch
              </motion.a>

              {/* View Work - motion button with subtle outline on dark */}
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05, rotate: -1, y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 320 }}
                className="px-8 py-3 border-2 border-white/20 rounded-full font-medium hover:bg-white/10 transition-all text-white"
              >
                View Work
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full blur-3xl bg-accent/30 animate-float" />
              <img
                src={profileImage}
                alt="Tanmayi Nadipalli"
                // slightly smaller on mobile to keep layout balanced
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-glow"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        whileHover={{ y: -6 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow text-white"
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.button>
    </section>
  );
};

export default Hero;
