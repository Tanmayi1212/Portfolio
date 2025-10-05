import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Users } from 'lucide-react';

const services = [
	{
		icon: Code2,
		title: 'Web Development',
		description:
			'Building modern, responsive web applications with a focus on clean architecture and performance.',
		keyTech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express.js'],
	},
	{
		icon: Brain,
		title: 'ML & Data Science',
		description:
			'Applied ML and data analysis for NLP and predictive tasks, from prototyping to model evaluation.',
		keyTech: ['Python', 'TensorFlow', 'Scikit-learn', 'BERT', 'Data Analysis'],
	},
	{
		icon: Users,
		title: 'Leadership',
		description:
			'Leading small engineering teams, mentoring peers, and coordinating deliveries across stakeholders.',
		keyTech: ['Team Management', 'Mentoring', 'Project Planning', 'Communication'],
	},
];

const skillsRow = ["Python", "JavaScript", "SQL", "HTML", "CSS", "Tailwind CSS", "MongoDB", "Database Management Systems", "Object-Oriented Programming", "Data Structures & Algorithms", "Operating Systems", "GitHub", "Linux", "Transformers", "Machine Learning"];



const Services = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<section
			id="services"
			data-nav-theme="dark"
			className="py-24 px-6 bg-primary text-primary-foreground"
		>
			<div className="container mx-auto max-w-6xl" ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="mb-8 text-center"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-2">
						Expertise & Skills
					</h2>
					<p className="text-sm text-primary-foreground/70 max-w-2xl mx-auto">
						I focus on building production-ready web apps and applied ML solutions
						— delivering reliable, maintainable systems.
					</p>

					<div className="mt-6 flex flex-wrap justify-center gap-2">
						{skillsRow.map((s) => (
							<span
								key={s}
								className="px-3 py-1 text-xs rounded-full bg-primary-foreground/6 text-primary-foreground/90 border border-primary-foreground/8"
							>
								{s}
							</span>
						))}
					</div>

					<div className="w-20 h-1 bg-accent mx-auto mt-6" />
				</motion.div>

				<div className="grid md:grid-cols-3 gap-6 mt-8">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: index * 0.12 }}
							whileHover={{ scale: 1.03 }}
							className="flex items-start gap-4 p-5 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 hover:border-accent/50 transition-all cursor-pointer"
						>
							<div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
								<service.icon className="w-6 h-6 text-accent" />
							</div>

							<div className="flex-1">
								<h3 className="text-lg font-semibold mb-1">
									{service.title}
								</h3>
								<p className="text-sm text-primary-foreground/70 mb-3 leading-snug">
									{service.description}
								</p>
								<p className="text-xs text-primary-foreground/60">
									{service.title === 'Leadership'
										? 'Key Skills:'
										: 'Key Tech:'}{' '}
									<span className="font-medium text-primary-foreground/90">
										{service.keyTech.join(' • ')}
									</span>
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
