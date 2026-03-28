import React from 'react';

const services = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'Staff Augmentation',
        description: 'Scale your engineering team quickly with senior contractors who integrate seamlessly. Available for 6-12+ month engagements, remote or on-site.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        title: 'Project-Based Teams',
        description: 'Need a full squad? We assemble cross-functional teams of developers, QA, and DevOps engineers tailored to your project requirements.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: 'Direct Placement',
        description: 'Looking for permanent hires? We source, vet, and present senior candidates who match your technical requirements and team culture.',
    },
];

const whyUs = [
    {
        icon: '⚡',
        title: '48-Hour Matching',
        desc: 'Share your requirements, get 2-3 vetted profiles within 48 hours. No weeks of recruiting overhead.',
    },
    {
        icon: '🛡️',
        title: 'Technically Vetted',
        desc: 'Rigorous coding assessments and system design interviews. We send qualified engineers, not just resumes.',
    },
    {
        icon: '🏢',
        title: 'Domain Expertise',
        desc: 'Engineers with hands-on experience in financial services, healthcare, insurance, and enterprise SaaS.',
    },
    {
        icon: '📋',
        title: 'We Handle Everything',
        desc: 'Payroll, benefits, background checks, drug screening, and compliance. Your team focuses on building product.',
    },
];

const Services = () => {
    return (
        <div id="services" className="py-20 md:py-28">
            {/* Services Section */}
            <section className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                        How We Help
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Flexible engagement models designed for how modern engineering teams actually work.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
                    {services.map((service, index) => (
                        <div key={index} className="card-hover bg-white rounded-xl p-8 border border-gray-100 hover:border-blue-200">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-5">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="max-w-6xl mx-auto px-6 mt-24">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                        Why Teams Choose ProbLogic
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        We're not another staffing agency. Here's what makes us different.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5" data-aos="fade-up" data-aos-delay="200">
                    {whyUs.map((item, index) => (
                        <div key={index} className="card-hover flex gap-5 bg-gray-50 rounded-xl p-6 border border-gray-100 hover:bg-white hover:border-blue-200">
                            <div className="text-3xl flex-shrink-0 mt-1">{item.icon}</div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
