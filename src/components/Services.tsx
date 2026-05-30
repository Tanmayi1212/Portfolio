import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Users, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    number: '01',
    title: 'Web Development',
    description:
      'Building modern, responsive web applications with a focus on clean architecture, performance, and exceptional user experience.',
    keyTech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express.js'],
  },
  {
    icon: Brain,
    number: '02',
    title: 'ML & Data Science',
    description:
      'Applied ML and data analysis for NLP and predictive tasks — from prototyping to model evaluation and production deployment.',
    keyTech: ['Python', 'TensorFlow', 'Scikit-learn', 'BERT', 'Data Analysis'],
  },
  {
    icon: Users,
    number: '03',
    title: 'Leadership',
    description:
      'Leading small engineering teams, mentoring peers, and coordinating deliveries across stakeholders with clear communication.',
    keyTech: ['Team Management', 'Mentoring', 'Project Planning', 'Agile'],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="services"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: '#442D1C' }}
      ref={ref}
    >
      {/* Subtle texture circles */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: '#84592B', filter: 'blur(60px)' }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: '#9D9167', filter: 'blur(60px)' }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-eyebrow mb-4" style={{ color: '#9D9167' }}>
            <span className="w-8 h-px inline-block" style={{ background: '#9D9167' }} />
            What I Do
          </p>
          <h2
            className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tighter"
            style={{ color: '#E8D1A7' }}
          >
            Expertise &<br />
            <span className="font-display italic" style={{ color: '#9D9167' }}>Skills</span>
          </h2>
        </motion.div>

        {/* Service cards — stacked list style like portfoliopranav.live */}
        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group border-t py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 cursor-default transition-all hover:pl-2"
              style={{ borderColor: 'rgba(232,209,167,0.15)' }}
            >
              {/* Number */}
              <span
                className="font-black text-6xl md:text-7xl leading-none select-none shrink-0 transition-colors"
                style={{ color: 'rgba(232,209,167,0.12)', fontFamily: 'Outfit, sans-serif' }}
              >
                {service.number}
              </span>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors"
                style={{ background: 'rgba(232,209,167,0.08)', border: '1px solid rgba(232,209,167,0.12)' }}
              >
                <service.icon
                  className="w-6 h-6 transition-colors"
                  style={{ color: '#9D9167' }}
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-2xl md:text-3xl font-bold mb-3 tracking-tight"
                  style={{ color: '#E8D1A7' }}
                >
                  {service.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'rgba(232,209,167,0.65)' }}>
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.keyTech.map(tech => (
                    <span
                      key={tech}
                      className="pill"
                      style={{
                        background: 'rgba(157,145,103,0.15)',
                        color: '#9D9167',
                        border: '1px solid rgba(157,145,103,0.25)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <motion.div
                whileHover={{ rotate: 15, scale: 1.15 }}
                className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center border"
                style={{ borderColor: 'rgba(232,209,167,0.2)', color: '#9D9167' }}
              >
                <ArrowUpRight size={18} />
              </motion.div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t" style={{ borderColor: 'rgba(232,209,167,0.15)' }} />
        </div>
      </div>
    </section>
  );
};

export default Services;
