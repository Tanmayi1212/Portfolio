import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Users } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building modern, responsive web applications using React, Next.js, and Node.js. Focus on clean architecture, scalability, and optimal performance.',
    skills: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express.js']
  },
  {
    icon: Brain,
    title: 'ML & Data Science',
    description: 'Developing machine learning models and data analysis solutions. Expertise in NLP, sentiment analysis, and building intelligent applications.',
    skills: ['Python', 'TensorFlow', 'Scikit-learn', 'BERT', 'Data Analysis']
  },
  {
    icon: Users,
    title: 'Leadership',
    description: 'Leading technical teams and mentoring juniors in software development. Coordinating cross-functional projects and delivering scalable solutions.',
    skills: ['Team Management', 'Mentoring', 'Project Planning', 'Communication']
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" data-nav-theme="dark" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Niches & Services
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              className="bg-primary-foreground/5 backdrop-blur-sm p-8 rounded-2xl border border-primary-foreground/10 hover:border-accent/50 transition-all cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
