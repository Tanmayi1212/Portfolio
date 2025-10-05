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
    <section id="about" data-nav-theme="light" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-0">
            <span className="text-accent">Hey there! I'm Tanmayi</span>
          </h2>
        </motion.div>
 
        {/* make layout 60:40 on md+ by using a 5-column grid and col spans (3/5 + 2/5) */}
         <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-start">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="space-y-4 md:space-y-6 md:col-span-3"
           >
             <p className="text-base md:text-lg text-slate-800 leading-relaxed">
               I'm a Computer Science student at CBIT, Hyderabad, with a passion for building the future—one web app and AI model at a time. <br/><br/> As the Technical Head of NSS, I lead teams focused on creating tech solutions that address real-world challenges. This role has given me firsthand experience in the power of collaboration and the impact of well-executed technology.
             </p>
             
             <p className="text-base md:text-lg text-slate-800 leading-relaxed">
               I’m driven by a simple motto: <b>keep learning, keep solving, keep building</b>. Whether it's diving into new frameworks or pushing the boundaries of machine learning, I’m always chasing the next challenge.
             </p>
             <p className="text-base md:text-lg text-slate-800 leading-relaxed">For me, tech isn’t just about writing code, it’s about making a difference, and that’s what I bring to every project.
             </p>
           </motion.div>
 
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={isInView ? { opacity: 1, scale: 1 } : {}}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="grid grid-cols-2 gap-6 md:col-span-2"
           >
             <div className="text-center p-8 bg-card rounded-2xl shadow-soft">
               <AnimatedCounter target={350} suffix="+" />
               <p className="text-xs md:text-sm text-muted-foreground mt-2">LeetCode Problems</p>
             </div>
             <div className="text-center p-8 bg-card rounded-2xl shadow-soft">
               <AnimatedCounter target={98} suffix="%" />
               <p className="text-xs md:text-sm text-muted-foreground mt-2">Model Accuracy</p>
             </div>
             <div className="text-center p-8 bg-card rounded-2xl shadow-soft">
               <span className="text-3xl md:text-4xl font-bold text-accent">9.68</span>
               <p className="text-xs md:text-sm text-muted-foreground mt-2">CGPA</p>
             </div>
             <div className="text-center p-8 bg-card rounded-2xl shadow-soft">
               <AnimatedCounter target={10} suffix="+" />
               <p className="text-xs md:text-sm text-muted-foreground mt-2">Projects</p>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default About;