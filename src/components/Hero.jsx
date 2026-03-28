import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
    return (
        <div className="hero-gradient" id="hero">
            <NavBar />
            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-24 md:pt-48 md:pb-32">
                <div className="max-w-2xl" data-aos="fade-up" data-aos-duration="800">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-15 rounded-full px-4 py-2 mb-8">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-blue-200 text-sm font-medium">Actively placing engineers nationwide</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
                        Senior Tech Talent,{' '}
                        <span className="gradient-text">Ready in Days.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-blue-200 leading-relaxed mb-10 max-w-xl">
                        ProbLogic provides pre-vetted, senior-level software engineers on a contract basis.
                        Every candidate has 5-15+ years of enterprise experience and passes rigorous technical assessments.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <HashLink
                            smooth to="/#contact"
                            className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold text-base px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg"
                        >
                            Schedule a Call
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </HashLink>
                        <HashLink
                            smooth to="/#expertise"
                            className="inline-flex items-center gap-2 text-white font-semibold text-base px-8 py-4 rounded-lg border-2 border-white border-opacity-25 hover:border-opacity-50 transition-all duration-200"
                        >
                            View Our Talent
                        </HashLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
