import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import profileImage from '@/assets/profile.png';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pb-12 pt-20 px-6 overflow-hidden"
      style={{ background: '#F5ECDA' }}
    >
      {/* Decorative background circle */}
      <div
        className="absolute top-16 right-0 w-[520px] h-[520px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #E8D1A7 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />



      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          {/* Left: Big text */}
          <div>

            {/* Main headline */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-black leading-none text-[clamp(3.5rem,10vw,8rem)] tracking-tighter"
                style={{ color: '#442D1C' }}
              >
                Tanmayi
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-black leading-none text-[clamp(3.5rem,10vw,8rem)] tracking-tighter font-display italic"
                style={{ color: '#84592B' }}
              >
                Nadipalli
              </motion.h1>
            </div>

            {/* Descriptor */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg md:text-xl leading-relaxed max-w-md mb-10"
              style={{ color: '#743014', opacity: 0.85 }}
            >
              Full-Stack Engineer & AI Enthusiast. Architecting scalable Next.js platforms and automated LLM evaluation frameworks.<br />
              CS @ CBIT Hyderabad · Technical Head, NSS.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="mailto:tanmayinadipalli@gmail.com"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold tracking-wide transition-all"
                style={{ background: '#442D1C', color: '#E8D1A7' }}
              >
                Get in Touch
                <ArrowUpRight size={16} />
              </motion.a>

              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold tracking-wide border-2 transition-all"
                style={{ borderColor: '#442D1C', color: '#442D1C', background: 'transparent' }}
              >
                View Work
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Profile image with decorative frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Background frame */}
              <div
                className="absolute inset-0 rounded-3xl translate-x-4 translate-y-4"
                style={{ background: '#84592B', opacity: 0.25, borderRadius: '2rem' }}
              />
              {/* Second frame */}
              <div
                className="absolute inset-0 rounded-3xl translate-x-2 translate-y-2 border-2"
                style={{ borderColor: '#9D9167', borderRadius: '2rem' }}
              />
              {/* Profile image */}
              <motion.img
                src={profileImage}
                alt="Tanmayi Nadipalli"
                className="relative rounded-3xl object-cover shadow-autumn"
                style={{
                  width: 'clamp(260px, 38vw, 380px)',
                  height: 'clamp(300px, 45vw, 460px)',
                  borderRadius: '2rem',
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute -left-6 bottom-10 rounded-2xl px-5 py-4 shadow-autumn"
                style={{ background: '#F5ECDA', border: '1px solid #D4BC8E' }}
              >
                <div className="text-3xl font-black" style={{ color: '#742014' }}>9.68</div>
                <div className="text-xs font-semibold uppercase tracking-wider mt-0.5" style={{ color: '#9D9167' }}>CGPA</div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -right-6 top-10 rounded-2xl px-5 py-4 shadow-autumn"
                style={{ background: '#442D1C' }}
              >
                <div className="text-3xl font-black" style={{ color: '#E8D1A7' }}>550+</div>
                <div className="text-xs font-semibold uppercase tracking-wider mt-0.5" style={{ color: '#9D9167' }}>LeetCode</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        whileHover={{ y: 4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow"
        style={{ color: '#84592B' }}
      >
        <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
};

export default Hero;
