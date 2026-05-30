import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = ['about', 'services', 'experience', 'projects', 'contact'];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="site-nav"
      >
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo / Wordmark */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg font-black tracking-tight"
            style={{ color: '#442D1C', fontFamily: 'Outfit, sans-serif' }}
          >
            TN<span style={{ color: '#84592B' }}>.</span>
          </motion.button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (i + 1) }}
                onClick={() => scrollTo(item)}
                className="nav-link text-sm font-medium capitalize tracking-wide transition-colors"
                style={{ color: '#442D1C' }}
              >
                {item}
              </motion.button>
            ))}

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              href="mailto:tanmayinadipalli@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
              style={{ background: '#442D1C', color: '#E8D1A7' }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            style={{ color: '#442D1C' }}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            style={{ background: '#F5ECDA' }}
          >
            <button
              className="absolute top-5 right-6 p-2"
              style={{ color: '#442D1C' }}
              onClick={() => setMobileOpen(false)}
            >
              <X size={26} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => scrollTo(item)}
                  className="text-4xl font-bold capitalize tracking-tight"
                  style={{ color: '#442D1C' }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
