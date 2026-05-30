import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import mentalHealthImg from '@/assets/project-mental-health.jpg';
import bookifyImg from '@/assets/project-bookify.jpg';
import fakeNewsImg from '@/assets/project-fake-news.jpg';
import twitterImg from '@/assets/project-twitter.jpg';

const projects = [
  {
    title: 'AI-Powered Identity Verification & Fraud Detection',
    description:
      'Production-ready KYC verification backend supporting PAN and Aadhaar document using OCR. Automated field extraction and MongoDB for persistent storage.',
    image: fakeNewsImg,
    tech: ['PyTorch', 'FastAPI', 'Easy OCR', 'MongoDB'],
    github: 'https://github.com/Tanmayi1212/Al--Powered-_Identity_Verification_and_Fraud_Detection_for_KYC_Compliance',
    tag: 'AI / Backend',
  },
  {
    title: 'Food Classifier & NGO Food Routing Platform',
    description:
      'CNN-powered web app for image-based food freshness classification. Automated surplus food routing from events to NGOs with real-time tracking & cloud deployment.',
    image: twitterImg,
    tech: ['Python', 'React', 'TensorFlow'],
    github: 'https://github.com/Tanmayi1212/foodflow-care',
    tag: 'Full Stack',
  },
  {
    title: 'AI-Driven Candidate Allocation System',
    description:
      'ML-based allocation platform using semantic resume analysis with BERT-based embeddings. Processed 500+ candidate profiles using automated pipelines.',
    image: bookifyImg,
    tech: ['React', 'Flask', 'Sentence-BERT', 'scikit-learn'],
    github: 'https://github.com/Tanmayi1212/AI-Based-Smart-Allocation-Engine',
    tag: 'ML / NLP',
  },
  {
    title: 'Mental Health Journal with AI Insights',
    description:
      'Secure full-stack journaling platform providing AI-driven mental health insights for 100+ users with real-time analysis and actionable recommendations.',
    image: mentalHealthImg,
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Cohere API'],
    github: 'https://github.com/Tanmayi1212',
    tag: 'Web App',
  },
];

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  tag: string;
}

const ProjectCard = ({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group rounded-3xl overflow-hidden border card-hover"
      style={{ background: '#E8D1A7', borderColor: '#D4BC8E' }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.6 }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(to top, rgba(68,45,28,0.7), transparent)',
            opacity: hovered ? 1 : 0.3,
          }}
        />

        {/* Tag */}
        <div
          className="absolute top-4 left-4 pill"
          style={{ background: '#442D1C', color: '#E8D1A7' }}
        >
          {project.tag}
        </div>

        {/* Links on hover */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          transition={{ duration: 0.25 }}
          className="absolute bottom-4 right-4 flex gap-2"
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: '#E8D1A7', color: '#442D1C' }}
          >
            <Github size={16} />
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: '#84592B', color: '#E8D1A7' }}
          >
            <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-xl font-bold mb-2 leading-tight tracking-tight"
          style={{ color: '#442D1C' }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#5A3E28' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map(tech => (
            <span
              key={tech}
              className="pill"
              style={{
                background: 'rgba(68,45,28,0.08)',
                color: '#84592B',
                border: '1px solid rgba(132,89,43,0.2)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: '#F5ECDA' }}
      ref={ref}
    >
      {/* Decorative blob */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-40 pointer-events-none"
        style={{ background: '#E8D1A7', filter: 'blur(60px)', transform: 'translate(30%, -30%)' }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="section-eyebrow mb-4">
              <span className="w-8 h-px inline-block" style={{ background: '#84592B' }} />
              Recent Work
            </p>
            <h2
              className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tighter"
              style={{ color: '#442D1C' }}
            >
              Selected<br />
              <span className="font-display italic" style={{ color: '#743014' }}>Projects</span>
            </h2>
          </div>

          <motion.a
            href="https://github.com/Tanmayi1212"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 self-start md:self-end px-7 py-3.5 rounded-full text-sm font-bold tracking-wide"
            style={{ background: '#442D1C', color: '#E8D1A7' }}
          >
            View GitHub
            <ArrowUpRight size={15} />
          </motion.a>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
