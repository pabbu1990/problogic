import React from 'react';

const steps = [
    {
        number: '01',
        title: 'Share Your Requirements',
        description: 'A quick 15-minute call to understand the role, tech stack, team dynamics, and timeline. That\'s all we need to get started.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Review Matched Profiles',
        description: 'Within 48 hours, we present 2-3 pre-vetted candidates. Each profile includes skills summary, assessment scores, and availability.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Interview & Select',
        description: 'Interview candidates directly. We handle scheduling and logistics. You choose the best fit for your team.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Onboard & Build',
        description: 'Your new engineer starts within a week. We manage payroll, benefits, and ongoing support so your team stays focused on delivery.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
];

const HowItWorks = () => {
    return (
        <div id="process" className="py-20 md:py-28 bg-gray-50 grid-pattern">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        From first call to engineer on your team — typically under a week.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
                    {steps.map((step, index) => (
                        <div key={index} className="relative bg-white rounded-xl p-6 border border-gray-100 card-hover">
                            {/* Step number */}
                            <div className="flex items-center justify-between mb-5">
                                <span className="text-4xl font-extrabold text-blue-100">{step.number}</span>
                                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
