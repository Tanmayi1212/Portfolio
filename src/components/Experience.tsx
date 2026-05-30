import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'AI Intern',
    company: 'Infosys Springboard',
    period: '2025',
    description:
      'Built an AI-powered OCR-based KYC verification system; designed FastAPI services, MongoDB schemas, and document validation pipelines for fraud detection and compliance automation.',
    type: 'work',
  },
  {
    title: 'Technical Head',
    company: 'CBIT NSS',
    period: '2025 – Present',
    description:
      'Led development of the official CBIT NSS website; built 80% of the platform, defined architecture, conducted code reviews, and managed deployment workflows.',
    type: 'leadership',
  },
  {
    title: 'Technical Incharge',
    company: 'CBIT NSS',
    period: '2024 – 2025',
    description:
      'Strengthened system reliability and security while mentoring junior developers and coordinating technical initiatives.',
    type: 'leadership',
  },
  {
    title: 'Junior Developer',
    company: 'CBIT OpenSource',
    period: '2025 – 2026',
    description:
      'Contributed to production features, documentation, and agile sprint development.',
    type: 'work',
  },
];

const education = [
  {
    degree: 'B.Tech, Computer Science',
    institution: 'CBIT Hyderabad',
    period: '2023 – 2027',
    score: 'CGPA: 9.68 / 10',
  },
  {
    degree: 'Intermediate (12th)',
    institution: 'Sri Chaitanya, Hyderabad',
    period: '2021 – 2023',
    score: '98.1%',
  },
  {
    degree: 'CBSE (10th)',
    institution: 'Sister Nivedita School',
    period: '2021',
    score: '95.4%',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: '#F5ECDA' }}
      ref={ref}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-eyebrow mb-4">
            <span className="w-8 h-px inline-block" style={{ background: '#84592B' }} />
            My Journey
          </p>
          <h2
            className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tighter"
            style={{ color: '#442D1C' }}
          >
            Experience &<br />
            <span className="font-display italic" style={{ color: '#743014' }}>Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* ── Experience column ── */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: '#442D1C' }}
              >
                <Briefcase className="w-5 h-5" style={{ color: '#E8D1A7' }} />
              </div>
              <h3 className="text-xl font-bold tracking-tight" style={{ color: '#442D1C' }}>
                Experience & Leadership
              </h3>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-3 top-3 bottom-3 w-px"
                style={{ background: 'linear-gradient(to bottom, #84592B, #D4BC8E)' }}
              />

              <div className="space-y-10 pl-10">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -24 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div
                      className="absolute -left-[2.35rem] top-1.5 w-3.5 h-3.5 rounded-full border-2"
                      style={{ background: '#F5ECDA', borderColor: '#84592B' }}
                    />

                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h4 className="text-lg font-bold" style={{ color: '#442D1C' }}>
                        {exp.title}
                      </h4>
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: '#E8D1A7', color: '#84592B' }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-sm font-semibold mb-2" style={{ color: '#743014' }}>
                      {exp.company}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#5A3E28' }}>
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Education column ── */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: '#84592B' }}
              >
                <GraduationCap className="w-5 h-5" style={{ color: '#E8D1A7' }} />
              </div>
              <h3 className="text-xl font-bold tracking-tight" style={{ color: '#442D1C' }}>
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="card-hover rounded-2xl p-6 border"
                  style={{ background: '#E8D1A7', borderColor: '#D4BC8E' }}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-base font-bold leading-tight" style={{ color: '#442D1C' }}>
                      {edu.degree}
                    </h4>
                    <span
                      className="text-xs font-semibold shrink-0 px-2.5 py-1 rounded-full"
                      style={{ background: '#442D1C', color: '#E8D1A7' }}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-sm font-medium mb-3" style={{ color: '#743014' }}>
                    {edu.institution}
                  </div>
                  <div
                    className="inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1.5 rounded-full"
                    style={{ background: '#84592B', color: '#E8D1A7' }}
                  >
                    <span>🎓</span>
                    {edu.score}
                  </div>
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
