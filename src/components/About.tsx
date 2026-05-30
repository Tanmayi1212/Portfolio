import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useMotionValue } from 'framer-motion';

/* ── Animated counter ── */
const AnimatedCounter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ── 3D Tilt Bento Card with Glassmorphic Glare Effect ── */
const BentoCard = ({
  children,
  className,
  style,
  delay,
  isInView,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay: number;
  isInView: boolean;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Subtle 3D rotation (max 5 degrees)
    const rX = -(mouseY / (height / 2)) * 5;
    const rY = (mouseX / (width / 2)) * 5;

    x.set(rX);
    y.set(rY);

    // Dynamic Glare coordinates
    const glareX = ((e.clientX - rect.left) / width) * 100;
    const glareY = ((e.clientY - rect.top) / height) * 100;
    e.currentTarget.style.setProperty('--glare-x', `${glareX}%`);
    e.currentTarget.style.setProperty('--glare-y', `${glareY}%`);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 80,
        delay,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border transition-shadow duration-300 ${className || ''}`}
      style={{
        ...style,
        rotateX: x,
        rotateY: y,
        transformStyle: 'preserve-3d',
        perspective: 1000,
        boxShadow: hovered ? '0 20px 40px rgba(68,45,28,0.18)' : '0 4px 12px rgba(68,45,28,0.04)',
      }}
    >
      {/* Glare swept across based on cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255, 255, 255, 0.15), transparent 60%)',
          mixBlendMode: 'overlay',
          zIndex: 10,
          opacity: hovered ? 1 : 0,
        }}
      />
      <div className="h-full w-full relative z-20" style={{ transform: 'translateZ(15px)' }}>
        {children}
      </div>
    </motion.div>
  );
};

const skills = [
  'Next.js', 'React', 'Tailwind CSS', 'DeBERTa', 'Large Language Models', 'GNNs',
  'Node.js', 'Python', 'TensorFlow', 'PyTorch', 'FastAPI', 'MongoDB',
  'SQL', 'REST APIs', 'BERT', 'scikit-learn', 'TypeScript', 'Git',
  'AWS', 'Docker', 'Data Analysis', 'DSA',
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const stats = [
    { value: 550, suffix: '+', label: 'LeetCode Problems' },
    { value: 10, suffix: '+', label: 'Projects Built' },
    { value: 4, suffix: '★', label: 'HackerRank' },
    { isText: true, title: 'LLMs & Microservices', label: 'Advanced System Architecture' },
  ];

  return (
    <section id="about" className="relative overflow-hidden" style={{ background: '#F5ECDA' }}>

      {/* ── Section header strip ── */}
      <div
        className="py-16 px-6"
        ref={ref}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-eyebrow mb-4"
          >
            <span className="w-8 h-px inline-block" style={{ background: '#84592B' }} />
            About Me
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tighter mb-6"
                style={{ color: '#442D1C' }}
              >
                Hey there!<br />
                <span className="font-display italic" style={{ color: '#743014' }}>I'm Tanmayi</span>
              </h2>

              <div className="space-y-4 text-base md:text-lg leading-relaxed" style={{ color: '#5A3E28' }}>
                <p>
                  I'm a Computer Science student at CBIT, Hyderabad, with a passion for building the future—one web app and AI model at a time.
                </p>
                <p>
                  As the <strong style={{ color: '#442D1C' }}>Technical Head of NSS</strong>, I lead teams focused on creating tech solutions that address real-world challenges.
                </p>
                <p>
                  I'm driven by a simple motto: <em style={{ color: '#743014', fontWeight: 700 }}>keep learning, keep solving, keep building.</em>
                </p>
              </div>

              <motion.a
                href="mailto:tanmayinadipalli@gmail.com"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full text-sm font-bold tracking-wide"
                style={{ background: '#442D1C', color: '#E8D1A7' }}
              >
                Let's Connect →
              </motion.a>
            </motion.div>

            {/* Right: Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <BentoCard
                  key={s.label}
                  delay={0.3 + i * 0.1}
                  isInView={isInView}
                  className="p-7"
                  style={{
                    background: i % 2 === 0 ? '#442D1C' : '#E8D1A7',
                    borderColor: i % 2 === 0 ? '#442D1C' : '#D4BC8E',
                  }}
                >
                  {s.isText ? (
                    <>
                      <div
                        className="text-xl md:text-2xl font-black mb-2 leading-tight"
                        style={{ color: i % 2 === 0 ? '#E8D1A7' : '#442D1C' }}
                      >
                        {s.title}
                      </div>
                      <div
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: i % 2 === 0 ? '#9D9167' : '#84592B' }}
                      >
                        {s.label}
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="text-4xl md:text-5xl font-black mb-2 leading-none"
                        style={{ color: i % 2 === 0 ? '#E8D1A7' : '#442D1C' }}
                      >
                        <AnimatedCounter target={s.value || 0} suffix={s.suffix} />
                      </div>
                      <div
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: i % 2 === 0 ? '#9D9167' : '#84592B' }}
                      >
                        {s.label}
                      </div>
                    </>
                  )}
                </BentoCard>
              ))}

              {/* CGPA card spanning full width */}
              <BentoCard
                delay={0.7}
                isInView={isInView}
                className="col-span-2 p-6 flex items-center justify-between"
                style={{ background: '#84592B', borderColor: '#84592B' }}
              >
                <div>
                  <div className="text-5xl font-black leading-none" style={{ color: '#E8D1A7' }}>9.68</div>
                  <div className="text-xs font-semibold uppercase tracking-wider mt-1" style={{ color: '#D4BC8E' }}>CGPA — CBIT Hyderabad</div>
                </div>
                <div className="text-6xl font-black opacity-20" style={{ color: '#E8D1A7' }}>GPA</div>
              </BentoCard>
            </div>
          </div>
        </div>
      </div>

      {/* ── Marquee skills band ── */}
      <div
        className="py-5 overflow-hidden border-t border-b"
        style={{
          borderColor: '#D4BC8E',
          background: '#442D1C'
        }}
      >
        <div className="marquee-track select-none">
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 mx-4 text-sm font-semibold uppercase tracking-widest whitespace-nowrap"
              style={{ color: '#E8D1A7' }}
            >
              {skill}
              <span style={{ color: '#84592B', fontSize: '1.2rem' }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;