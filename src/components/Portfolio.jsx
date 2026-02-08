import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'E-Commerce Redesign',
        category: 'Web Development',
        image: './project1.png',
        description: 'A complete overhaul of a fashion retailer\'s online store.'
    },
    {
        title: 'Fintech Dashboard',
        category: 'UI/UX Design',
        image: './project2.png',
        description: 'Intuitive dashboard design for a financial tracking application.'
    },
    {
        title: 'Travel App Branding',
        category: 'Brand Identity',
        image: './project3.png',
        description: 'Modern identity system for a global travel startup.'
    }
];

const Portfolio = () => {
    return (
        <section id="work" className="section-padding" style={{ background: 'rgba(24, 24, 27, 0.3)' }}>
            <div className="container">
                <div className="portfolio-header">
                    <div style={{ maxWidth: '600px' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="section-title"
                        >
                            Selected Works
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="section-desc"
                        >
                            Check out some of our recent projects that made an impact.
                        </motion.p>
                    </div>
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="btn btn-outline"
                    >
                        View All Projects
                    </motion.button>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="project-card"
                        >
                            {/* Image */}
                            <div
                                className="project-image"
                                style={{ backgroundImage: `url(${project.image})` }}
                            ></div>

                            {/* Overlay */}
                            <div className="project-overlay">
                                <div>
                                    <span className="project-category">{project.category}</span>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="project-link">
                                    <ExternalLink size={20} color="white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
