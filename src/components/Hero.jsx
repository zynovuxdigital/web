import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            {/* Background Elements */}
            <div className="hero-bg-blob blob-1" />
            <div className="hero-bg-blob blob-2" />

            <div className="container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="status-badge"
                    >
                        <span className="status-dot"></span>
                        <span>Available for new projects</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hero-title"
                    >
                        We Craft <br />
                        <span className="gradient-text">Digital Excellence</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="hero-text"
                    >
                        Zynovux is a full-service digital agency specializing in bespoke website development, UI/UX design, and brand identity.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="hero-actions"
                    >
                        <a href="#work" className="btn btn-primary">
                            View Our Work
                            <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Us
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="scroll-indicator"
            >
                <ChevronRight size={24} style={{ transform: 'rotate(90deg)' }} />
            </motion.div>
        </section>
    );
};

export default Hero;
