import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'AI Intern',
    company: 'Infosys Springboard',
    period: '2025',
    description: 'Built an AI-powered OCR-based KYC verification system; designed FastAPI services, MongoDB schemas, and document validation pipelines for fraud detection and compliance automation.',
    type: 'work'
  },
  {
    title: 'Technical Head',
    company: 'CBIT NSS',
    period: '2025–Present',
    description: 'Led development of the official CBIT NSS website; built 80% of the platform, defined architecture, conducted code reviews, and managed deployment workflows.',
    type: 'leadership'
  },
  {
    title: 'Technical Incharge',
    company: 'CBIT NSS',
    period: '2024–2025',
    description: 'Strengthened system reliability and security while mentoring junior developers and coordinating technical initiatives.',
    type: 'leadership'
  },
  {
    title: 'Junior Developer',
    company: 'CBIT OpenSource',
    period: '2025–2026',
    description: 'Contributed to production features, documentation, and agile sprint development.',
    type: 'work'
  }
];

const education = [
  {
    degree: 'B.Tech, Computer Science',
    institution: 'CBIT Hyderabad',
    period: '2023–2027',
    score: 'CGPA: 9.68/10'
  },
  {
    degree: 'Intermediate',
    institution: 'Sri Chaitanya Hyderabad',
    period: '2021–2023',
    score: '98.1%'
  },
  {
    degree: 'CBSE',
    institution: 'Sister Nivedita School Hyderabad',
    period: '2021',
    score: '95.4%'
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" data-nav-theme="light" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent">Experience & Education</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-8">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold">Experience & Leadership</h3>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-accent/30"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-accent" />
                  <div className="mb-1 flex flex-wrap items-baseline gap-2 justify-between">
                    <h4 className="text-lg font-bold text-accent">{exp.title}</h4>
                    <span className="text-sm font-medium text-slate-500 bg-secondary px-2 py-0.5 rounded-full">{exp.period}</span>
                  </div>
                  <div className="text-md font-medium text-slate-700 mb-2">{exp.company}</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-accent/30"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-accent" />
                  <div className="mb-1 flex flex-wrap items-baseline gap-2 justify-between">
                    <h4 className="text-lg font-bold text-accent">{edu.degree}</h4>
                    <span className="text-sm font-medium text-slate-500 bg-secondary px-2 py-0.5 rounded-full">{edu.period}</span>
                  </div>
                  <div className="text-md font-medium text-slate-700 mb-2">{edu.institution}</div>
                  <p className="text-sm font-semibold text-slate-600 bg-slate-100 inline-block px-2 py-1 rounded">Score: {edu.score}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
