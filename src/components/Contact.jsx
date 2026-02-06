import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaYoutube, FaInstagram, FaTiktok, FaXTwitter, FaFacebookF } from 'react-icons/fa6';

const Contact = () => {
    return (
        <footer id="contact" className="contact-footer">
            <div className="container">
                <div className="contact-layout">

                    {/* Contact Info */}
                    <div className="contact-info">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="section-title"
                            style={{ marginBottom: '1.5rem' }}
                        >
                            Let's build something <br />
                            <span className="gradient-text">amazing together.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="section-desc"
                            style={{ marginBottom: '2.5rem' }}
                        >
                            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
                        </motion.p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="contact-item">
                                <div className="contact-icon-box">
                                    <Mail size={18} />
                                </div>
                                <span>zynovux@gmail.com</span>
                            </div>
                            {/* <div className="contact-item">
                                <div className="contact-icon-box">
                                    <Phone size={18} />
                                </div>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon-box">
                                    <MapPin size={18} />
                                </div>
                                <span>123 Digital Ave, Tech City</span>
                            </div> */}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="contact-form"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="form-row">
                                <div>
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-input" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-input" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea rows="4" className="form-textarea" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                Send Message
                                <Send size={18} style={{ marginLeft: '0.5rem' }} />
                            </button>
                        </motion.form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Zynovux Digital. All rights reserved.</p>
                    <div className="social-links">
                        <a href="https://youtube.com/@zynovuxdigital" target="_blank" rel="noopener noreferrer" className="social-link"><FaYoutube size={20} /></a>
                        <a href="https://www.instagram.com/zynovuxdigital" target="_blank" rel="noopener noreferrer" className="social-link"><FaInstagram size={20} /></a>
                        <a href="https://www.tiktok.com/@zynovuxdigital" target="_blank" rel="noopener noreferrer" className="social-link"><FaTiktok size={20} /></a>
                        <a href="https://x.com/zynovuxdigital" target="_blank" rel="noopener noreferrer" className="social-link"><FaXTwitter size={20} /></a>
                        <a href="https://www.facebook.com/zynovuxdigital/" target="_blank" rel="noopener noreferrer" className="social-link"><FaFacebookF size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
