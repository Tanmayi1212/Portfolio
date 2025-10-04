import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import mentalHealthImg from '@/assets/project-mental-health.jpg';
import bookifyImg from '@/assets/project-bookify.jpg';
import fakeNewsImg from '@/assets/project-fake-news.jpg';
import twitterImg from '@/assets/project-twitter.jpg';

const projects = [
  {
    title: 'Mental Health Journal with AI Insights',
    description: 'Microservice-style journaling platform with secure OAuth2.0 login, NLP sentiment analysis, and personalized AI feedback. Improved AI response time by 30%.',
    image: mentalHealthImg,
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Cohere API', 'OAuth2.0'],
    github: 'https://github.com/Tanmayi1212',
  },
  {
    title: 'Bookify Wrapped',
    description: 'Analytics dashboard inspired by Spotify Wrapped for book reading statistics. Features modular components for scalability and data visualization with Chart.js.',
    image: bookifyImg,
    tech: ['React', 'Google Books API', 'Chart.js'],
    github: 'https://github.com/Tanmayi1212',
  },
  {
    title: 'Fake News Classifier',
    description: 'Fine-tuned BERT model achieving 98% accuracy on political news data. Deployed as a secure, real-time misinformation detection application.',
    image: fakeNewsImg,
    tech: ['Python', 'BERT', 'Transformers', 'Streamlit'],
    github: 'https://github.com/Tanmayi1212',
  },
  {
    title: 'Twitter Sentiment Analysis',
    description: 'ML pipeline achieving 85% accuracy in sentiment classification using Logistic Regression. Applied unit testing to data preprocessing workflows.',
    image: twitterImg,
    tech: ['Python', 'Scikit-learn', 'Logistic Regression'],
    github: 'https://github.com/Tanmayi1212',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent">Recent Work</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

const ProjectCard = ({ project, index, isInView }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition-all cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-primary/95 flex items-center justify-center p-8"
        >
          <div className="text-primary-foreground text-center">
            <p className="text-sm leading-relaxed mb-6">{project.description}</p>
            <div className="flex gap-4 justify-center">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="p-6 bg-card">
        <h3 className="text-xl font-bold mb-3 text-accent">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
