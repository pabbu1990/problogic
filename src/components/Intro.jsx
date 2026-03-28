import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Intro = () => {
    return (
        <div className="py-20 md:py-28" id="about">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left column - Text */}
                    <div data-aos="fade-up">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
                            About ProbLogic
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
                            Your talent partner, not just another vendor.
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-5">
                            ProbLogic works directly with engineering leaders to place senior, technically-vetted
                            contractors where they're needed most. No resume flooding. No junior resources.
                            No wasted interviews.
                        </p>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                            Every engineer in our network has passed rigorous technical assessments covering
                            system design, coding proficiency, and domain knowledge. We only represent
                            professionals we'd hire ourselves.
                        </p>
                        <HashLink
                            smooth to="/#contact"
                            className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200"
                        >
                            Work with us
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </HashLink>
                    </div>

                    {/* Right column - Highlights grid */}
                    <div className="grid grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="bg-blue-50 rounded-xl p-6">
                            <div className="text-3xl font-extrabold text-blue-600 mb-2">W2</div>
                            <div className="text-sm font-semibold text-gray-700">All Employees</div>
                            <p className="text-xs text-gray-500 mt-1">Background checked and drug screened</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6">
                            <div className="text-3xl font-extrabold text-gray-900 mb-2">6-12+</div>
                            <div className="text-sm font-semibold text-gray-700">Month Contracts</div>
                            <p className="text-xs text-gray-500 mt-1">Flexible engagement durations</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6">
                            <div className="text-3xl font-extrabold text-gray-900 mb-2">Remote</div>
                            <div className="text-sm font-semibold text-gray-700">Hybrid or On-Site</div>
                            <p className="text-xs text-gray-500 mt-1">Whatever works for your team</p>
                        </div>
                        <div className="bg-blue-50 rounded-xl p-6">
                            <div className="text-3xl font-extrabold text-blue-600 mb-2">48hr</div>
                            <div className="text-sm font-semibold text-gray-700">Profile Delivery</div>
                            <p className="text-xs text-gray-500 mt-1">Vetted candidates, fast</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
