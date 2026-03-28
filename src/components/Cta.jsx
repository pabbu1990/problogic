import React from 'react';
import { Link } from 'react-router-dom';

const Cta = () => {
    return (
        <div id="contact" className="py-20 md:py-28">
            <div className="max-w-4xl mx-auto px-6">
                <div className="cta-gradient rounded-2xl p-12 md:p-16 text-center" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                        Need senior engineers?
                    </h2>
                    <p className="text-lg text-blue-200 mb-8 max-w-xl mx-auto">
                        Tell us about your requirements and we'll send matched profiles within 48 hours. No commitment, no pressure.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold text-base px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg"
                        >
                            Send a Message
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <a
                            href="mailto:hr@problogic.com"
                            className="inline-flex items-center gap-2 text-white font-semibold text-base px-8 py-4 rounded-lg border-2 border-white border-opacity-25 hover:border-opacity-50 transition-all duration-200"
                        >
                            hr@problogic.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cta;
