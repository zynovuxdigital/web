import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, TrendingUp, ShieldCheck } from 'lucide-react';

const services = [
    {
        icon: <Code size={32} />,
        title: 'Web Development',
        description: 'Custom, high-performance websites built with the latest technologies (React, Next.js).',
        color: '#3b82f6'
    },
    {
        icon: <Palette size={32} />,
        title: 'UI/UX Design',
        description: 'User-centric design that balances aesthetics with functionality and conversion.',
        color: '#a855f7'
    },
    {
        icon: <TrendingUp size={32} />,
        title: 'SEO & Marketing',
        description: 'Data-driven strategies to increase your visibility and drive organic traffic.',
        color: '#22c55e'
    },
    {
        icon: <ShieldCheck size={32} />,
        title: 'Brand Identity',
        description: 'Complete branding packages including logo design, guidelines, and assets.',
        color: '#f97316'
    }
];

const Services = () => {
    return (
        <section id="services" className="section-padding">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-desc"
                    >
                        We provide comprehensive digital solutions tailored to your business goals.
                    </motion.p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="service-card"
                        >
                            <div
                                className="service-icon"
                                style={{
                                    color: service.color,
                                    backgroundColor: `${service.color}15` // 10% opacity hex approximation
                                }}
                            >
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
