import React from 'react';

const caseStudies = [
    {
        industry: 'Financial Services',
        industryColor: 'blue',
        challenge: 'A mid-size fintech company needed two senior Java developers urgently after their lead engineer left mid-sprint. The team was behind on a critical payment processing migration.',
        solution: 'Placed two Spring Boot engineers with 8+ years each within 4 business days. Both had prior experience in payment systems and PCI-compliant environments.',
        results: [
            { label: 'Time to Place', value: '4 Days' },
            { label: 'Contract Duration', value: '10 Months' },
            { label: 'Sprint Velocity', value: '+40%' },
        ],
        quote: 'They understood what we needed technically — not just keywords on a resume.',
        quoteRole: 'Engineering Manager',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        industry: 'Healthcare Technology',
        industryColor: 'green',
        challenge: 'A healthtech startup scaling from Series A needed a DevOps engineer to build out their CI/CD pipeline and migrate from a single EC2 instance to a Kubernetes cluster on AWS.',
        solution: 'Matched them with a senior DevOps engineer (6 years, Kubernetes + Terraform + AWS) who had previously built similar infrastructure for a healthcare data platform.',
        results: [
            { label: 'Time to Place', value: '3 Days' },
            { label: 'Contract Duration', value: '8+ Months' },
            { label: 'Deploy Frequency', value: '10x Faster' },
        ],
        quote: 'The engineer hit the ground running — our deploy pipeline was production-ready in three weeks.',
        quoteRole: 'VP of Engineering',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
    },
    {
        industry: 'Insurance',
        industryColor: 'purple',
        challenge: 'A regional insurance carrier was modernizing their claims processing system from a legacy monolith to microservices. They needed a QA lead to build out automated testing from scratch.',
        solution: 'Placed a senior SDET with 7 years experience in Selenium, Cypress, and API testing — with prior insurance domain experience. Set up the entire test automation framework.',
        results: [
            { label: 'Time to Place', value: '5 Days' },
            { label: 'Contract Duration', value: '12 Months' },
            { label: 'Test Coverage', value: '0% → 78%' },
        ],
        quote: 'We went from zero automated tests to a comprehensive suite in under two months.',
        quoteRole: 'Director of IT',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
];

const colorMap = {
    blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        iconBg: 'bg-blue-100',
        iconText: 'text-blue-600',
        accent: 'border-blue-200',
    },
    green: {
        bg: 'bg-green-50',
        text: 'text-green-700',
        iconBg: 'bg-green-100',
        iconText: 'text-green-600',
        accent: 'border-green-200',
    },
    purple: {
        bg: 'bg-purple-50',
        text: 'text-purple-700',
        iconBg: 'bg-purple-100',
        iconText: 'text-purple-600',
        accent: 'border-purple-200',
    },
};

const CaseStudies = () => {
    return (
        <div id="results" className="py-20 md:py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                        Proven Results
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Real placements. Real impact. Here's how we've helped engineering teams move faster.
                    </p>
                </div>

                <div className="space-y-8" data-aos="fade-up" data-aos-delay="200">
                    {caseStudies.map((study, index) => {
                        const colors = colorMap[study.industryColor] || colorMap.blue;
                        return (
                            <div
                                key={index}
                                className={`bg-white rounded-xl border border-gray-100 overflow-hidden card-hover`}
                            >
                                <div className="p-6 md:p-8">
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className={`w-10 h-10 ${colors.iconBg} rounded-lg flex items-center justify-center ${colors.iconText}`}>
                                            {study.icon}
                                        </div>
                                        <span className={`text-xs font-semibold uppercase tracking-wider ${colors.text} ${colors.bg} px-3 py-1 rounded-full`}>
                                            {study.industry}
                                        </span>
                                    </div>

                                    {/* Challenge & Solution */}
                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">The Challenge</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Our Solution</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                                        </div>
                                    </div>

                                    {/* Results row */}
                                    <div className={`flex flex-wrap gap-4 mb-6 pb-6 border-b ${colors.accent}`}>
                                        {study.results.map((result, rIndex) => (
                                            <div key={rIndex} className={`${colors.bg} rounded-lg px-5 py-3 flex-1 min-w-[140px] text-center`}>
                                                <div className={`text-xl font-extrabold ${colors.text}`}>{result.value}</div>
                                                <div className="text-xs text-gray-500 mt-1">{result.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                                        </svg>
                                        <div>
                                            <p className="text-gray-700 text-sm italic">{study.quote}</p>
                                            <p className="text-gray-400 text-xs mt-1">— {study.quoteRole}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
