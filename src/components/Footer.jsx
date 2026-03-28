import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import problogic from '../images/problogic.jpg';

const Footer = () => {
    return (
        <footer className="footer-bg">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <img className="h-8" src={problogic} alt="ProbLogic" />
                            <span className="font-extrabold text-xl text-white tracking-tight">ProbLogic</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                            Pre-vetted, senior-level software engineers available on contract.
                            Based in North Ridgeville, Ohio. Serving clients nationwide.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://www.linkedin.com/company/problogic/" target="_blank" rel="noreferrer"
                                className="w-9 h-9 bg-white bg-opacity-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-opacity-20 transition-all duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                                    <circle cx="4.983" cy="5.009" r="2.188"></circle>
                                    <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                                </svg>
                            </a>
                            <a href="https://twitter.com/Prob_Logic" target="_blank" rel="noreferrer"
                                className="w-9 h-9 bg-white bg-opacity-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-opacity-20 transition-all duration-200">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li><HashLink smooth to="/#about" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">About</HashLink></li>
                            <li><HashLink smooth to="/#services" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">Services</HashLink></li>
                            <li><HashLink smooth to="/#expertise" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">Expertise</HashLink></li>
                            <li><HashLink smooth to="/#process" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">Process</HashLink></li>
                            <li><Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:hr@problogic.com" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                                    hr@problogic.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:5053580510" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                                    (505) 358-0510
                                </a>
                            </li>
                            <li className="text-gray-500 text-sm">
                                North Ridgeville, OH
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white border-opacity-10 mt-12 pt-8">
                    <p className="text-gray-500 text-xs text-center">
                        &copy; {new Date().getFullYear()} ProbLogic LLC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
