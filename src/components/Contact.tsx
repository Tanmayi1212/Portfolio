import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const socials = [
	{
		name: 'GitHub',
		icon: Github,
		link: 'https://github.com/Tanmayi1212',
		color: 'hover:text-orange-500',
	},
	{
		name: 'LinkedIn',
		icon: Linkedin,
		link: 'https://www.linkedin.com/in/tanmayi-nadipalli/',
		color: 'hover:text-orange-500',
	},
	{
		name: 'LeetCode',
		icon: Code2,
		link: 'https://leetcode.com/u/Tanmayi_12/',
		color: 'hover:text-orange-500',
	},
	{
		name: 'Email',
		icon: Mail,
		link: 'mailto:tanmayinadipalli@gmail.com',
		color: 'hover:text-orange-500',
	},
];

const Contact = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	return (
		// mark this section as dark so navbar stays appropriate and use dark background
		<section
			id="contact"
			data-nav-theme="dark"
			className="py-24 px-6 bg-dark-section text-white"
		>
			<div className="container mx-auto max-w-4xl text-center" ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
				>
					<motion.h2
						animate={isInView ? { scale: [1, 1.02, 1] } : {}}
						transition={{ duration: 1, delay: 0.5 }}
						className="text-4xl md:text-6xl font-bold mb-6 text-white"
					>
						<br />
						<span className="text-accent">
							{' '}
							Let&apos;s Create Something Amazing Together
						</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : {}}
						transition={{ delay: 0.6 }}
						className="text-xl text-gray-300 mb-12 leading-relaxed"
					>
						I'm always excited to collaborate on innovative projects.
						<br />
						Feel free to reach out!
					</motion.p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="flex justify-center gap-6 mb-12"
				>
					{socials.map((social, index) => (
						<motion.a
							key={social.name}
							href={social.link}
							target="_blank"
							rel="noopener noreferrer"
							initial={{ opacity: 0, scale: 0 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{
								delay: 0.5 + index * 0.1,
								type: 'spring',
								stiffness: 200,
							}}
							whileHover={{ scale: 1.2, rotate: 5 }}
							whileTap={{ scale: 0.9 }}
							// use a dark card background and white icon color for contrast
							className={`w-16 h-16 rounded-full bg-surface-dark shadow-soft flex items-center justify-center transition-colors text-white ${social.color}`}
						>
							<social.icon className="w-7 h-7" />
						</motion.a>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					transition={{ delay: 0.9 }}
					className="pt-12 border-t border-white/10"
				>
					<p className="text-gray-400">
						© 2025 Tanmayi Nadipalli. Built with React & Framer Motion.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
