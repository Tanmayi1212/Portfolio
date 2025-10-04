import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const AnimatedCounter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl font-bold text-accent">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm <span className="text-accent">Tanmayi</span>
          </h2>
          <div className="w-20 h-1 bg-accent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Computer Science student at CBIT, Hyderabad, with a passion for creating 
              innovative solutions at the intersection of web development and artificial intelligence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently maintaining a <span className="text-foreground font-semibold">9.68 CGPA</span>, 
              I focus on building scalable web applications and exploring machine learning technologies. 
              As Technical Head of NSS, I lead teams in delivering impactful technical solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in continuous learning and problem-solving, which drives my commitment to 
              excellence in every project I undertake.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-8"
          >
            <div className="text-center p-8 bg-card rounded-2xl shadow-soft">
              <AnimatedCounter target={300} suffix="+" />
              <p className="text-sm text-muted-foreground mt-2">LeetCode Problems</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl shadow-soft">
              <AnimatedCounter target={98} suffix="%" />
              <p className="text-sm text-muted-foreground mt-2">Model Accuracy</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl shadow-soft">
              <span className="text-4xl font-bold text-accent">9.68</span>
              <p className="text-sm text-muted-foreground mt-2">CGPA</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl shadow-soft">
              <AnimatedCounter target={10} suffix="+" />
              <p className="text-sm text-muted-foreground mt-2">Projects</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
